<?php

namespace Adv_Gutenberg_Courses\Block_Filters;

function block_filters( $block_content, $block ){

  $filter = array(
      'core/paragraph',
      'core/heading',
  );

  if( ! in_array ( $block['blockName'] , $filter ) ) {
      return $block_content;
  }

  if( is_page_template() || is_singular( array('destination', 'hosted_trips', 'videos') ) ){
      return $block_content;
  }

  $output = '<div class="content container">';
  $output .= $block_content;
  $output .= '</div>';

  return $output;
  
}

add_filter( 'render_block',__NAMESPACE__ . '\block_filters', 10, 3 );