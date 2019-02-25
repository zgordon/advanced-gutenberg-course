const { __ } = wp.i18n;
const { apiFetch } = wp;
const { Component, Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, Spinner } = wp.components;

import BlockSettingsForm from "./components/BlockSettingsForm";
// import ToggleSidebarButton from "./components/ToggleSidebarButton";

export default class Edit extends Component {
  state = {
    blockSetting: "",
    isSaving: false,
    isEditing: false
  };

  toggleIsEditing = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  updateSetting = blockSetting => {
    this.setState({ isSaving: true });
    apiFetch({
      path: "/jsforwpadvgb/v1/maps-api",
      method: "POST",
      body: blockSetting
    })
      .then(blockSetting => {
        this.setState({
          blockSetting,
          isSaving: false,
          isEditing: false
        });
      })
      .catch(error => alert(error));
  };

  componentDidMount() {
    apiFetch({ path: "/jsforwpadvgb/v1/maps-api" })
      .then(blockSetting => {
        this.setState({ blockSetting });
        this.props.setAttributes({ setting: blockSetting });
      })
      .catch(error => console.error(error));
  }

  render() {
    console.log(this.state.blockSetting);
    const {
      attributes: { text },
      className,
      setAttributes,
      isSelected
    } = this.props;

    // if (this.state.isLoading) {
    //   return (
    //     <p>
    //       <Spinner />
    //       Loading...
    //     </p>
    //   );
    // }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody
            title={__("Block Setting", "jsforwpadvblocks")}
            initialOpen={true}
          >
            <BlockSettingsForm
              blockSetting={this.state.blockSetting}
              isSaving={this.state.isSaving}
              isEditing={this.state.isEditing}
              toggleIsEditing={this.toggleIsEditing}
              updateSetting={this.updateSetting}
            />
          </PanelBody>
        </InspectorControls>
        <div className={className}>
          {this.state.blockSetting === "" ? (
            <p>
              {__(
                " Please enter a Block Setting in the block inspector.",
                "jsforwpadvblocks"
              )}
              {/* <ToggleSidebarButton /> */}
            </p>
          ) : (
            <p>{this.state.blockSetting}</p>
          )}
        </div>
      </Fragment>
    );
  }
}
