/**
 * Get dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { PanelRow } = wp.components;

import classnames from "classnames";
import icon from "./icon";
import "./plugin.scss";
import BlockList from "./components/BlockList";

const TableOfContents = props => {
  return (
    <Fragment>
      <PluginSidebarMoreMenuItem target="toc">
        {__("Table of Contents", "jsforwpadvblocks")}
      </PluginSidebarMoreMenuItem>
      <PluginSidebar
        name="toc"
        title={__("Table of Contents", "jsforwpadvblocks")}
      >
        <PanelRow>
          <BlockList />
        </PanelRow>
      </PluginSidebar>
    </Fragment>
  );
};

registerPlugin("jsforwpadvgb", {
  icon,
  render: TableOfContents
});
