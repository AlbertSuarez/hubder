import React, { Component } from 'react';
import BpkInput, { INPUT_TYPES } from 'bpk-component-input';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import styles from './Login.css';
import { createBrowserHistory } from 'history';

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
        this.props.history.push("/home");
    }

    register() {
      this.props.history.push("/register");
    }
  
    render() {
        return (
          <BpkGridContainer>
            <BpkGridColumn offset={3} width={6}>
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
                  placeholder="Enter your username"/>
              </BpkGridRow>
              <BpkGridRow className={styles.formRow}>
                <BpkInput
                  id="password"
                  type={INPUT_TYPES.password}
                  name="password"
                  placeholder="Enter your password"
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