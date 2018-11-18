import React, { Component } from 'react';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkButton from 'bpk-component-button';
import styles from './ControlButtons.css';

class ControlButtons extends Component {
  render() {
    return (
      <BpkGridContainer className={styles.container}>
        <BpkGridColumn width={2}>
          <BpkButton featured onClick={this.props.dislike}>Dislike</BpkButton>
        </BpkGridColumn>
        <BpkGridColumn offset={6} width={1}>
          <BpkButton onClick={this.props.like}>Like</BpkButton>
        </BpkGridColumn>
      </BpkGridContainer>
    );
  }
}

export default ControlButtons;