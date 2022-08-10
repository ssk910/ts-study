/**
 * @see https://webpack.js.org/configuration/#use-different-configuration-file
 */

/* modules */
const path = require('path');
const root = require('app-root-path');

/* stats option */
const WEBPACK_STATS = {
  logging: true,
  // loggingTrace: true,
  // assets: true,
  // chunkModules: true,
  // builtAt: true,
  // modules: true,
  env: true,
  version: true,
  errors: true,
  // moduleTrace: true,
  colors: true,
  // timings: true,
  outputPath: true
};

/* module option */
const WEBPACK_MODULE = {
  rules: [
    {
      test: /\.ts$/,
      exclude: ['/node_modules'],
      use: {
        loader: 'ts-loader',
        options: {
          context: path.resolve(root.path),
          configFile: 'tsconfig.json',
        }
      }
    }
  ]
};

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    "simulator.sdk": `${root.path}/src/Main.ts`,
  },
  target: ['web', 'es5'],
  output: {
    path: `${root.path}/build`,
    filename: '[name]' + '.js'
    // filename: process.env.NODE_ENV === 'production'
    //     ? '[name]' + '.js'
    //     : '[name]' + '.js'
  },
  // watch: process.env.NODE_ENV === 'development',
  watch: false,
  stats: WEBPACK_STATS,
  profile: true,
  devtool: process.env.NODE_ENV === 'production'
         ? false
         : 'source-map',
  // recordsPath: path.resolve(rootDir, 'records.json'),
  // recordsPath: pathHelper.createPath(path.resolve('./'), 'analyzer', 'records', mode) + `/records_${dateFormat(new Date(), 'yyyymmdd-HHMMss')}.json`,
  module: WEBPACK_MODULE,
  resolve: {
    extensions: [".ts", ".js"]
  }
};
