export const name = 'hmr-demo/block-b';

export const options = {
	title: 'Sample Block B',

	description: 'Render another sample block.',

	icon: 'images-alt',

	category: 'widgets',

	edit() {
		return (
			<div>
				<h2>Block B preview</h2>
			</div>
		);
	},

	save() {
		return (
			<div>
				<h2>Block B!</h2>
			</div>
		);
	},
};
