import React, { Component } from 'react';
import BpkInput, { INPUT_TYPES } from 'bpk-component-input';
import BpkSelect from 'bpk-component-select';


class Register extends Component {

  render() {
    return (
      <div>
        <BpkInput
          id="username"
          type={INPUT_TYPES.text}
          name="username"
          value=""
          placeholder="Enter your username"/>

        <BpkInput
          id="name"
          type={INPUT_TYPES.text}
          name="name"
          value=""
          placeholder="Enter your name"
        />

        <BpkInput
          id="last-name"
          type={INPUT_TYPES.text}
          name="last-name"
          value=""
          placeholder="Enter your last name"
        />

        <BpkSelect
          id="account-type"
          name="account-type"
          value="Student"
          onChange={(e) => console.log(`select changed to ${e.target.value}`)} >
            <option value="student">Student</option>
            <option value="professor">Professor</option>
            <option value="coordinator">Coordinator</option>
            <option value="administrator">Administrator</option>
        </BpkSelect>

        <BpkInput
          id="email"
          type={INPUT_TYPES.text}
          name="email"
          value=""
          placeholder="Enter your email"
        />
        
        <BpkInput
          id="password"
          type={INPUT_TYPES.text}
          name="password"
          value=""
          placeholder="Enter your password"
        />
        
      </div>
    );
  }
}

export default Register;