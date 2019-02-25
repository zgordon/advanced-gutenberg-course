const { __ } = wp.i18n;
const { apiFetch } = wp;
const { Component, Fragment } = wp.element;
const { Button, TextControl, Spinner } = wp.components;

export default class BlockSettingsForm extends Component {
  state = {
    blockSetting: this.props.blockSetting
  };

  toggleIsEditing = e => {
    e.preventDefault();
    this.props.toggleIsEditing();
  };

  onSave = e => {
    e.preventDefault();
    this.props.updateSetting(this.state.blockSetting);
  };

  render() {
    return this.props.isEditing || this.props.blockSetting === "" ? (
      <Fragment>
        <TextControl
          label={__("Enter Block Setting", "jsforwpadvblocks")}
          readonly={this.props.isSaving}
          value={this.state.blockSetting}
          onChange={blockSetting => this.setState({ blockSetting })}
        />
        <Button
          className="is-button is-primary"
          disabled={this.props.isSaving}
          onClick={this.onSave}
        >
          {this.props.isSaving}
          {__("Save Setting", "jsforwpadvblocks")}
        </Button>{" "}
        <Button
          isDefault
          disabled={this.props.isSaving}
          onClick={this.toggleIsEditing}
        >
          {__("Cancel", "jsforwpadvblocks")}
        </Button>
      </Fragment>
    ) : (
      <Fragment>
        <p>{__("Setting Saved", "jsforwpadvblocks")}</p>
        <p>
          <Button isDefault onClick={this.toggleIsEditing}>
            {__("Edit Setting", "jsforwpadvblocks")}
          </Button>
        </p>
      </Fragment>
    );
  }
}
