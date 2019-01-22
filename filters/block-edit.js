const { createHigherOrderComponent, withState } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, ToggleControl } = wp.components;

const MyToggleControl = withState({
  hasWrapper: false
})(({ hasWrapper, setState }) => (
  <ToggleControl
    label="Add wrapper"
    help={hasWrapper ? "Has wrapper." : "No wrapper."}
    checked={hasWrapper}
    onChange={() => {
      setState(state => ({ hasWrapper: !state.hasWrapper }));
    }}
  />
));

const withInspectorControls = createHigherOrderComponent(BlockEdit => {
  return props => {
    if (props.name === "core/paragraph") {
      console.log(props);
      props.setAttributes({ wrapper: true });
      return (
        <Fragment>
          <BlockEdit {...props} />
          {props.attributes.wrapper && (
            <InspectorControls>
              <PanelBody>
                <MyToggleControl setAttributes={props.setAttributes} />
              </PanelBody>
            </InspectorControls>
          )}
        </Fragment>
      );
    }
    return <BlockEdit {...props} />;
    // console.log(props);
  };
}, "withInspectorControl");

wp.hooks.addFilter(
  "editor.BlockEdit",
  "jsforwpadvgb/with-inspector-controls",
  withInspectorControls
);
