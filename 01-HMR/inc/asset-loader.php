<?php
/**
 * Manage loading Webpack Dev Server assets.
 */
namespace HMR_Demo\Asset_Loader;

/**
 * Is this a development environment?
 *
 * @return bool
 */
function is_development() {
	return defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG;
}

/**
 * Attempt to load a file at the specified path and parse its contents as JSON.
 *
 * @param string $path The path to the JSON file to load.
 * @return array|null;
 */
function load_asset_file( $path ) {
	if ( ! file_exists( $path ) ) {
		return null;
	}
	$contents = file_get_contents( $path );
	if ( empty( $contents ) ) {
		return null;
	}
	return json_decode( $contents, true );
}

/**
 * Check a directory for a root or build asset manifest file, and attempt to
 * decode and return the asset list JSON if found.
 *
 * @param string $directory Root directory containing `src` and `build` directory.
 * @return array|null;
 */
function get_assets_list( string $manifest_path ) {
	$dev_assets = load_asset_file( $manifest_path );
	if ( ! empty( $dev_assets ) ) {
		return array_values( $dev_assets );
	}

	return null;
}

/**
 * @param string $directory Root directory containing `src` and `build` directory.
 * @param array $opts {
 *     @type array    $scripts  Script dependencies.
 *     @type function $filter   Filter function to limit which scripts are enqueued.
 *     @type string   $handle   Style/script handle. (Default is last part of directory name.)
 *     @type array    $styles   Style dependencies.
 * }
 */
function enqueue_assets( $manifest_path, $opts = [] ) {
	$defaults = [
		'handle'  => basename( plugin_dir_path( $manifest_path ) ),
		'filter'  => '__return_true',
		'scripts' => [],
		'styles'  => [],
	];

	$opts = wp_parse_args( $opts, $defaults );

	$assets = get_assets_list( $manifest_path );

	if ( empty( $assets ) ) {
		// Trust the theme or pluign to handle its own asset loading.
		return false;
	}

	// Keep track of whether a CSS file has been encountered.
	$has_css = false;

	// There should only be one JS and one CSS file emitted per plugin or theme.
	foreach ( $assets as $asset_uri ) {
		if ( $opts['filter'] && ! $opts['filter']( $asset_uri ) ) {
			// Ignore file paths which do not pass the provided filter test.
			continue;
		}

		$is_js    = preg_match( '/\.js$/', $asset_uri );
		$is_css   = preg_match( '/\.css$/', $asset_uri );
		$is_chunk = preg_match( '/\.chunk\./', $asset_uri );

		if ( ( ! $is_js && ! $is_css ) || $is_chunk ) {
			// Assets such as source maps and images are also listed; ignore these.
			continue;
		}

		if ( $is_js ) {
			wp_enqueue_script(
				$opts['handle'],
				$asset_uri,
				$opts['scripts'],
				filemtime( $manifest_path ),
				true
			);
		} elseif ( $is_css ) {
			$has_css = true;
			wp_enqueue_style(
				$opts['handle'],
				$asset_uri,
				$opts['styles'],
				filemtime( $manifest_path )
			);
		}
	}

	// Ensure CSS dependencies are always loaded, even when using CSS-in-JS in
	// development.
	if ( ! $has_css && ! empty( $opts['styles'] ) ) {
		wp_register_style(
			$opts['handle'],
			null,
			$opts['styles']
		);
		wp_enqueue_style( $opts['handle'] );
	}

	// Signal that auto-loading occurred.
	return true;
}
