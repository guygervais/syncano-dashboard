/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

import { RaisedButton, FlatButton } from 'material-ui';

class UploadFilesButton extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setInputAttributes();
  }

  componentDidUpdate() {
    this.setInputAttributes();
  }

  handleClickButton = () => {
    this.refs.dirSelect.click();
  }

  setInputAttributes = () => {
    if (this.refs.dirSelect) {
      this.refs.dirSelect.setAttribute('webkitdirectory', true);
      this.refs.dirSelect.setAttribute('multiple', true);
      this.refs.dirSelect.setAttribute('directory', true);
      this.refs.dirSelect.setAttribute('odirectory', true);
      this.refs.dirSelect.setAttribute('msdirectory', true);
      this.refs.dirSelect.setAttribute('mozdirectory', true);
    }
  }

  render = () => {
    const inputStyles = {
      display: 'none',
      position: 'absolute'
    };
    const { hasFiles, handleSendFiles, handleUploadFiles, handleClearFiles } = this.props;

    if (hasFiles) {
      return (
        <div>
          <FlatButton
            style={{ marginRight: 10 }}
            label="Cancel"
            onTouchTap={handleClearFiles}
          />
          <RaisedButton
            label="Send Files"
            primary={true}
            onTouchTap={handleSendFiles}
          />
        </div>
      );
    }

    return (
      <RaisedButton
        label="Choose files from disk"
        primary={true}
        onTouchTap={this.handleClickButton}
      >
        <input
          style={inputStyles}
          type="file"
          ref="dirSelect"
          onChange={handleUploadFiles}
        />
      </RaisedButton>
    );
  }
}

UploadFilesButton.defaultProps = {
  hasFiles: false
};

export default UploadFilesButton;
