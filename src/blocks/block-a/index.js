export const name = "hmr-demo/block-a";

export const options = {
	title: "Sample Block A",

	description: "Render a sample block.",

	icon: "image-filter",

	category: "widgets",

	edit() {
		return (
			<div>
				<h2>Block A preview [EDIT]</h2>
			</div>
		);
	},

	save() {
		return (
			<div>
				<h2>Block A!</h2>
			</div>
		);
	}
};
