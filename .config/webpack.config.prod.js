/**
 * This file defines the configuration that is used for the production build.
 */
const { join } = require( 'path' );

const externals = require( './externals' );

/**
 * Theme production build configuration.
 */
module.exports = {
	mode: 'production',
	devtool: 'hidden-source-map',
	context: process.cwd(),

	// Clean up build output
	stats: {
		all: false,
		assets: true,
		colors: true,
		errors: true,
		performance: true,
		timings: true,
		warnings: true,
	},

	// Permit importing @wordpress/* packages.
	externals,

	// Optimize output bundle.
	optimization: {
		minimize: true,
		noEmitOnErrors: true,
	},

	// Specify where the code comes from.
	entry: {
		editor: join( process.cwd(), 'src', 'index.js' ),
	},
	output: {
		pathinfo: false,
		path: join( process.cwd(), 'build' ),
		filename: '[name].js',
	},

	module: {
		strictExportPresence: true,
		rules: [
			{
				// Process JS with Babel.
				test: /\.js$/,
				include: [ join( process.cwd(), 'src' ) ],
				loader: require.resolve( 'babel-loader' ),
			},
		],
	},
};
