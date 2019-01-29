const { __ } = wp.i18n;
const { Button } = wp.components;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;

const WithComposeDemo = ({ blocks, removeBlock }) => (
  <div>
    <pre>
      <code>{"compose([])(WithComposeDemo)"}</code>
    </pre>
    <ul>
      {blocks.map(block => (
        <li key={block.clientId}>
          {block.name}
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
])(WithComposeDemo);
