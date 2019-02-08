const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { Button, Modal } = wp.components;
const { withDispatch } = wp.data;
const { compose, withState } = wp.compose;

const ResetControls = ({ isOpen, setState, resetBlocks }) => (
  <Fragment>
    <Button isLink isDestructive onClick={() => setState({ isOpen: true })}>
      {__("Reset Layout", "jsforwpadvblocks")}
    </Button>

    {isOpen && (
      <Modal
        className="layout-switcher-reset"
        title={__("Warning!", "jsforwpadvblocks")}
        onRequestClose={() => setState({ isOpen: false })}
      >
        <p>
          {__("This action will remove all blocks.", "jsforwpadvblocks")}
          <strong>
            {__(
              "This can be undone before saving with the Undo option.",
              "jsforwpadvblocks"
            )}
          </strong>
        </p>
        <p>
          <Button
            isDefault
            onClick={() => {
              resetBlocks([]);
              setState({ isOpen: false });
            }}
          >
            {__("Reset Layout.", "jsforwpadvblocks")}
          </Button>
        </p>
      </Modal>
    )}
  </Fragment>
);

export default compose(
  withState({
    isOpen: false
  }),
  withDispatch(dispatch => {
    const { resetBlocks } = dispatch("core/editor");
    return {
      resetBlocks
    };
  })
)(ResetControls);
