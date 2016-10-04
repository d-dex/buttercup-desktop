import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { openFile, createNewFile } from '../redux/modules/files'; 
import { showOpenDialog, showSaveDialog } from '../system/dialog';

class FileOpener extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onOpenClick}>Open...</button>
        <button onClick={this.props.onNewClick}>Create a new archive...</button>
      </div>
    );
  }
}

FileOpener.propTypes = {
  onOpenClick: PropTypes.func,
  onNewClick: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  onOpenClick: () => {
    showOpenDialog(filename => dispatch(openFile(filename)));
  },
  onNewClick: () => {
    showSaveDialog(filename => dispatch(createNewFile(filename)));
  }
});

export default connect(
    null,
    mapDispatchToProps
)(FileOpener);
