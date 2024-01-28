import type { ExecutorContext } from '@nx/devkit';
import { exec } from 'child_process';
import { promisify } from 'util';
import { start } from '@docusaurus/core/lib';
import { CompileDocsExecutorSchema } from './schema';
import * as path from 'path';
import * as fs from 'fs';
import { pluginDocConfig, writeDocs } from '../../scripts/genDocs';

export default async function* runExecutor(
  options: CompileDocsExecutorSchema,
  context: ExecutorContext
) {
  // const pathToModule = require.resolve('@artish/docs');
  // console.log('pathToModule is', pathToModule); // a number,

  const workSpaceRoot = context.root;

  // assign path to node_modules/@artish/docs once this is installed as a dependency

  /*  isDevMonoRepo === 'FALSE'
      ? path.join(context.root, '/node_modules/@artish/core-docs')
      : 'packages/vanilla'; */

  // read the config file from options.config (foo.ts)

  const configPath = path.join(workSpaceRoot, options.config);

  const config = require(configPath).default;

  const outDir = config.flavorRoot;

  //console.log('config', config);

  const clean = true;

  // get static dir from config file
  const staticDocs = 'packages/docs/static';

  console.log('Executing "compile-docs"...');
  console.log('staticDocs', staticDocs);
  console.log('docsPackageRoot', outDir);

  // copy the contents of the static folder (dont copy the folder itself) to the docsPackageRoot
  try {
    writeDocs(true, false, 'static', []);

    // get the paths from the config file
    config.packages.forEach((pkg) => {
      if (pkg.developerDocs) {
        const developerDocs = path.join(
          workSpaceRoot,
          pkg.path,
          pkg.developerDocs
        );
        const dirName = pkg.name.replace('/', '-');
        const docsPath = path.join(outDir, 'developer', dirName);
        console.log('docsPath', docsPath);
        console.log('developerDocs', developerDocs);
        const pluginDocConfig: pluginDocConfig = {
          name: pkg.name,
          dirName,
          docsPath: developerDocs,
        };
        writeDocs(false, false, 'developer', [pluginDocConfig]);
      }
    });

    // if remote is true for a plugin, look for the docs in the node_modules/${package.path}/${package.docsPath}
    const pluginPaths = config.plugins
      .filter((plugin) => (plugin.remote ? true : false))
      .map((plugin) => {
        //console.log('plugin', plugin);
        return {
          name: plugin.name,
          dirName: path.join(plugin.name.replace('/', '-')),
          docsPath: path.join(workSpaceRoot, plugin.path, plugin.docsPath),
        };
      });

    //console.log('developerDocs', flavorDeveloperDocs);
    // write static docs
    //writeDocs(flavorDeveloperDocs, docsPackageRoot, false, false, 'developer');

    // write the docs to the file system
    //writeDocs(false, false, 'developer', paths);
    writeDocs(false, true, 'developer', pluginPaths);

    // write the static folder to the file system
    //fs.mkdirSync(path.join(docsPackageRoot, 'static'));

    yield {
      success: true,
    };
  } catch (err) {
    console.error(err);
    yield {
      success: false,
    };
  }
}
