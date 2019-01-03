<?php
/**
 * Example blocks for Advanced Gutenberg Development Course
 *
 * @author    Zac Gordon
 * @license   GPL-2.0+
 * @copyright 2018 Zac Gordon
 *
 * @wordpress-plugin
 * Plugin Name: Advanced Block Examples
 * Description: For the Advanced Gutenberg Course
 * Version:     0.1.0
 * Author:      Zac Gordon
 * Author URI:  https://javascriptforwp.com/
 * License:     GPL-2.0+ or Artistic License 2.0
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// Enqueue editor UI scripts & styles.
require_once( __DIR__ . '/inc/asset-loader.php' );
require_once( __DIR__ . '/inc/scripts.php' );
HMR_Demo\Scripts\setup();
