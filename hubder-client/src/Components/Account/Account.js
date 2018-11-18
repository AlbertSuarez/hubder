import React, { Component } from 'react';
import BpkInput, { INPUT_TYPES } from 'bpk-component-input';
import BpkSelect from 'bpk-component-select';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import styles from './Account.css';
import BpkTextarea from 'bpk-component-textarea';
import utils from '../../utils.js';

class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {   };
    this.create = this.create.bind(this);
    var teProjecte = true;
    const self = this;


    utils.getProject(utils.getCookie('username'))
      .then(function(response) {
        console.log(response);
        if (response.data.project == null) {
          teProjecte = false;
        }
      })
      .catch(function(error) {
        console.log(error);
    });  
  }

  create() {
    console.log("create")
    const form = this.state;
    var self = this;
    utils.createProject(form.title, form.projectDescription, form.tags, utils.getCookie('username'))
      .then(function(response) {
        console.log(response);
        if (response.data.success) {
          self.props.history.push("/home");
        }
      })
      .catch(function(error) {
        console.log(error);
      });  
  }



  render() {
    return (
      <BpkGridContainer>
        <BpkGridColumn offset={3} width={6}>
          <BpkGridRow className={styles.formStyleTitle} >
            <BpkText tagName="h1" textStyle="xl"> 
              My Project 
            </BpkText>
          </BpkGridRow>
          <BpkGridRow className={styles.formStyle}>
            <BpkInput
              id="title"
              type={INPUT_TYPES.text}
              name="title"
              placeholder="Enter your project Title"
              onChange={(e) => this.setState({ title: e.target.value})}
            />
          </BpkGridRow>
          <BpkGridRow className={styles.formStyle}>
            <BpkTextarea
              id="projectDescription"
              name="projectDescription"
              placeholder="Enter your project Description"
              onChange={(e) => this.setState({ projectDescription: e.target.value})}
            />
          </BpkGridRow>
          <BpkGridRow className={styles.formStyle}>
            <BpkInput
              id="tags"
              type={INPUT_TYPES.text}
              name="tags"
              placeholder="Enter your keywords (separeted by comas and without spaces)"
              onChange={(e) => this.setState({ tags: e.target.value})}
            />
          </BpkGridRow>
          
          <BpkGridRow className={styles.formStyle}>  
            <BpkButton onClick={this.create}>
              Submit project
            </BpkButton>
          </BpkGridRow>            
        </BpkGridColumn>
      
      </BpkGridContainer>
    );
  }
}

export default Account;