const { select } = wp.data;
export const core = () => {
  // console.group("wp.data.select('core')");
  // console.log("getAuthors: ", select("core").getAuthors());
  // console.log("getEmbedPreview: ", select("core").getEmbedPreview());
  // console.log("getEntity: ", select("core").getEntity("postType", "post"));
  // console.log("getEntity2: ", select("core").getEntity("root", "postType"));
  // console.log(
  //   "getEntityRecord: ",
  //   select("core").getEntityRecord("postType", "post", 628)
  // );
  // console.log(
  //   "getEntityRecords: ",
  //   select("core").getEntityRecords("postType", "post")
  // );
  // console.log("getMediaItems: ", select("core").getMediaItems());
  // console.log("getMedia: ", select("core").getMedia(10));
  // console.log("getPostTypes: ", select("core").getPostTypes());
  // console.log("getPostType: ", select("core").getPostType("post"));
  // console.log("getTaxonomies: ", select("core").getTaxonomies());
  // console.log("getTaxonomy: ", select("core").getTaxonomy("category"));
  // console.log("getThemeSupports: ", select("core").getThemeSupports());
  // // Still not sure how this works, or if only internal?
  // console.log(
  //   "getUserQueryResults: ",
  //   select("core").getUserQueryResults("author")
  // );
  // console.log("hasUploadPermissions: ", select("core").hasUploadPermissions());
  // console.log(
  //   "isPreviewEmbedFallback: ",
  //   select("core").isPreviewEmbedFallback()
  // );
  // console.log(
  //   "isRequestingEmbedPreview: ",
  //   select("core").isRequestingEmbedPreview()
  // );
  console.groupEnd();
};

export const coreBlocks = () => {
  console.group('wp.data.select("core/blocks")');

  // console.log(
  //   "getBlockStyles('core/quote')",
  //   select("core/blocks").getBlockStyles("core/quote")
  // );
  // // Not sure how to get working for core blocks
  // console.log(
  //   "getBlockSupport",
  //   select("core/blocks").getBlockSupport("jsforwpadvblocks/gallery", "align")
  // );
  // console.log("getBlockType", select("core/blocks").getBlockType("core/quote"));
  // console.log("getBlockTypes", select("core/blocks").getBlockTypes());
  // console.log("getCategories", select("core/blocks").getCategories());
  // console.log(
  //   "getChildBlockNames",
  //   select("core/blocks").getChildBlockNames("kadence/rowlayout")
  // );
  // console.log(
  //   "getDefaultBlockName",
  //   select("core/blocks").getDefaultBlockName()
  // );
  // console.log(
  //   "getFreeformFallbackBlockName",
  //   select("core/blocks").getFreeformFallbackBlockName()
  // );
  // console.log(
  //   "getUnregisteredFallbackBlockName",
  //   select("core/blocks").getUnregisteredFallbackBlockName()
  // );
  // // How to get working for core blocks
  // console.log(
  //   "hasBlockSupport",
  //   select("core/blocks").hasBlockSupport("jsforwpadvblocks/gallery", "align")
  // );
  // console.log(
  //   "hasChildBlocks",
  //   select("core/blocks").hasChildBlocks("kadence/rowlayout")
  // );
  // console.log(
  //   "hasChildBlocksWithInserterSupport",
  //   select("core/blocks").hasChildBlocksWithInserterSupport("kadence/rowlayout")
  // );
  console.groupEnd();
};

export const coreEditor = () => {
  console.group("core/editor");
  // console.log(
  //   "canInsertBlockType",
  //   select("core/editor").canInsertBlockType("core/paragraph")
  // );

  // // Uses logged in user
  // console.log(
  //   "canUserUseUnfilteredHTML",
  //   select("core/editor").canUserUseUnfilteredHTML()
  // );

  // console.log(
  //   "didPostSaveRequestFail",
  //   select("core/editor").didPostSaveRequestFail()
  // );

  // console.log(
  //   "didPostSaveRequestSucceed",
  //   select("core/editor").didPostSaveRequestSucceed()
  // );

  // console.log("getActivePostLock", select("core/editor").getActivePostLock());
  // console.log(
  //   "getAdjacentBlockClientId",
  //   select("core/editor").getAdjacentBlockClientId()
  // );
  // console.log("getAutosave", select("core/editor").getAutosave());
  // console.log(
  //   "getAutosaveAttribute",
  //   select("core/editor").getAutosaveAttribute()
  // );
  // console.log("getBlock", select("core/editor").getBlock());
  // console.log("getBlockAttributes", select("core/editor").getBlockAttributes());
  // console.log("getBlockCount", select("core/editor").getBlockCount());
  // console.log(
  //   "getBlockDependantsCacheBust",
  //   select("core/editor").getBlockDependantsCacheBust()
  // );
  // console.log(
  //   "getBlockHierarchyRootClientId",
  //   select("core/editor").getBlockHierarchyRootClientId()
  // );
  // console.log("getBlockIndex", select("core/editor").getBlockIndex());
  // console.log("getBlockIndex", select("core/editor").getBlockIndex());
  // console.log(
  //   "getBlockInsertionPoint",
  //   select("core/editor").getBlockInsertionPoint()
  // );
  // console.log(
  //   "getBlockListSettings",
  //   select("core/editor").getBlockListSettings()
  // );
  // console.log("getBlockMode", select("core/editor").getBlockMode());
  // console.log("getBlockName", select("core/editor").getBlockName());
  // console.log("getBlockOrder", select("core/editor").getBlockOrder());
  // console.log(
  //   "getBlockRootClientId",
  //   select("core/editor").getBlockRootClientId()
  // );
  // console.log(
  //   "getBlockSelectionEnd",
  //   select("core/editor").getBlockSelectionEnd()
  // );
  // console.log(
  //   "getBlockSelectionEnd",
  //   select("core/editor").getBlockSelectionEnd()
  // );
  // console.log(
  //   "getBlockSelectionStart",
  //   select("core/editor").getBlockSelectionStart()
  // );
  // console.log("getBlocks", select("core/editor").getBlocks());
  // console.log(
  //   "getBlocksByClientId",
  //   select("core/editor").getBlocksByClientId()
  // );
  // console.log(
  //   "getBlocksForSerialization",
  //   select("core/editor").getBlocksForSerialization()
  // );
  // console.log(
  //   "getClientIdsOfDescendants",
  //   select("core/editor").getClientIdsOfDescendants()
  // );
  // console.log(
  //   "getClientIdsWithDescendants",
  //   select("core/editor").getClientIdsWithDescendants()
  // );
  // console.log("getCurrentPost", select("core/editor").getCurrentPost());

  // // Takes as a parameter any property from getCurrentPost()
  // console.log(
  //   "getCurrentPostAttribute",
  //   select("core/editor").getCurrentPostAttribute("id")
  // );
  // console.log("getCurrentPostId", select("core/editor").getCurrentPostId());
  // console.log(
  //   "getCurrentPostLastRevisionId",
  //   select("core/editor").getCurrentPostLastRevisionId()
  // );
  // console.log(
  //   "getCurrentPostRevisionsCount",
  //   select("core/editor").getCurrentPostRevisionsCount()
  // );
  // console.log("getCurrentPostType", select("core/editor").getCurrentPostType());
  // console.log(
  //   "getEditedPostAttribute",
  //   select("core/editor").getEditedPostAttribute()
  // );
  // // getEditedPostAttribute
  // // getEditedPostContent
  // // getEditedPostPreviewLink
  // // getEditedPostVisibility

  // // getEditorSettings
  // console.log("getEditorSettings", select("core/editor").getEditorSettings());
  // // getFirstMultiSelectedBlockClientId

  // // Includes inner blocks VS getBlockCount is
  // // just parent blocks
  // console.log(
  //   "getGlobalBlockCount",
  //   select("core/editor").getGlobalBlockCount()
  // );
  // // getInserterItems
  // console.log("getInserterItems", select("core/editor").getInserterItems());
  // // getLastMultiSelectedBlockClientId
  // // getMultiSelectedBlockClientIds
  // // getMultiSelectedBlocks
  // console.log(
  //   "getMultiSelectedBlocks",
  //   select("core/editor").getMultiSelectedBlocks()
  // );

  // // getMultiSelectedBlocksEndClientId
  // // getMultiSelectedBlocksStartClientId
  // // getNextBlockClientId
  // console.log(
  //   "getNextBlockClientId",
  //   select("core/editor").getNextBlockClientId()
  // );
  // // getPermalink
  // console.log("getPermalink", select("core/editor").getPermalink());
  // // getPermalinkParts
  // console.log("getPermalinkParts", select("core/editor").getPermalinkParts());

  // // getPostEdits
  // // getPostLockUser
  // // getPreviousBlockClientId
  // // getReferenceByDistinctEdits
  // // getSelectedBlock;
  // console.log("getSelectedBlock", select("core/editor").getSelectedBlock());
  // // getSelectedBlockClientId
  // console.log(
  //   "getSelectedBlockClientId",
  //   select("core/editor").getSelectedBlockClientId()
  // );
  // // getSelectedBlockCount
  // // getSelectedBlocksInitialCaretPosition - Couldn't get working
  // console.log(
  //   "getSelectedBlocksInitialCaretPosition",
  //   select("core/editor").getSelectedBlocksInitialCaretPosition()
  // );
  // // getStateBeforeOptimisticTransaction
  // // getSuggestedPostFormat - Would not work in block, but would work in sidebar or outside a block.  Requires single block in editor
  // console.log(
  //   "getSuggestedPostFormat",
  //   select("core/editor").getSuggestedPostFormat()
  // );
  // // getTemplate;
  // console.log("getTemplate", select("core/editor").getTemplate());
  // // getTemplateLock
  // console.log("getTemplateLock", select("core/editor").getTemplateLock());
  // // getTokenSettings - not sure what tokens to pass
  // // console.log("getTokenSettings", select("core/editor").getTokenSettings());
  // // hasAutosave
  // // hasChangedContent
  // console.log(
  //   "hasChangedContent",
  //   select("core/editor").hasChangedContent("className")
  // );
  // // hasEditorRedo
  // // hasEditorUndo
  // // hasInserterItems
  // // hasMultiSelection
  // // hasSelectedBlock
  // console.log("hasSelectedBlock", select("core/editor").hasSelectedBlock());
  // // hasSelectedInnerBlock - Seems to return false when a inner block is actually selected
  // console.log(
  //   "hasSelectedInnerBlock",
  //   select("core/editor").hasSelectedInnerBlock()
  // );
  // // inSomeHistory
  // // isAncestorMultiSelected
  // // isAutosavingPost
  // // isBlockInsertionPointVisible
  // // isBlockMultiSelected
  // // isBlockSelected
  // // Takes clientID
  // console.log("isBlockSelected", select("core/editor").isBlockSelected());
  // // isBlockValid
  // // isBlockWithinSelection
  // // isCaretWithinFormattedText
  // // isCleanNewPost
  // // isCurrentPostPending
  // // isCurrentPostPublished
  // console.log(
  //   "isCurrentPostPublished",
  //   select("core/editor").isCurrentPostPublished()
  // );
  // // isCurrentPostScheduled
  // // isEditedPostAutosaveable
  // // isEditedPostBeingScheduled
  // // isEditedPostDateFloating
  // // isEditedPostDirty
  // // isEditedPostEmpty
  // // isEditedPostNew
  // console.log("isEditedPostNew", select("core/editor").isEditedPostNew());
  // // isEditedPostPublishable
  // // isEditedPostSaveable
  // // isFirstMultiSelectedBlock
  // // isMultiSelecting
  // // isPermalinkEditable
  // // isPostLockTakeover
  // // isPostLocked
  // // isPostSavingLocked
  // // isPreviewingPost - Seems to only get triggered first time
  // console.log("isPreviewingPost", select("core/editor").isPreviewingPost());
  // // isPublishSidebarEnabled
  // // isPublishingPost
  // console.log("isPublishingPost", select("core/editor").isPublishingPost());
  // isSavingPost
  // console.log("isSavingPost", select("core/editor").isSavingPost());
  // // isSelectionEnabled
  // // isTyping - COOL.  Returns false once mouse moves (along with other things probably)
  // console.log("isTyping", select("core/editor").isTyping());
  // // isValidTemplate
  console.groupEnd();
};

export const coreEditPost = () => {
  console.group("core/edit-post");
  console.log(
    "getActiveGeneralSidebarName",
    select("core/edit-post").getActiveGeneralSidebarName()
  );
  // getActiveMetaBoxLocations:
  // getAllMetaBoxes:
  // getEditorMode:
  console.log("getEditorMode", select("core/edit-post").getEditorMode());

  // getMetaBoxesPerLocation:
  // getPreference:
  console.log(
    "getPreference('isGeneralSidebarDismissed)'",
    select("core/edit-post").getPreference("isGeneralSidebarDismissed")
  );
  // getPreferences:
  console.log("getPreferences", select("core/edit-post").getPreferences());
  // hasMetaBoxes:
  // isEditorPanelEnabled:
  // isEditorPanelOpened - Works with document setting panels, not sure how to get panel name of custom panels
  console.log(
    "isEditorPanelOpened",
    select("core/edit-post").isEditorPanelOpened("discussion-panel"),
    select("core/edit-post").isEditorPanelOpened("featured-image")
  );
  // isEditorPanelRemoved:
  // isEditorSidebarOpened:
  console.log(
    "isEditorSidebarOpened",
    select("core/edit-post").isEditorSidebarOpened("core/edit-post")
  );
  // isFeatureActive: focusMode, fixedToolbar
  console.log(
    "isFeatureActive",
    select("core/edit-post").isFeatureActive("fullscreenMode")
  );
  // isMetaBoxLocationActive:
  // isMetaBoxLocationVisible:
  // isModalActive: ['edit-post/options']
  console.log(
    "isModalActive",
    select("core/edit-post").isModalActive("edit-post/keyboard-shortcut-help")
  );
  // isPluginItemPinned:
  console.log(
    "isPluginItemPinned",
    select("core/edit-post").isPluginItemPinned("jsforwpadvgb/toc")
  );
  // isPluginSidebarOpened:
  console.log(
    "isPluginSidebarOpened",
    select("core/edit-post").isPluginSidebarOpened("jsforwpadvgb/toc")
  );
  // isPublishSidebarOpened:
  console.log(
    "isPublishSidebarOpened",
    select("core/edit-post").isPublishSidebarOpened()
  );
  // isSavingMetaBoxes:
  console.groupEnd();
};

export const coreNotices = () => {
  console.group("core/notices");
  console.log("getNotices", select("core/notices").getNotices());
  console.groupEnd();
};

export const coreNux = () => {
  console.group("core/nux");
  console.log("areTipsEnabled", select("core/nux").areTipsEnabled());
  // Possible core guides?
  // "core/editor.inserter", "core/editor.settings",
  // "core/editor.preview", "core/editor.publish"
  console.log(
    "getAssociatedGuide",
    select("core/nux").getAssociatedGuide("core/editor.settings")
  );
  // console.log("isTipVisible", select("core/nux").isTipVisible());
  console.groupEnd();
};

export const coreViewport = () => {
  console.group("core/viewport");
  console.log(
    "isViewportMatch",
    select("core/viewport").isViewportMatch("< medium")
  );
  // NOTE: ifViewportMatches HOC
  console.groupEnd();
};
