<?php

namespace Adv_Gutenberg_Courses\Example_Blocks;

add_action( 'init', __NAMESPACE__ . '\register_blocks', 40 );
/**
 * Enqueue block editor only JavaScript and CSS.
 */
function register_blocks() {	

    // Fail if block editor is not supported
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

    // List all of the blocks for your plugin
    $blocks = [
        "jsforwpadvblocks/gallery",
        "jsforwpadvblocks/data-example",
        "jsforwpadvblocks/gallery",
    ];

    // Register each block with same CSS and JS
    foreach( $blocks as $block ) {
        if( "jsforwpadvblocks/gallery" === $block ) {            
            register_block_type( $block, [
                'editor_script' => 'jsforwp-adv-gb-editor-js',
                'editor_style'  => 'jsforwp-adv-gb-editor-css',
                'style' => 'jsforwp-adv-gb-css',
                'attributes' => [                    
                    'images' => [
                        'type' => "array",
                        'default' => []
                    ],
                    'direction' => [
                        'type'=> "string",
                        'default' => "row"
                    ],
                    'isLightboxEnabled' => [
                        'type' => "boolean",
                        'default' => true
                    ]
                ]
             ] );	  
        }
        else {            
            register_block_type( $block, [
                'editor_script' => 'jsforwp-adv-gb-editor-js',
                'editor_style'  => 'jsforwp-adv-gb-editor-css',
                'style' => 'jsforwp-adv-gb-css'
             ] );	  
        }
    }

}



