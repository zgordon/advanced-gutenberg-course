<?php
/**
 * Main plugin file
 *
 * @package     Adv_Gutenberg_Courses\Example_Blocks
 * @author      Zac Gordon (@zgordon)
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: Gutenberg - Advanced Examples
 * Plugin URI:  https://javascriptforwp.com/
 * Description: A plugin containing advanced examples for developers.  From <a href="https://javascriptforwp.com/product/advanced-gutenberg-development/">Zac Gordon's Advanced Gutenberg Development Course</a>.
 * Version:     1.0.0
 * Author:      Zac Gordon
 * Author URI:  https://twitter.com/zgordon
 * Text Domain: jsforwpadvblocks
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

namespace Adv_Gutenberg_Courses\Example_Blocks;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}



// Enqueue JS and CSS
include __DIR__ . '/lib/register-scripts.php';

// Register block categories
include __DIR__ . '/lib/block-categories.php';

// Setup Global Block Setting Options Setting
include __DIR__ . '/lib/wp-options.php';

// Register REST API Endpoint
include __DIR__ . '/lib/rest-api-endpoint.php';

// Register blocks server side
include __DIR__ . '/lib/register-blocks.php';

// Register any PHP block filters
include __DIR__ . '/lib/block-filters.php';