<?php

namespace Adv_Gutenberg_Courses\Block_Filters;

function block_filters( $block_content, $block ){

  $filter = [
      // 'core/quote'      
  ];

  if( ! in_array ( $block['blockName'] , $filter ) ) {
      return $block_content;
  }

// var_export( $block );


$output = '<div class="MYCONTAINER">';
$output .= $block_content;
$output .= '</div>';
return $output;
  
}

add_filter( 'render_block',__NAMESPACE__ . '\block_filters', 10, 3 );