const { registerPlugin } = wp.plugins;
const { getBlockType, createBlock } = wp.blocks;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { Fragment, Component } = wp.element;
const { Button, IconButton, PanelBody, PanelRow } = wp.components;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;
const { __ } = wp.i18n;

import "./plugin.scss";
import classnames from "classnames";

const TableOfContents = ({
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
  // console.log(coverBlock);
  return (
    <Fragment>
      <PluginSidebarMoreMenuItem icon="edit" target="jsforwp-layout-switcher">
        {__("JS for WP TOC", "jsforwpadvblocks")}
      </PluginSidebarMoreMenuItem>
      <PluginSidebar
        icon="edit"
        name="jsforwp-layout-switcher"
        title="JS for WP Layout Switcher"
      >
        {/* <p>
          <Button
            className="components-button is-button is-default"
            onClick={() => removeBlocks(blockIds)}
          >
            Remove Blocks
          </Button>
        </p> */}

        <p>
          <Button
            className="components-button is-button"
            onClick={() => {
              removeBlocks(blockIds);
              insertBlocks(layouts.hero);
            }}
          >
            Hero Layout
          </Button>
        </p>

        <p>
          <Button
            className="components-button is-button"
            onClick={() => {
              removeBlocks(blockIds);
              insertBlocks(layouts.featured);
            }}
          >
            Featured Layout
          </Button>
        </p>
      </PluginSidebar>
    </Fragment>
  );
};

const TOC = compose(
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
)(TableOfContents);

const TocList = registerPlugin("jsforwp-layout-switcher", {
  icon: "edit",
  render: TOC
});
