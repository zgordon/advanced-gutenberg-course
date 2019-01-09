<?php

namespace Adv_Gutenberg_Courses\Example_Blocks;

define( 'JSFORWP_REST_NAMESPACE', 'jsforwpadvgb/v1' );
define( 'JSFORWP_MAPS_OPTION', 'jsforwpadvgb_maps_api_key');


add_action( 'rest_api_init', __NAMESPACE__ . '\custom_endpoints' );
/**
 * Enqueue block editor only JavaScript and CSS.
 */
function custom_endpoints() {
    register_rest_route( 
        JSFORWP_REST_NAMESPACE, 
        'maps-api/',
        [
            'methods'  => \WP_REST_Server::READABLE,
            'callback' => __NAMESPACE__ . '\get_maps_api_key'
        ]
    );

    register_rest_route( 
        JSFORWP_REST_NAMESPACE, 
        'maps-api/',
        [
            'methods'  => \WP_REST_Server::EDITABLE,            
            'callback' => __NAMESPACE__ . '\update_maps_api_key',
            'permission_callback' => __NAMESPACE__ . '\check_permissions'
        ]
    );
}

function get_maps_api_key() {

    $api_key = get_option( JSFORWP_MAPS_OPTION );    
    
    // if ($api_key == "") {
    //     return new \WP_Error( 'missing_api_key', 'There is no API key set yet', array('status' => 404) );
    // }

    $response = new \WP_REST_Response( $api_key );
    $response->set_status(200);

    return $response;
}

function update_maps_api_key( $request ) {
    
    $new_api_key = $request->get_body();
    update_option( JSFORWP_MAPS_OPTION, $new_api_key );    

    $api_key = get_option( JSFORWP_MAPS_OPTION );
    $response = new \WP_REST_Response( $api_key );
    $response->set_status(201);

    return $response;
}

function check_permissions() {
    return current_user_can("edit_posts");
}