const { Icon } = wp.components;
const { withDispatch, select } = wp.data;

const SwitcherButton = ({
  blockIds,
  removeBlocks,
  resetBlocks,
  insertBlock,
  insertBlocks,
  selectBlock,
  icon,
  label,
  layout
}) => {
  return (
    <button
      onClick={() => {
        removeBlocks(blockIds);
        // resetBlocks([]); // Also works
        insertBlocks(layout);
      }}
    >
      <Icon icon={icon} />
      <span>{label}</span>
    </button>
  );
};
export default withDispatch((dispatch, ownProps) => {
  const {
    removeBlocks,
    resetBlocks,
    insertBlocks,
    insertBlock,
    selectBlock
  } = dispatch("core/editor");
  return {
    removeBlocks,
    resetBlocks,
    insertBlocks,
    insertBlock,
    selectBlock
  };
})(SwitcherButton);
