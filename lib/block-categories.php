<?php

namespace Adv_Gutenberg_Courses\Example_Blocks;


add_filter( 'block_categories', function( $categories, $post ) {
	return array_merge(
		$categories,
		[
			[
                'slug' => 'jsforwpadvblocks',
                'icon' => 'wordpress-alt',
				'title' => __( 'Advanced Blocks - JS for WP', 'jsforwpadvblocks' ),
			],
		]
	);
}, 10, 2 );