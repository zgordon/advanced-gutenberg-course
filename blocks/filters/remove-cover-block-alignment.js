function removeCoverAlign(settings, name) {
  if (name !== "core/cover") {
    return settings;
  }

  const coverSettings = lodash.assign({}, settings, {
    supports: lodash.assign({}, settings.supports, {
      alignWide: false,
      align: []
    })
  });

  console.log(coverSettings);
  return coverSettings;
}

wp.hooks.addFilter(
  "blocks.registerBlockType",
  "my-plugin/class-names/list-block",
  removeCoverAlign
);
