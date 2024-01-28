import { build } from '@docusaurus/core/lib';
import { BuildExecutorSchema } from './schema';
import { ExecutorContext } from '@nx/devkit';
import * as path from 'path';

export default async function* runExecutor(
  options: BuildExecutorSchema,
  context: ExecutorContext
) {
  const isDevMonoRepo = process.env.DEV_MONO_REPO;

  const docsPackageRoot =
    isDevMonoRepo === 'FALSE'
      ? path.join(context.root, '/node_modules/@artish/core-docs')
      : 'dist/packages/core-docs';

  const flavorRoot = path.join(__dirname, '../../../');
  const outDir = path.join(context.root, '/dist/.docusaurus');

  console.log('Executing "dev-server"...');
  console.log(`Options: ${JSON.stringify(options, null, 2)}`);
  console.log(`Project root: ${docsPackageRoot}`);
  console.log(`Project firname: ${flavorRoot}`);

  try {
    await build(docsPackageRoot, {
      bundleAnalyzer: false,
      minify: false,
      dev: true,
    });

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
