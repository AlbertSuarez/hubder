import React, { Component } from 'react';
import BpkInput, { INPUT_TYPES } from 'bpk-component-input';
import BpkSelect from 'bpk-component-select';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import styles from './Register.css';
import utils from '../../utils.js';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account_type: 'Student',
      speciality: 'Computer Science'
    };
    this.submit = this.submit.bind(this);
  }

  submit() {
    const form = this.state;
    var self = this;
    utils.postUser(form.username, form.name, form.last_name, form.account_type,
      form.speciality, form.email, form.password)
    .then(function(response) {
      if (response.data.success) {
        utils.setCookie('username', form.username);
        self.props.history.push("/home");
      } else {
        self.props.history.push("/register");
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
          <BpkGridRow>
            <BpkText tagName="h1" textStyle="xl"> 
              Register 
            </BpkText>
          </BpkGridRow>
          <BpkGridRow className={styles.formRow}>
            <BpkInput
              id="username"
              type={INPUT_TYPES.text}
              name="username"
              placeholder="Enter your username"
              onChange={(e) => this.setState({ username: e.target.value})}
            />
          </BpkGridRow>
          <BpkGridRow className={styles.formRow}>
            <BpkInput
              id="name"
              type={INPUT_TYPES.text}
              name="name"
              placeholder="Enter your name"
              onChange={(e) => this.setState({ name: e.target.value})}
            />
          </BpkGridRow>
          <BpkGridRow className={styles.formRow}>
            <BpkInput
              id="last_name"
              type={INPUT_TYPES.text}
              name="last_name"
              placeholder="Enter your last name"
              onChange={(e) => this.setState({ last_name: e.target.value})}
            />
          </BpkGridRow>
          <BpkGridRow className={styles.formRow}>
            <BpkSelect
              id="account_type"
              name="account_type"
              onChange={(e) => this.setState({ account_type: e.target.value})} >
                <option value="Student">Student</option>
                <option value="Professor">Professor</option>
                <option value="Coordinator">Coordinator</option>
            </BpkSelect>
          </BpkGridRow>
          <BpkGridRow className={styles.formRow}>
            <BpkSelect
              id="speciality"
              name="speciality"
              onChange={(e) => this.setState({ speciality: e.target.value})} >
                <option value="Computer Science">Computer Science</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Information Technologies">Information Technologies</option>
                <option value="Information Systems">Information Systems</option> 
                <option value="Hardware">Hardware</option> 
            </BpkSelect>
          </BpkGridRow>
          <BpkGridRow className={styles.formRow}>
            <BpkInput
              id="email"
              type={INPUT_TYPES.text}
              name="email"
              placeholder="Enter your email"
              onChange={(e) => this.setState({ email: e.target.value})}
            />
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
            <BpkButton onClick={this.submit}>
              Submit
            </BpkButton>
          </BpkGridRow>            
        </BpkGridColumn>
      </BpkGridContainer>
    );
  }
}

export default Register;