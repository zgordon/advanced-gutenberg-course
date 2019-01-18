<?php

namespace Adv_Gutenberg_Courses\Theming;

add_action( 'register_post_type_args', __NAMESPACE__ . '\block_templates', 20, 2 );
/**
 * Enqueue theme CSS and JavaScript .
 */
function block_templates( $args, $post_type ) {

	if ( 'post' === $post_type) {
		// $args[ 'template_lock' ] = true;
		$args[ 'template' ] = [
			[
				'jsforwpadvblocks/data-example'
			],
			[
				'core/heading', [
					'placeholder' => __( 'Subheadline', 'jsforwpadvblocks' )
				]
			],
			[
				'core/image', [
					'align' => 'right',
				]
			],			
			[
				'core/paragraph', [
					'align' => 'left',
					'placeholder' => __( 'Incididunt aliquip culpa dolore amet sunt voluptate excepteur aliqua deserunt in cillum ullamco est sit. Incididunt aliquip culpa dolore amet sunt voluptate excepteur aliqua deserunt in cillum ullamco est sit.', 'jsforwpadvblocks' )
				]
			],
			[
				'core/separator'
			],			
			[
				'core/cover', [
					'align' => 'full',
				]
			],
			[
				'core/heading', [
					'placeholder' => __( 'Another Subheadline', 'jsforwpadvblocks' )
				]
			],			
			[
				'core/paragraph', [					
					'placeholder' => __( 'Irure minim velit dolore sint tempor officia. Cupidatat enim dolore sunt enim pariatur et minim eiusmod Lorem id exercitation reprehenderit. In deserunt voluptate commodo officia adipisicing adipisicing voluptate culpa magna fugiat ullamco. Proident excepteur excepteur pariatur irure voluptate quis in est aute nulla cillum quis consectetur. Reprehenderit eiusmod commodo excepteur ipsum laboris voluptate.', 'jsforwpadvblocks' )
				]
			],
		];
	}

	return $args;	
	
}
