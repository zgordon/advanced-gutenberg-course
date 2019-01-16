const { __ } = wp.i18n;
const { Component } = wp.element;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { Button } = wp.components;

const ListItemsWithCompose = ({ blocks, removeBlock }) => (
  <div>
    <h3>{__("With Compose", "jsforwpadvblocks")}</h3>
    <ul>
      {blocks.map(block => (
        <li>
          {block.name}{" "}
          <Button
            className="is-button is-default"
            onClick={() => removeBlock(block.clientId)}
          >
            {__("X", "jsforwpadvblocks")}
          </Button>
        </li>
      ))}
    </ul>
  </div>
);

export default compose([
  withSelect(select => {
    return {
      blocks: select("core/editor").getBlocks()
    };
  }),
  withDispatch(dispatch => {
    return {
      removeBlock: dispatch("core/editor").removeBlock
    };
  })
])(ListItemsWithCompose);
