<?php

namespace Adv_Gutenberg_Courses\Example_Blocks;

define( 'JSFORWP_REST_NAMESPACE', 'jsforwpadvgb/v1' );
define( 'JSFORWP_BLOCK_SETTING', 'jsforwpadvgb_block_setting');
define( 'JSFORWP_PRICES', 'jsforwpadvgb_prices');


add_action( 'rest_api_init', __NAMESPACE__ . '\custom_endpoints' );
/**
 * Create custom endpoint for block setting
 */
function custom_endpoints() {
    register_rest_route( 
        JSFORWP_REST_NAMESPACE, 
        'block-setting/',
        [
            'methods'  => \WP_REST_Server::READABLE,
            'callback' => __NAMESPACE__ . '\get_block_setting'
        ]
    );

    register_rest_route( 
        JSFORWP_REST_NAMESPACE, 
        'block-setting/',
        [
            'methods'  => \WP_REST_Server::EDITABLE,            
            'callback' => __NAMESPACE__ . '\update_block_setting',
            'permission_callback' => __NAMESPACE__ . '\check_permissions'
        ]
    );

    register_rest_route( 
        JSFORWP_REST_NAMESPACE, 
        'prices/',
        [
            'methods'  => \WP_REST_Server::READABLE,
            'callback' => __NAMESPACE__ . '\get_prices'
        ]
    );

    register_rest_route( 
        JSFORWP_REST_NAMESPACE, 
        'prices/',
        [
            'methods'  => \WP_REST_Server::EDITABLE,            
            'callback' => __NAMESPACE__ . '\update_prices',
            'permission_callback' => __NAMESPACE__ . '\check_permissions'
        ]
    );
}

function get_block_setting() {

    $block_setting = get_option( JSFORWP_BLOCK_SETTING );    
    
    // if ($block_setting == "") {
    //     return new \WP_Error( 'missing_api_key', 'There is no API key set yet', array('status' => 404) );
    // }

    $response = new \WP_REST_Response( $block_setting );
    $response->set_status(200);

    return $response;
}

function update_block_setting( $request ) {
    
    $new_block_setting = $request->get_body();
    update_option( JSFORWP_BLOCK_SETTING, $new_block_setting );    

    $block_setting = get_option( JSFORWP_BLOCK_SETTING );
    $response = new \WP_REST_Response( $block_setting );
    $response->set_status(201);

    return $response;
}

function get_prices() {

    $prices = get_option( JSFORWP_PRICES );    
    
    // if ($prices == "") {
    //     return new \WP_Error( 'missing_api_key', 'There is no API key set yet', array('status' => 404) );
    // }

    $response = new \WP_REST_Response( $prices );
    $response->set_status(200);

    return $response;
}

function update_prices( $request ) {
    
    $new_prices = $request->get_body();
    update_option( JSFORWP_PRICES, $new_prices );    

    $prices = get_option( JSFORWP_PRICES );
    $response = new \WP_REST_Response( $prices );
    $response->set_status(201);

    return $response;
}

function check_permissions() {
    return current_user_can("edit_posts");
}