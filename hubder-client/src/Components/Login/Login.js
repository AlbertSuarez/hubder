import React, { Component } from 'react';
import BpkInput, { INPUT_TYPES } from 'bpk-component-input';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import BpkImage from 'bpk-component-image';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import styles from './Login.css';
import utils from '../../utils.js';

class Register extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        login: props.login
      };
      this.login = this.login.bind(this);
      this.register = this.register.bind(this);
    }

    login() {
      const form = this.state;
      var self = this;
      utils.postGetUsers(form.username, form.password)
      .then(function(response) {
        if (response.data.success) {
          utils.setCookie('username', form.username);
          self.props.history.push("/home");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    }

    register() {
      this.props.history.push("/register");
    }

    render() {
        return (
          <BpkGridContainer>
            <BpkGridColumn offset={3} width={6}>
              <BpkGridRow>
                <img src={require('../../logo.png')} width="600" height="150"/>
              </BpkGridRow>
              <BpkGridRow>
                <BpkText tagName="h1" textStyle="xl"> 
                  Welcome to Hubder! 
                </BpkText>
              </BpkGridRow>
              <BpkGridRow className={styles.formRow}>
                <BpkInput
                  id="username"
                  type={INPUT_TYPES.text}
                  name="username"
                  placeholder="Enter your username"
                  onChange={(e) => this.setState({ username: e.target.value})}/>
              </BpkGridRow>
              <BpkGridRow className={styles.formRow}>
                <BpkInput
                  id="password"
                  type={INPUT_TYPES.password}
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => this.setState({ password: e.target.value})}
                />
              </BpkGridRow>
              <BpkGridRow className={styles.formRow}>  
                <BpkButton onClick = {this.login} className={styles.buttonpading}>
                  Login
                </BpkButton> 
                <BpkButton secondary onClick = {this.register}>
                  Register
                </BpkButton>
              </BpkGridRow>            
            </BpkGridColumn>
          </BpkGridContainer>
        );
      }
    }

export default Register;