import { PluginPostStatusInfo } from '@wordpress/edit-post';

export const name = 'hmr-demo-plugin-a';

export const options = {
	icon: 'star-empty',

	render() {
		return (
			<PluginPostStatusInfo>
				<p>Plugin A is loaded!</p>
			</PluginPostStatusInfo>
		);
	},
};
