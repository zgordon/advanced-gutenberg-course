const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, ToggleControl } = wp.components;
const { addFilter } = wp.hooks;

import "./style.scss";
import classnames from "classnames";

// Add new attribute to code block
addFilter(
  "blocks.registerBlockType",
  "jsforwp-advgb/add-code-attributes",
  addCodeAttributes
);
// Modify the Edit Setting to Add Prop and Controls
addFilter(
  "editor.BlockEdit",
  "jsforwp-advgb/add-code-inspector-controls",
  addCodeInspectorControls
);
// Modify save function
addFilter(
  "blocks.getSaveElement",
  "jsforwp-advgb/modify-save-setting",
  modifySaveSetting
);

function addCodeAttributes(settings, name) {
  if (name !== "core/code") return settings;

  settings.supports = lodash.merge({}, settings.supports, {
    align: ["full", "wide"]
  });
  settings.attributes.align = {
    type: "string",
    default: "full"
  };
  settings.attributes.highContrast = {
    type: "boolean",
    default: false
  };
  return settings;
}

function addCodeInspectorControls(BlockEdit) {
  const withInspectorControls = createHigherOrderComponent(BlockEdit => {
    return props => {
      if (props.name !== "core/code") return <BlockEdit {...props} />;

      return (
        <Fragment>
          <div
            className={classnames({
              "high-contrast": props.attributes.highContrast
            })}
          >
            <BlockEdit {...props} />
          </div>
          <InspectorControls>
            <PanelBody>
              <ToggleControl
                label="High Contrast"
                checked={props.attributes.highContrast}
                onChange={highContrast => props.setAttributes({ highContrast })}
              />
            </PanelBody>
          </InspectorControls>
        </Fragment>
      );
    };
  }, "withInspectorControl");
  return withInspectorControls(BlockEdit);
}

function modifySaveSetting(el, type, attributes) {
  if (type.name === "core/code" && attributes.highContrast) {
    el.props.className = classnames(el.props.className, {
      "high-contrast": attributes.highContrast
    });
  }
  return el;
}
