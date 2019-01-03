/**
 * Block dependencies
 */
// import icons from "./icons";
import "./style.scss";
// import "./editor.scss";

/**
 * Internal block libraries
 */
const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, TextControl } = wp.components;

import Edit from "./edit";
import ApiForm from "./components/ApiForm";
import MyMapComponent from "./components/Map";
// import Map from "./components/Map";

/**
 * Register example block
 */
export default registerBlockType("jsforwpadvblocks/google-map", {
  title: __("Google Map", "jsforwpadvblocks"),
  description: __(
    "An example block for working with the Google Maps API.",
    "jsforwpadvblocks"
  ),
  category: "jsforwpadvblocks",
  icon: {
    // background: "rgba(254, 243, 224, 0.52)",
    src: "location-alt"
  },
  keywords: [__("Location", "jsforwpadvblocks")],
  attributes: {
    text: {
      type: "html"
    }
  },
  edit: props => <Edit {...props} />,
  save: props => {
    const { text } = props.attributes;
    return <div />;
  }
});
