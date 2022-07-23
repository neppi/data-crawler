import esbuild from 'esbuild';
esbuild.buildSync({
  nodePaths: ['node_modules'],
  platform: 'node',
  entryPoints: ['src-service/service.ts'],
  bundle: true,
  external: ['fsevents', 'net', 'rpio'],
  outfile: '.build/service.js',
});
