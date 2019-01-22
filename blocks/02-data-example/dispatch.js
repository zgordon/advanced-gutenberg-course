const { select, dispatch } = wp.data;
export const core = () => {
  console.group("wp.data.dispatch('core')");

  // ?? What shape is a new post entity
  // const newPostEntity = {
  //   title: "New Post"
  // };
  // console.log("addEntities: ");
  // dispatch("core").addEntities([newPostEntity]);

  // ?? undefined
  // console.log(dispatch("core").receiveThemeSupports());

  // receiveEmbedPreview:
  // receiveEntityRecords: ??
  // dispatch("core").receiveEntityRecords();
  // receiveThemeSupports: ??
  // dispatch("core").receiveThemeSupports();
  // console.log(dispatch("core").receiveThemeSupports());
  // receiveUploadPermissions:
  // receiveUserQuery:

  // saveEntityRecord:
  // Add new posts or pages
  // const newPost = {
  //   title: "Hella",
  //   status: "publish"
  // };
  // dispatch("core").saveEntityRecord("postType", "post", newPost);

  // saveMedia:
  // savePostType:
  // saveTaxonomy:
  console.groupEnd();
};

export const coreBlocks = () => {
  console.group("wp.data.dispatch('core/blocks')");

  // addBlockStyles - ?? Used inside registerBlockStyle
  // const blockStyle = {
  //   label: "Large",
  //   name: "large"
  // };
  // dispatch("core/blocks").addBlockStyles("core/quote", blockStyle);
  // console.log(dispatch("core/blocks").addBlockStyles("core/quote", blockStyle));

  // addBlockTypes - used inside registerBlockType
  // removeBlockStyles
  // removeBlockTypes
  // setCategories
  // setDefaultBlockName - ?? does when this is called matter
  // dispatch("core/blocks").setDefaultBlockName("core/image");
  // setFreeformFallbackBlockName
  // setUnregisteredFallbackBlockName
  // updateCategory
  console.groupEnd();
};

export const coreEditor = () => {
  console.group("wp.data.dispatch('core/blocks')");
  // // autosave - Triggers the autosave
  // console.log("autosave", dispatch("core/editor").autosave());
  // clearSelectedBlock
  // console.log(
  //   "clearSelectedBlock",
  //   dispatch("core/editor").clearSelectedBlock()
  // );
  // createUndoLevel
  // disablePublishSidebar - ??
  // console.log(
  //   "disablePublishSidebar",
  //   dispatch("core/editor").disablePublishSidebar()
  // );
  // editPost
  // enablePublishSidebar
  // enterFormattedText
  // exitFormattedText
  // hideInsertionPoint
  // insertBlock
  // insertBlocks
  // insertDefaultBlock
  // lockPostSaving
  // mergeBlocks
  // moveBlockToPosition
  // moveBlocksDown
  // moveBlocksUp
  // multiSelect
  // receiveBlocks
  // redo
  // refreshPost
  // removeBlock
  // removeBlocks
  // replaceBlock
  // replaceBlocks
  // resetAutosave
  // resetBlocks
  // resetPost
  // savePost
  // selectBlock
  // setTemplateValidity
  // setupEditor
  // setupEditorState
  // showInsertionPoint
  // startMultiSelect
  // startTyping
  // stopMultiSelect
  // stopTyping
  // synchronizeTemplate
  // toggleBlockMode
  // toggleSelection
  // trashPost
  // undo
  // unlockPostSaving
  // updateBlock
  // updateBlockAttributes
  // updateBlockListSettings
  // updateEditorSettings
  // updatePost
  // updatePostLock

  console.groupEnd();
};
