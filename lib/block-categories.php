<?php

namespace Adv_Gutenberg_Courses\Example_Blocks;


add_filter( 'block_categories', function( $categories, $post ) {
	return array_merge(
		$categories,
		[
			[
                'slug' => 'jsforwpadvblocks',
                'icon' => 'wordpress-alt',
				'title' => __( 'JS for WP - Advanced Blocks', 'jsforwpadvblocks' ),
			],
			[
                'slug' => 'recommended',
                'icon' => 'star-filled',
				'title' => __( 'Recommended Blocks', 'jsforwpadvblocks' ),
			],
		]
	);
}, 10, 2 );