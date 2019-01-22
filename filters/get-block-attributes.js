function customAttributesTest(attributes, block) {
  if (block.name === "core/image" && !attributes.align) {
    console.log(attributes.align);
    //     console.log(lodash.merge(attributes, { align: "full" }));
    return lodash.merge(attributes, { align: "full" });
  }
  //   if (blockName === "core/cover") {
  //     return classnames(className, "my-block-cover");
  //   }
  return attributes;
}
// Adding the filter
wp.hooks.addFilter(
  "blocks.getBlockAttributes",
  "jsforwpadvgb/get-block-attributes",
  customAttributesTest
);
