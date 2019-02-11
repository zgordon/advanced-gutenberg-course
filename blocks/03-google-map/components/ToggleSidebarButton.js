const { __ } = wp.i18n;
const { Button } = wp.components;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;

const ToggleSidebarButton = ({
  isEditorSidebarOpened,
  closeGeneralSidebar,
  openGeneralSidebar
}) => {
  if (isEditorSidebarOpened) return null;
  return (
    <Button isDefault onClick={openGeneralSidebar}>
      {__("Open Block Settings", "jsforwpadvblocks")}
    </Button>
  );
};

export default compose(
  withSelect(select => {
    return {
      isEditorSidebarOpened: select("core/edit-post").isEditorSidebarOpened()
    };
  }),
  withDispatch((dispatch, ownProps, { select }) => {
    const { openGeneralSidebar, closeGeneralSidebar } = dispatch(
      "core/edit-post"
    );
    return {
      openGeneralSidebar: () => openGeneralSidebar("edit-post/block"),
      closeGeneralSidebar
    };
  })
)(ToggleSidebarButton);
