const { addFilter } = wp.hooks;

import classnames from "classnames";

addFilter(
  "blocks.getSaveContent.extraProps",
  "jsforwpadvgb/get-save-content-extra-props",
  extendWithGetSaveContentExtraProps
);

function extendWithGetSaveContentExtraProps(props) {
  // Add class of "no-citation" if a quote has no citation
  if ("wp-block-quote" === props.className && !props.children[1]) {
    return lodash.merge(props, {
      className: classnames(props.className, "no-citation")
    });
  }

  // Add background to code on the frontend
  if ("wp-block-code" === props.className) {
    return lodash.merge(props, {
      style: {
        backgroundColor: "black",
        color: "white"
      }
    });
  }
  return props;
}
