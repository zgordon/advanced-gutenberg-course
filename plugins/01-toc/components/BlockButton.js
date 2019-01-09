const { getBlockType } = wp.blocks;
const { Button } = wp.components;
const { dispatch, withSelect } = wp.data;

import classnames from "classnames";

const BlockButton = ({ block, isBlockSelected }) => {
  const blockType = getBlockType(block.name);
  console.log(isBlockSelected(block.clientId));
  return (
    <Button
      className={classnames("editor-block-navigation__item-button", {
        "is-selected": isBlockSelected(block.clientId)
      })}
      onClick={() => dispatch("core/editor").selectBlock(block.clientId)}
    >
      <span class="editor-block-icon has-colors">{blockType.icon.src}</span>
      {blockType.title}
    </Button>
  );
};

// export default BlockButton;
export default withSelect(select => {
  const { isBlockSelected } = select("core/editor");
  return { isBlockSelected };
})(BlockButton);
