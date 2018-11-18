import React, { Component } from 'react';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkText from 'bpk-component-text';

class Account extends Component {
  render() {
    return (
      <div>
        <img
          alt="Page not found."
          src="https://js.skyscnr.com/sttc/oc-registry/components/not-found/0.1.0/build/static/media/404-2.1afb7c2a.svg"
          />
        <BpkText>My account</BpkText>
      </div>
    );
  }
}

export default Account;