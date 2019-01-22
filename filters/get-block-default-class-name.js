import classnames from "classnames";

function customCoverClassName(className, blockName) {
  if (blockName === "core/cover") {
    return classnames(className, "my-block-cover");
  }
  return className;
}
// Adding the filter
wp.hooks.addFilter(
  "blocks.getBlockDefaultClassName",
  "jsforwpadvgb/set-block-custom-class-name",
  customCoverClassName
);
