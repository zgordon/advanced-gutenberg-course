/**
 * Block dependencies
 */
import icon from "./icon";

/**
 * Block dependencies
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */

export default registerBlockType("jsforwpadvblocks/gallery", {
  title: __("Gallery", "jsforwpadvblocks"),
  description: __("A demo custom gallery block", "jsforwpadvblocks"),
  category: "jsforwpadvblocks",
  icon,
  keywords: [
    __("Masonry", "jsforwpadvblocks"),
    __("Images Media", "jsforwpadvblocks"),
    __("Lightbox", "jsforwpadvblocks")
  ],
  edit: props => {
    return <p>Gallery goes here..</p>;
  },
  save: props => {
    return <p>Gallery goes here..</p>;
  }
});
