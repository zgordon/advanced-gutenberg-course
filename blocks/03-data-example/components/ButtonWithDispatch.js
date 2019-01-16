const { __ } = wp.i18n;
const { Button } = wp.components;
const { withDispatch } = wp.data;

const DeleteButton = ({ clientId, removeBlock }) => {
  return (
    <Button
      className="is-button is-default"
      onClick={() => removeBlock(clientId)}
    >
      {__("X", "jsforwpadvblocks")}
    </Button>
  );
};

export default withDispatch((dispatch, ownProps) => {
  const removeBlock = dispatch("core/editor").removeBlock;
  return {
    removeBlock: dispatch("core/editor").removeBlock
  };
})(DeleteButton);
