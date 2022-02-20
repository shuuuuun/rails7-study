const path = require('path')
const { build } = require('esbuild')

const NODE_ENV = process.env.NODE_ENV ?? 'development'
const isDev = NODE_ENV === 'development'
const isWatch = process.argv.includes('--watch')

// ref. https://esbuild.github.io/plugins/#using-plugins
const envPlugin = {
  name: 'env',
  setup(build) {
    // Intercept import paths called "env" so esbuild doesn't attempt
    // to map them to a file system location. Tag them with the "env-ns"
    // namespace to reserve them for this plugin.
    build.onResolve({ filter: /^env$/ }, args => ({
      path: args.path,
      namespace: 'env-ns',
    }))

    // Load paths tagged with the "env-ns" namespace and behave as if
    // they point to a JSON file containing the environment variables.
    build.onLoad({ filter: /.*/, namespace: 'env-ns' }, () => ({
      contents: JSON.stringify(process.env),
      loader: 'json',
    }))
  },
}

build({
  // entryPoints: [path.resolve(__dirname, 'app/javascript/*.*')],
  // entryPoints: [path.resolve(__dirname, 'app/javascript/application.js')],
  entryPoints: ['app/javascript/application.js'],
  outdir: 'app/assets/builds',
  bundle: true,
  sourcemap: isDev,
  minify: !isDev,
  watch: isWatch && {
    onRebuild(error, result) {
      if (error) console.error('watch build failed:', error)
      else console.log('watch build succeeded:', result)
    },
  },
  plugins: [envPlugin],
}).then(_result => {
  console.log('build completed!')
  if (isWatch) console.log('watching...')
}).catch(() => process.exit(1))
