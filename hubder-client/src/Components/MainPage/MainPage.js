import React, { Component } from 'react';
import NavigationHeader from '../NavigationHeader/NavigationHeader.js';
import Cards from '../Cards/Cards.js';
import BpkHorizontalNav, { BpkHorizontalNavItem } from 'bpk-component-horizontal-nav';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkText from 'bpk-component-text';
import styles from './MainPage.scss';

class MainPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: "projects",
      elements: [ 'profile', 'projects', 'chat' ],
      cards: [ 'lol' ]
    };
  }

  render() {
    const { selected, elements, cards } = this.state;
    return (
      <BpkGridContainer fullWidth={true}>
        <BpkGridRow>
          <NavigationHeader selected={selected} elements={elements} />
        </BpkGridRow>
        <BpkGridRow>
          <BpkGridColumn width={3} mobileWidth={0} className={styles.column} />
          <BpkGridColumn width={6} mobileWidth={12} className={styles.mainColumn}>
            <Cards cards={cards}/>
          </BpkGridColumn>
          <BpkGridColumn width={3} mobileWidth={0} className={styles.column} />
        </BpkGridRow>
      </BpkGridContainer>
    );
  }
}

export default MainPage;
