import type { ExecutorContext } from '@nx/devkit';
import { exec } from 'child_process';
import { promisify } from 'util';
import { start } from '@docusaurus/core/lib';
import { DevServerExecutorSchema } from './schema';
import * as path from 'path';

export default async function* runExecutor(
  options: DevServerExecutorSchema,
  context: ExecutorContext
) {
  // const pathToModule = require.resolve('@artish/docs');
  // console.log('pathToModule is', pathToModule); // a number,

  const workSpaceRoot = context.root;

  const flavorRoot = path.join(__dirname, '../../../');
  // assign path to node_modules/@artish/docs once this is installed as a dependency

  // get env variable to figure out if running in dev mono repo or installed as dependency
  const isDevMonoRepo = process.env.DEV_MONO_REPO;

  console.log('isDevMonoRepo', isDevMonoRepo);

  // I can set this
  // const docsPackageRoot = path.join(context.root, '/node_modules/@artish/docs');
  //const docsPackageRoot = 'packages/docs';

  const docsPackageRoot = `packages/vanilla`;
  /*  isDevMonoRepo === 'FALSE'
      ? path.join(context.root, '/node_modules/@artish/core-docs')
      : 'packages/vanilla'; */

  console.log('Executing "dev-server"...');
  console.log(`Options: ${JSON.stringify(options, null, 2)}`);
  console.log(`Project root: ${workSpaceRoot}`);
  console.log(`Project firname: ${flavorRoot}`);
  console.log(`Docs package root: ${docsPackageRoot}`);

  const port = options.port.toString();

  await start(docsPackageRoot, {
    port,
    open: true,
  });

  yield {
    baseUrl: `http://localhost:${port}`,
    success: true,
  };

  // This Promise intentionally never resolves, leaving the process running
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  await new Promise<{ success: boolean }>(() => {});
}
