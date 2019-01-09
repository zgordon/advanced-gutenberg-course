function wrapHeadings(settings, name) {
  if (name !== "core/heading") {
    return settings;
  }

  const coverSettings = lodash.assign({}, settings, {
    supports: lodash.assign({}, settings.supports, {
      //   alignWide: true
      align: ["full", "wide"]
    })
  });
  console.log(coverSettings);
  return coverSettings;
}

wp.hooks.addFilter(
  "blocks.registerBlockType",
  "my-plugin/class-names/list-block",
  wrapHeadings
);
