const { __ } = wp.i18n;
const { Button } = wp.components;
const { dispatch } = wp.data;
const { withSelect } = wp.data;

const DispatchDemo = ({ blocks }) => (
  <div>
    <pre>
      <code>{"dispatch()"}</code>
    </pre>
    <ul>
      {blocks.map(block => (
        <li>
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
