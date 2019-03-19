const { __ } = wp.i18n;
const { addFilter } = wp.hooks;

addFilter(
  "blocks.registerBlockType",
  "jsforwp-advgb/extending-register-block-type",
  extendWithRegisterBlockType
);

function extendWithRegisterBlockType(settings, name) {
  // Check for block type
  if ("core/code" === name) {
    // Change block title
    settings.title = __("Code Snippet", "jsforwpadvblocks");

    // Change block description
    settings.description = __(
      "Use this for maximum codiness 💃",
      "jsforwpadvblocks"
    );

    // Change the block category
    settings.category = "recommended";

    // Change the icon
    settings.icon = "admin-tools";

    // Add to keywords
    if (settings.keywords) {
      settings.keywords.push(__("💻", "jsforwpadvblocks"));
    } else {
      settings.keywords = [__("💻", "jsforwpadvblocks")];
    }

    // Change supports
    settings.supports = Object.assign({}, settings.supports, {
      html: true,
      anchor: true
    });

    // Add in a new attribute
    settings.attributes.new = {
      type: "string",
      default: "Default text"
    };

    // You can edit the edit, save, transforms, and deprecated
    // But your probably SHOULD NOW
    // settings.edit = props => <p>OVERRIDE</p>;
    // settings.save = props => <p>NOPE</p>;

    // Log Out All the Settings
    // console.log( settings );
  }

  // Return the modified settings
  return settings;
}
