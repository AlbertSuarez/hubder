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
      cards: [
        {
          "description": "Best project ever",
          "first_name": "Albert",
          "last_name": "Suarez",
          "project_tags": "android,software,app",
          "project_title": "Wisebite",
          "specialization": "Software",
          "username": "alsumo95"
        },
        {
          "description": "You know what Tinder is, cmon",
          "first_name": "Felix",
          "last_name": "Arribas",
          "project_tags": "ios,love,app",
          "project_title": "Tinder",
          "specialization": "Software",
          "username": "felixarpa"
        },
        {
          "description": "A good mattress yeah!",
          "first_name": "Carlota",
          "last_name": "Catot",
          "project_tags": "microsoft,mattress",
          "project_title": "Microsoft mattress",
          "specialization": "Software",
          "username": "carlotacatot"
        }
      ]
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
          <BpkGridColumn
            offset={3}
            width={6}
            mobileOffset={0}
            mobileWidth={12}
            className={styles.column}>
            <Cards cards={cards}/>
          </BpkGridColumn>
        </BpkGridRow>
      </BpkGridContainer>
    );
  }
}

export default MainPage;
