const { apiFetch } = wp;
const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, Spinner } = wp.components;

import ApiForm from "./components/ApiForm";
import MyMapComponent from "./components/Map";
import ToggleSidebarButton from "./components/ToggleSidebarButton";

export default class Edit extends Component {
  state = {
    apiKey: "",
    isLoading: true,
    isSavingApiKey: false,
    isEditingApiKey: false
  };

  toggleIsEditingApiKey = () => {
    this.setState({ isEditingApiKey: !this.state.isEditingApiKey });
  };

  updateApiKey = apiKey => {
    this.setState({ isSavingApiKey: true });
    apiFetch({
      path: "/jsforwpadvgb/v1/maps-api",
      method: "POST",
      body: apiKey
    })
      .then(data => {
        this.setState({
          apiKey,
          isSavingApiKey: false,
          isEditingApiKey: false
        });
      })
      .catch(error => alert(error));
  };

  componentDidMount() {
    apiFetch({ path: "/jsforwpadvgb/v1/maps-api" })
      .then(apiKey => {
        this.setState({
          apiKey,
          isLoading: false
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    console.log(this.state.apiKey);
    const {
      attributes: { text },
      className,
      setAttributes,
      isSelected
    } = this.props;

    if (this.state.isLoading) {
      return (
        <p>
          <Spinner />
          Loading...
        </p>
      );
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody
            title={__("API Key", "jsforwpadvblocks")}
            initialOpen={true}
          >
            <PanelRow>
              <ApiForm
                apiKey={this.state.apiKey}
                isSavingApiKey={this.state.isSavingApiKey}
                isEditingApiKey={this.state.isEditingApiKey}
                toggleIsEditingApiKey={this.toggleIsEditingApiKey}
                updateApiKey={this.updateApiKey}
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <div className={className} style={{ width: "100%", height: "100%" }}>
          {this.state.apiKey === "" ? (
            <p>
              Please enter an API key in the block settings{" "}
              <ToggleSidebarButton />
            </p>
          ) : (
            <MyMapComponent
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
                this.state.apiKey
              }&v=3.exp&libraries=geocoding,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `300px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          )}
        </div>
      </Fragment>
    );
  }
}
