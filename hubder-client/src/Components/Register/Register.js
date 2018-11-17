import React, { Component } from 'react';
import BpkInput, { INPUT_TYPES } from 'bpk-component-input';
import BpkSelect from 'bpk-component-select';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import styles from './Register.css';


class Register extends Component {

  render() {
    return (
      <BpkGridContainer>
        <BpkGridColumn offset={3} width={6}>
          <BpkGridRow className={styles.formRow}>
            <BpkInput
              id="username"
              type={INPUT_TYPES.text}
              name="username"
              placeholder="Enter your username"/>
          </BpkGridRow>
          <BpkGridRow className={styles.formRow}>
            <BpkInput
              id="name"
              type={INPUT_TYPES.text}
              name="name"
              placeholder="Enter your name"
            />
          </BpkGridRow>
          <BpkGridRow className={styles.formRow}>
            <BpkInput
              id="last-name"
              type={INPUT_TYPES.text}
              name="last-name"
              placeholder="Enter your last name"
            />
          </BpkGridRow>
          <BpkGridRow className={styles.formRow}>
            <BpkSelect
              id="account-type"
              name="account-type"
              onChange={(e) => console.log(`select changed to ${e.target.value}`)} >
                <option value="student">Student</option>
                <option value="professor">Professor</option>
                <option value="coordinator">Coordinator</option>
                <option value="administrator">Administrator</option>
            </BpkSelect>
          </BpkGridRow>
          <BpkGridRow className={styles.formRow}>
            <BpkInput
              id="email"
              type={INPUT_TYPES.text}
              name="email"
              placeholder="Enter your email"
            />
          </BpkGridRow>
          <BpkGridRow className={styles.formRow}>
            <BpkInput
              id="password"
              type={INPUT_TYPES.password}
              name="password"
              placeholder="Enter your password"
            />
          </BpkGridRow>
        </BpkGridColumn>
      </BpkGridContainer>
    );
  }
}

export default Register;