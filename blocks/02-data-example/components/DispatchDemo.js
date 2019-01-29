const { __ } = wp.i18n;
const { Button } = wp.components;
<<<<<<< HEAD
const { withSelect, dispatch } = wp.data;
=======
const { dispatch } = wp.data;
const { withSelect } = wp.data;
>>>>>>> f5cb6b4e299d6f9893722582ad2f6423b4028ae5

const DispatchDemo = ({ blocks }) => (
  <div>
    <pre>
      <code>{"dispatch()"}</code>
    </pre>
    <ul>
      {blocks.map(block => (
<<<<<<< HEAD
        <li key={block.clientId}>
=======
        <li>
>>>>>>> f5cb6b4e299d6f9893722582ad2f6423b4028ae5
          {block.name}{" "}
          <Button
            className="is-button is-default"
            onClick={() => {
              dispatch("core/editor").removeBlock(block.clientId);
            }}
          >
            {__("X", "jsforwpadvblocks")}
          </Button>
        </li>
      ))}
    </ul>
  </div>
);

export default withSelect(select => {
  return {
    blocks: select("core/editor").getBlocks()
  };
})(DispatchDemo);
