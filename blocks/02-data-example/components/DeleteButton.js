const { __ } = wp.i18n;
const { Button } = wp.components;
const { withDispatch } = wp.data;

<<<<<<< HEAD
const DeleteButton = ({ clientId, removeBlock }) => (
  <Button
    className="is-button is-default"
    onClick={() => {
      removeBlock(clientId);
    }}
  >
    {__("X", "jsforwpadvblocks")}
  </Button>
);
=======
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
>>>>>>> f5cb6b4e299d6f9893722582ad2f6423b4028ae5

export default withDispatch((dispatch, ownProps) => {
  return {
    removeBlock: dispatch("core/editor").removeBlock
  };
})(DeleteButton);
