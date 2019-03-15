const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, TextControl, Button, Spinner } = wp.components;
const { apiFetch } = wp;

function getSetting() {
  return apiFetch({
    path: "/jsforwpadvgb/v1/block-setting"
  })
    .then(blockSetting => blockSetting)
    .catch(error => error);
}

function setSetting(setting) {
  return apiFetch({
    path: "/jsforwpadvgb/v1/block-setting",
    method: "POST",
    body: setting
  })
    .then(blockSetting => blockSetting)
    .catch(error => error);
}

export default class Edit extends Component {
  state = {
    blockSetting: "",
    isLoading: true,
    isSaving: false,
    isEditing: false
  };

  updateSetting = async () => {
    this.setState({ isSaving: true });
    const blockSetting = await setSetting(this.state.blockSetting);
    this.setState({
      blockSetting,
      isSaving: false,
      isEditing: false
    });
  };

  async componentDidMount() {
    const blockSetting = await getSetting();
    this.setState({
      blockSetting,
      isLoading: false
    });
  }

  render() {
    const { className } = this.props;

    if (this.state.isLoading) {
      return (
        <p>
          <Spinner /> {__("Loading", "jsforwpadvblocks")}
        </p>
      );
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody
            title={__("Block Setting", "jsforwpadvblocks")}
            initialOpen
          >
            <PanelRow>
              {this.state.isEditing || this.state.blockSetting === "" ? (
                <p>
                  <TextControl
                    label={__("Please enter a setting", "jsforwpadvblocks")}
                    value={this.state.blockSetting}
                    onChange={blockSetting => {
                      if (!this.state.isSaving) {
                        this.setState({
                          blockSetting,
                          isEditing: true
                        });
                      }
                    }}
                  />
                  <Button
                    isPrimary
                    disabled={this.state.isSaving}
                    onClick={() => {
                      this.updateSetting();
                    }}
                  >
                    {__("Save Setting", "jsforwpadvblocks")}
                  </Button>{" "}
                  <Button
                    isDefault
                    disabled={this.state.isSaving}
                    onClick={async () => {
                      this.setState({ isEditing: false });
                      const blockSetting = await getSetting();
                      this.setState({ blockSetting });
                    }}
                  >
                    {__("Cancel", "jsforwpadvblocks")}
                  </Button>
                </p>
              ) : (
                <Fragment>
                  <p>{__("Global Setting Saved", "jsforwpadvblocks")}</p>
                  <Button
                    isDefault
                    onClick={() => {
                      this.setState({
                        isEditing: true
                      });
                    }}
                  >
                    {__("Edit", "jsforwpadvblocks")}
                  </Button>
                </Fragment>
              )}
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <div className={className}>
          {this.state.blockSetting === "" ? (
            <p>
              {__(
                "Please enter a block settings value in the block settings.",
                "jsforwpadvblocks"
              )}
            </p>
          ) : (
            <p>
              {__("Global Setting: ", "jsforwpadvblocks")}
              {this.state.blockSetting}
            </p>
          )}
        </div>
      </Fragment>
    );
  }
}
