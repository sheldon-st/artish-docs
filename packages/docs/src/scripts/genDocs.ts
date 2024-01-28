import * as fs from 'fs';
import * as pt from 'path';
import { CompileDocsExecutorSchema } from '../executors/compile/schema';

export interface pluginDocConfig {
  name: string;
  dirName: string;
  docsPath: string;
}

// takes a collection of paths and writes them to the file system in the appropriate location
export const writeDocs = (
  clean: boolean,
  plugin: boolean,
  type: 'developer' | 'user' | 'static',
  paths?: pluginDocConfig[]
) => {
  let root = pt.join(type);

  // if clean is true, delete the developer and user folders if they exist
  if (clean) {
    try {
      fs.rmdirSync(pt.join('developer'), {
        recursive: true,
      });
      fs.rmdirSync(pt.join('user'), {
        recursive: true,
      });
    } catch (err) {
      console.error(err);
    }
  }

  if (type === 'static') {
    console.log('dirName', pt.join(__dirname, '../../static'));
    // copy contents of static folder in docs package to docsPackageRoot
    // if src is '/Users/stephensheldon/Documents/Code/artish/packages/docs/static
    // and docsPackageRoot is packages/vanilla
    // I want to copy the contents of that folder to docsPackageRoot
    // right now i am creating  packages/vanilla/packages/vanilla
    fs.cpSync(pt.join(__dirname, '../../static'), '.', {
      recursive: true,
    });
  }

  if (plugin) {
    //fs.mkdirSync(pt.join(root, 'plugins'));
    root = pt.join(root, 'plugins');
    /*   fs.writeFileSync(
      pt.join(root, '/index.md'),
      `Hello World! This is the plugin docs folder`
    ); */
  }

  // create the docs folder

  // add a test index.md file

  // copy the docs folders at each path to a new folder with dirName
  if (type !== 'static') {
    paths.forEach((path) => {
      fs.mkdirSync(pt.join(root, path.dirName));
      fs.cpSync(pt.join(path.docsPath), pt.join(root, path.dirName), {
        recursive: true,
      });
    });
  }
};
