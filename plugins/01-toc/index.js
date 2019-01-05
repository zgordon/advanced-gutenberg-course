const { registerPlugin } = wp.plugins;
const { getBlockType } = wp.blocks;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { Fragment, Component } = wp.element;
const { Button, IconButton, PanelBody, PanelRow } = wp.components;
const { withSelect, withDispatch } = wp.data;
const { __ } = wp.i18n;

import "./plugin.scss";
import classnames from "classnames";

const TableOfContents = ({ getBlock, hasBlocks, isBlockSelected, blocks }) => (
  <Fragment>
    <PluginSidebarMoreMenuItem
      icon="wordpress-alt"
      target="jsforwp-toc-sidebar"
    >
      {__("JS for WP TOC", "jsforwpadvblocks")}
    </PluginSidebarMoreMenuItem>
    <PluginSidebar
      icon="wordpress-alt"
      name="jsforwp-toc-sidebar"
      title="JS for WP TOC"
    >
      <TocBlocks blocks={blocks} isBlockSelected={isBlockSelected} />
      {/* <PhotoList api={{ search, all }} /> */}
    </PluginSidebar>
  </Fragment>
);

const Node = props => {
  //   console.log(selectBlock);

  // http://lyndseyb.co.uk/posts/creating-a-nested-listview-using-react

  let childnodes = null;

  // the Node component calls itself if there are children
  if (props.children) {
    childnodes = props.children.map(function(childnode) {
      return (
        <NodeWithDispatch
          node={childnode}
          isBlockSelected={props.isBlockSelected}
          children={childnode.innerBlocks}
        />
      );
    });
  }

  let blockType = getBlockType(props.node.name);
  //   let isSelected = props.isBlockSelected(props.node.clientId);

  // return our list element
  // display children if there are any
  return (
    <li key={props.node.clientId}>
      <div className="editor-block-navigation__item">
        <Button
          className={classnames("editor-block-navigation__item-button", {
            "is-selected": props.isBlockSelected(props.node.clientId)
          })}
          // icon={getBlockType(props.node.name).icon.src}
          onClick={() => props.selectBlock(props.node.clientId)}
        >
          <span class="editor-block-icon has-colors">{blockType.icon.src}</span>
          {blockType.title}
        </Button>
        {childnodes ? <ul>{childnodes}</ul> : null}
      </div>
    </li>
  );
};

const TocBlocks = ({ blocks, isBlockSelected }) => {
  let nodes = blocks.map(function(block) {
    return (
      <NodeWithDispatch
        node={block}
        isBlockSelected={isBlockSelected}
        children={block.innerBlocks}
      />
    );
  });

  return (
    <div>
      <ul className="jsforwp-toc">{nodes}</ul>
    </div>
  );
};

const NodeWithDispatch = withDispatch(dispatch => {
  const { selectBlock } = dispatch("core/editor");
  return {
    selectBlock
  };
})(Node);

const TOC = withSelect(select => {
  const { isBlockSelected } = select("core/editor");
  return {
    getBlock: select("core/editor").getBlock(),
    hasBlocks: !!select("core/editor").getBlockCount(),
    blocks: select("core/editor").getBlocks(),
    isBlockSelected
  };
})(TableOfContents);

const TocList = registerPlugin("jsforwptoc", {
  icon: "wordpress-alt",
  render: TOC
});
