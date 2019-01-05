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
 * Description: A plugin containing advanced examples for developers.  From <a href="https://gutenberg.courses/development">Zac Gordon's Advanced Gutenberg Development Course</a>.
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


// Internationalization
// include __DIR__ . '/lib/i18n.php';

// Options Table Setup
include __DIR__ . '/lib/wp-options.php';

// Custom REST API Endpoints
include __DIR__ . '/lib/rest-api-endpoints.php';

// Enqueue JS and CSS
include __DIR__ . '/lib/register-scripts.php';

// Register block server side
include __DIR__ . '/lib/register-blocks.php';

// Register block server side
include __DIR__ . '/lib/block-categories.php';

// Dynamic Blocks
// include __DIR__ . '/blocks/12-dynamic/index.php';

// Register meta boxes
// include __DIR__ . '/lib/meta-boxes.php';

// Block Templates
// include __DIR__ . '/lib/block-templates.php';