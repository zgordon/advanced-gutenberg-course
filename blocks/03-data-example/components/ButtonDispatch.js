const { __ } = wp.i18n;
const { Button } = wp.components;
const { dispatch } = wp.data;

const DeleteButton = ({ clientId }) => {
  return (
    <Button
      className="is-button is-default"
      onClick={() => dispatch("core/editor").removeBlock(clientId)}
    >
      {__("X", "jsforwpadvblocks")}
    </Button>
  );
};

export default DeleteButton;
