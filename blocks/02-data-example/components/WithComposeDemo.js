const { __ } = wp.i18n;
<<<<<<< HEAD
const { Button } = wp.components;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;
=======
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { Button } = wp.components;
>>>>>>> f5cb6b4e299d6f9893722582ad2f6423b4028ae5

const WithComposeDemo = ({ blocks, removeBlock }) => (
  <div>
    <pre>
<<<<<<< HEAD
      <code>{"compose([])(WithComposeDemo)"}</code>
    </pre>
    <ul>
      {blocks.map(block => (
        <li key={block.clientId}>
          {block.name}
=======
      <code>{"compose([withSelect(),withDispatch()])(WithComposeDemo)"}</code>
    </pre>
    <ul>
      {blocks.map(block => (
        <li>
          {block.name}{" "}
>>>>>>> f5cb6b4e299d6f9893722582ad2f6423b4028ae5
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
