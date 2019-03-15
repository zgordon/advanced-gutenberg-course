const { createHigherOrderComponent, withState } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls, Toolbar } = wp.editor;
const { PanelBody, PanelRow, ToggleControl } = wp.components;

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
      props.setAttributes({ wrapper: true });
      console.log(props);
      return (
        <Fragment>
          <BlockEdit {...props} />
          {props.attributes.wrapper && (
            <InspectorControls>
              <PanelBody>
                <PanelRow>
                  <MyToggleControl setAttributes={props.setAttributes} />
                </PanelRow>
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
