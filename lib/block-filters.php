<?php

namespace Adv_Gutenberg_Courses\Block_Filters;

add_filter( 'render_block', __NAMESPACE__ . '\block_filters', 10, 3);

function block_filters( $block_content, $block ) {
    
    if( "core/quote" !== $block['blockName'] ) {
        return $block_content;
    }

    $output = '<div class="MYCONTAINER">';
    $output .= $block_content;
    $output .= '</div>';

    return $output;
}