const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, TextControl, Button, Spinner } = wp.components;
const { apiFetch } = wp;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;

class Edit extends Component {
  render() {
    const { className, setting, setSetting } = this.props;
    return (
      <Fragment>
        <InspectorControls>
          <PanelBody
            title={__("Block Setting", "jsforwpadvblocks")}
            initialOpen={true}
          >
            <PanelRow>
              <p>
                <Button
                  isPrimary
                  onClick={() => {
                    // this.updateSetting();
                  }}
                >
                  {__("Save Setting", "jsforwpadvblocks")}
                </Button>{" "}
              </p>
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <div className={className}>
          <p>
            {setting}
            <Button
              isPrimary
              onClick={() => {
                setSetting("#####");
              }}
            >
              {__("Set Setting", "jsforwpadvblocks")}
            </Button>
            {__("Example block with custom data store", "jsforwpadvblocks")}
          </p>
        </div>
      </Fragment>
    );
  }
}

export default compose([
  withSelect(select => {
    return {
      setting: select("my-shop").getSetting()
    };
  }),
  withDispatch(dispatch => {
    return {
      setSetting: dispatch("my-shop").setSetting
    };
  })
])(Edit);
