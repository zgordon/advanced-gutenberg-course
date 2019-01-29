/**
 * Get dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { PanelBody, PanelRow } = wp.components;
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;

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
        <PanelBody title={__("Sidebar Header", "jsforwpadvblocks")} opened>
          <PanelRow>
            <p>{__("Plugin Sidebar Demo", "jsforwpadvblocks")}</p>
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
