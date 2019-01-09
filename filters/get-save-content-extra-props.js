const { addFilter } = wp.hooks;

import classnames from "classnames";

function customSaveContentProps(props) {
  // Add class of "no-citation" if a quote with no citation
  if (props.className === "wp-block-quote" && !props.children[1]) {
    return lodash.merge(props, {
      className: classnames(props.className, "no-citation")
    });
  }
  // Add background to code on the frontend
  if (props.className === "wp-block-code") {
    return lodash.merge(props, {
      style: {
        backgroundColor: "black",
        color: "white"
      }
    });
  }

  return props;
}

addFilter(
  "blocks.getSaveContent.extraProps",
  "jsforwpadvgb/add-background-color-style",
  customSaveContentProps
);
