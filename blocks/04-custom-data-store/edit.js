const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, TextControl, Button, Spinner } = wp.components;
const { apiFetch } = wp;

export default class Edit extends Component {
  render() {
    const { className } = this.props;

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
            {__(
              "Please enter a block settings value in the block settings",
              "jsforwpadvblocks"
            )}
          </p>
        </div>
      </Fragment>
    );
  }
}
