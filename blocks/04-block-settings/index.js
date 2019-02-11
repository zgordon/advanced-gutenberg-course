const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, TextControl } = wp.components;

import icon from "./icon";
import Edit from "./edit";
import "./style.scss";

/**
 * Register example block
 */
export default registerBlockType("jsforwpadvblocks/global-block-settings", {
  title: __("Block Settings", "jsforwpadvblocks"),
  description: __(
    "An example block how to create global block settings.",
    "jsforwpadvblocks"
  ),
  category: "jsforwpadvblocks",
  icon: {
    src: icon
  },
  keywords: [__("Location", "jsforwpadvblocks")],
  attributes: {
    setting: {
      type: "string"
    }
  },
  edit: props => <Edit {...props} />,
  save: props => {
    const { setting } = props.attributes;
    return <div />;
  }
});
