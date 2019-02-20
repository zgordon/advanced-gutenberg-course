<?php

namespace Adv_Gutenberg_Courses\Example_Blocks;

$option_name = 'jsforwpadvgb_block_setting';
$api_key = "";

if( get_option($option_name) === false ) {
    update_option( $option_name, "" );
}

$custom_option_name = 'jsforwpadvgb_prices';
$prices = "113331";

if( get_option($custom_option_name) === false ) {
    update_option( $custom_option_name, "" );
}

// update_option( $custom_option_name, $prices );