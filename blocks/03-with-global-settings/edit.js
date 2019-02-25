const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, TextControl, Button, Spinner } = wp.components;
const { apiFetch } = wp;

function getSetting() {
  return apiFetch({ path: "/jsforwpadvgb/v1/block-setting" })
    .then(blockSetting => blockSetting)
    .catch(error => console.error(error));
}

function setSetting(setting) {
  return apiFetch({
    path: "/jsforwpadvgb/v1/block-setting",
    method: "POST",
    body: setting
  })
    .then(blockSetting => blockSetting)
    .catch(error => console.error(error));
}

export default class Edit extends Component {
  state = {
    blockSetting: "",
    isLoadingSetting: true,
    isSavingSetting: false,
    isEditingSetting: false
  };

  updateSetting = async () => {
    this.setState({ isSavingSetting: true });
    const blockSetting = await setSetting(this.state.blockSetting);
    this.setState({
      blockSetting,
      isLoadingSetting: false,
      isSavingSetting: false,
      isEditingSetting: false
    });
  };

  toggleIsEditing = () => {
    this.setState({ isEditingSetting: !this.state.isEditingSetting });
  };

  async componentDidMount() {
    const blockSetting = await getSetting();
    this.setState({
      blockSetting,
      isLoadingSetting: false
    });
  }

  render() {
    const { className } = this.props;

    if (this.state.isLoadingSetting) {
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
            initialOpen={true}
          >
            <PanelRow>
              {this.state.isEditingSetting || this.state.blockSetting === "" ? (
                <p>
                  <TextControl
                    label={__("Please enter a setting", "jsforwpadvblocks")}
                    value={this.state.blockSetting}
                    onChange={blockSetting => {
                      if (!this.state.isSavingSetting)
                        this.setState({ blockSetting });
                    }}
                  />
                  <Button
                    isPrimary
                    disabled={this.state.isSavingSetting}
                    onClick={() => {
                      this.updateSetting();
                    }}
                  >
                    {__("Save Setting", "jsforwpadvblocks")}
                  </Button>{" "}
                  <Button
                    isDefault
                    disabled={this.state.isSavingSetting}
                    onClick={async () => {
                      const blockSetting = await getSetting();
                      this.setState({ blockSetting });
                      this.toggleIsEditing();
                    }}
                  >
                    {__("Cancel", "jsforwpadvblocks")}
                  </Button>
                </p>
              ) : (
                <Fragment>
                  <p>{__("Global Setting Saved", "jsforwpadvblocks")}</p>
                  <Button isDefault onClick={this.toggleIsEditing}>
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
                "Please enter a block settings value in the block settings",
                "jsforwpadvblocks"
              )}
            </p>
          ) : (
            <p>{this.state.blockSetting}</p>
          )}
        </div>
      </Fragment>
    );
  }
}
