const { registerBlockStyle } = wp.blocks;

import "./style.scss";

registerBlockStyle("core/quote", {
  name: "colorful-quote",
  label: "Colorful Quote"
});

registerBlockStyle("jsforwpadvblocks/shoutout-styles", {
  name: "default",
  label: "Default"
});

registerBlockStyle("jsforwpadvblocks/shoutout-styles", {
  name: "serious",
  label: "Serious"
});

registerBlockStyle("jsforwpadvblocks/shoutout-styles", {
  name: "colorful",
  label: "Colorful"
});
