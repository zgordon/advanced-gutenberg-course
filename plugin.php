<?php
/**
 * WordPress Block Editor Hot Module Replacement Demo
 *
 * @author    K. Adam White
 * @license   GPL-2.0+
 * @copyright 2018 K.Adam White
 *
 * @wordpress-plugin
 * Plugin Name: WordPress Block Editor Hot Module Replacement Demo
 * Description: A plugin demonstrating block and plugin auto-loading with hot module replacement.
 * Version:     0.1.0
 * Author:      K. Adam White
 * Author URI:  https://www.kadamwhite.com
 * License:     GPL-2.0+ or Artistic License 2.0
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// Enqueue editor UI scripts & styles.
require_once( __DIR__ . '/inc/asset-loader.php' );
require_once( __DIR__ . '/inc/scripts.php' );
HMR_Demo\Scripts\setup();
