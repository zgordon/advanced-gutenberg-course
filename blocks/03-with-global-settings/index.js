/**
 * Block dependencies
 */
import icon from "./icon";
import Edit from "./edit";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
export default registerBlockType("jsforwpadvblocks/with-global-settings", {
  title: __("With Global Settings", "jsforwpadvblocks"),
  description: __(
    "Example block with global block settings",
    "jsforwpadvblocks"
  ),
  category: "jsforwpadvblocks",
  icon: {
    src: icon
  },
  keywords: [__("API Key", "jsforwpadvblocks")],
  edit: props => {
    return <Edit {...props} />;
  },
  save: props => {
    return <p>{__("Show block global settings", "jsforwpadvblocks")}</p>;
  }
});
