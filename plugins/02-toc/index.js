/**
 * Get dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { PanelBody, PanelRow } = wp.components;

import classnames from "classnames";
import icon from "./icon";
import "./plugin.scss";
import BlockList from "./components/BlockList";

const TableOfContents = props => {
  return (
    <Fragment>
      <PluginSidebarMoreMenuItem target="jsforwpadvgb-toc">
        {__("Table of Contents", "jsforwpadvblocks")}
      </PluginSidebarMoreMenuItem>
      <PluginSidebar
        name="jsforwpadvgb-toc"
        title={__("Table of Contents", "jsforwpadvblocks")}
      >
        <PanelBody>
          <PanelRow>
            <BlockList />
          </PanelRow>
        </PanelBody>
      </PluginSidebar>
    </Fragment>
  );
};

registerPlugin("jsforwpadvgb-toc", {
  icon,
  render: TableOfContents
});
