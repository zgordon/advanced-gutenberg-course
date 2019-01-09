const { apiFetch } = wp;
const { Component, Fragment } = wp.element;
const { Button, TextControl } = wp.components;

export default class ApiForm extends Component {
  state = {
    apiKeyTextControl: this.props.apiKey
  };

  toggleIsEditing = e => {
    e.preventDefault();
    this.props.toggleIsEditingApiKey();
  };
  onSave = e => {
    e.preventDefault();
    this.props.updateApiKey(this.state.apiKeyTextControl);
  };

  render() {
    return this.props.isEditingApiKey || this.props.apiKey === "" ? (
      <form>
        <TextControl
          label="Please enter in a Google Maps API Key"
          readonly={this.props.isSavingApiKey}
          value={this.state.apiKeyTextControl}
          onChange={apiKeyTextControl => this.setState({ apiKeyTextControl })}
        />
        <p>
          <Button
            className="is-button is-primary"
            disabled={this.props.isSavingApiKey}
            onClick={this.onSave}
          >
            Save API Key
          </Button>{" "}
          <Button
            className="is-button"
            disabled={this.props.isSavingApiKey}
            onClick={this.toggleIsEditing}
          >
            Cancel
          </Button>
        </p>
        <p>
          <a
            href="https://developers.google.com/maps/documentation/javascript/get-api-key"
            target="_blank"
          >
            Instructions for getting a Google Maps API Key
          </a>
        </p>
      </form>
    ) : (
      <Fragment>
        <p>API Key Saved</p>
        <p>
          <Button className="is-button" onClick={this.toggleIsEditing}>
            Edit API Key
          </Button>
        </p>
      </Fragment>
    );
  }
}
