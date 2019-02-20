/**
 * Block dependencies
 */
import "./store";
import icon from "./icon";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import Edit from "./edit";

/**
 * Register block
 */
export default registerBlockType("jsforwpadvblocks/custom-store", {
  title: __("Custom Store", "jsforwpadvblocks"),
  description: __(
    "An example block for showing how to save global settings.",
    "jsforwpadvblocks"
  ),
  category: "jsforwpadvblocks",
  icon: {
    // background: "rgba(254, 243, 224, 0.52)",
    src: "edit"
  },
  keywords: [__("Redux", "jsforwpadvblocks")],
  edit: props => {
    return <Edit {...props} />;
  },
  save: props => {
    return <p>{__("With Custom Data Store", "jsforwpadvblocks")}</p>;
  }
});
