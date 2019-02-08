const { registerPlugin } = wp.plugins;
const { getBlockType, createBlock } = wp.blocks;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { Fragment, Component } = wp.element;
const { Button, IconButton, Icon, PanelBody, PanelRow } = wp.components;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;
const { __ } = wp.i18n;

import icons from "./icons";
import "./plugin.scss";
import classnames from "classnames";

const LayoutSwitcher = ({
  getBlocks,
  insertBlocks,
  insertBlock,
  removeBlocks,
  blocks
}) => {
  const blockIds = blocks.map(block => block.clientId);
  const layouts = {
    hero: [
      createBlock("core/cover", { align: "full" }),
      createBlock("core/button", { text: "Call to Action", align: "center" }),
      createBlock("core/columns", { columns: 3 })
    ],
    featured: [
      createBlock("core/heading", {}),
      createBlock("core/spacer", { height: "10" }),
      createBlock("core/media-text", { align: "full" }),
      createBlock("core/spacer", { height: "40" }),
      createBlock("core/quote", {}),
      createBlock("core/spacer", { height: "20" }),
      createBlock("core/media-text", { mediaPosition: "right" }),
      createBlock("core/paragraph", { placeholder: "Outro text" })
    ]
  };
  return (
    <Fragment>
      <PluginSidebarMoreMenuItem target="jsforwpadvgb-layout-switcher">
        {__("JS for WP TOC", "jsforwpadvblocks")}
      </PluginSidebarMoreMenuItem>
      <PluginSidebar
        name="jsforwp-layout-switcher"
        title="JS for WP Layout Switcher"
      >
        <PanelBody title={__("Layouts", "jsforwpadvblocks")} opened>
          <PanelRow className="layout-switcher">
            <Button
              className="is-button switcher-button"
              onClick={() => {
                removeBlocks(blockIds);
                insertBlocks(layouts.hero);
              }}
            >
              <Icon icon={icons.hero} />
              Hero Layout
            </Button>
            <Button
              className="components-button is-button switcher-button"
              onClick={() => {
                removeBlocks(blockIds);
                insertBlocks(layouts.featured);
              }}
            >
              {icons.featured}
              Featured Layout
            </Button>
          </PanelRow>
        </PanelBody>
      </PluginSidebar>
    </Fragment>
  );
};

const LayoutSwitcherWithCompose = compose(
  withDispatch((dispatch, ownProps) => {
    const { removeBlocks, insertBlocks, insertBlock } = dispatch("core/editor");
    return {
      removeBlocks,
      insertBlocks,
      insertBlock
    };
  }),
  withSelect(select => {
    return {
      blocks: select("core/editor").getBlocks(),
      getBlocks: select("core/editor").getBlocks
    };
  })
)(LayoutSwitcher);

registerPlugin("jsforwpadvgb-layout-switcher", {
  icon: icons.switcher,
  render: LayoutSwitcherWithCompose
});
