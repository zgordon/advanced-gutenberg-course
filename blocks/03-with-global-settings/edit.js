const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, TextControl, Button, Spinner } = wp.components;
const { apiFetch } = wp;

export default class Edit extends Component {
  state = {
    blockSetting: "",
    isLoadingSetting: true,
    isSavingSetting: false,
    isEditingSetting: false
  };

  updateSetting = () => {
    this.setState({ isSavingSetting: true });
    apiFetch({
      path: "/jsforwpadvgb/v1/block-setting",
      method: "POST",
      body: this.state.blockSetting
    })
      .then(blockSetting => {
        this.setState({
          blockSetting,
          isLoadingSetting: false,
          isSavingSetting: false,
          isEditingSetting: false
        });
      })
      .catch(error => alert(error));
  };

  toggleIsEditing = () => {
    this.setState({ isEditingSetting: !this.state.isEditingSetting });
  };

  componentDidMount() {
    apiFetch({ path: "/jsforwpadvgb/v1/block-setting" })
      .then(blockSetting => {
        this.setState({
          blockSetting,
          isLoadingSetting: false
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { className } = this.props;

    const blockSettingData = wp.data.select("jsforwp-advgb").getBlockSettings();
    console.log(blockSettingData);

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
                    onClick={() => {
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
