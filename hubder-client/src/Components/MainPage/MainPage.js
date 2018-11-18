import React, { Component } from 'react';
import NavigationHeader from '../NavigationHeader/NavigationHeader.js';
import Cards from '../Cards/Cards.js';
import BpkHorizontalNav, { BpkHorizontalNavItem } from 'bpk-component-horizontal-nav';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkText from 'bpk-component-text';
import styles from './MainPage.scss';
import utils from '../../utils.js';


class MainPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: "projects",
      elements: [ 'profile', 'projects', 'matches' ],
      cards: [],
      username: utils.getCookie('username')
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ cards: props.cards });
  }

  render() {
    const { selected, elements, cards } = this.state;

    if (cards.length == 0) {
      const self = this;
      utils.getUserCards(this.state.username)
        .then(function(response) {
          const cards = response.data.cards.map(utils.mapToCard);
          self.setState({ cards: cards });
        })
        .catch(function(error) {
          console.log(error);
        }
      );
    }

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
