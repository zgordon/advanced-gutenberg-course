<?php

namespace Adv_Gutenberg_Courses\Example_Blocks;

$option_name = 'jsforwpadvgb_maps_api_key';
$api_key = "";

if( get_option($option_name) === false ) {
    update_option( $option_name, "" );
}