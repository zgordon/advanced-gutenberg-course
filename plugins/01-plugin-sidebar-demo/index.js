/**
 * Get Dependencies
 */

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { PanelBody, PanelRow } = wp.components;

const PluginSidebarDemo = props => {
  return (
    <Fragment>
      <PluginSidebarMoreMenuItem target="jsforwpadvgb-demo">
        {__("Plugin Sidebar Demo", "jsforwpadvblocks")}
      </PluginSidebarMoreMenuItem>
      <PluginSidebar
        name="jsforwpadvgb-demo"
        title={__("Plugin Sidebar Demo", "jsforwpadvblocks")}
      >
        <PanelBody>
          <PanelRow>
            {__("Plugin Sidebar Content", "jsforwpadvblocks")}
          </PanelRow>
        </PanelBody>
      </PluginSidebar>
    </Fragment>
  );
};

registerPlugin("jsforwpadvgb-demo", {
  icon: "admin-plugins",
  render: PluginSidebarDemo
});
