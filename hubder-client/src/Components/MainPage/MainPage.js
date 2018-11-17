import React, { Component } from 'react';
import BpkHorizontalNav, { BpkHorizontalNavItem } from 'bpk-component-horizontal-nav';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkText from 'bpk-component-text';
import NavigationHeader from '../NavigationHeader/NavigationHeader.js';

class MainPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: "projects",
      elements: [ 'profile', 'projects', 'chat' ]
    };
  }

  onClick = (e) => {
    console.log(e.target);
    console.log('to ' + e.target.name);
    this.setState({
      selected: e.target.name,
    });
  }

  render() {
    const { selected, elements } = this.state;
    return (
      <BpkGridContainer>
        <BpkGridRow>
          <NavigationHeader selected={selected} elements={elements} />
        </BpkGridRow>
        <BpkGridRow>
          <div>Hola buenos dias</div>
        </BpkGridRow>
      </BpkGridContainer>
    );
  }
}

export default MainPage;
