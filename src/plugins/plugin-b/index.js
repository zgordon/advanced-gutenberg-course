import { Fragment } from '@wordpress/element';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';

export const name = 'hmr-demo-plugin-b';

export const options = {
	icon: 'star-filled',

	render() {
		return (
			<Fragment>
				<PluginSidebarMoreMenuItem>
					Plugin B
				</PluginSidebarMoreMenuItem>
				<PluginSidebar>
					<h2>Plugin B!</h2>
					<p>Plugin B sidebar content.</p>
				</PluginSidebar>
			</Fragment>
		);
	},
};
