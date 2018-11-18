import React, { Component } from 'react';
import NavigationHeader from '../NavigationHeader/NavigationHeader.js';
import Cards from '../Cards/Cards.js';
import Matches from '../Matches/Matches.js';
import Account from '../Account/Account.js';
import BpkHorizontalNav, { BpkHorizontalNavItem } from 'bpk-component-horizontal-nav';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkText from 'bpk-component-text';
import styles from './MainPage.scss';
import utils from '../../utils.js';


class MainPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: 'projects',
      elements: [ 'my account', 'projects', 'matches' ],
      cards: [],
      username: utils.getCookie('username')
    };
    this.changeElement = this.changeElement.bind(this);
  }

  changeElement(selected) {
    this.setState({ selected: selected });
  }

  componentWillReceiveProps(props) {
    this.setState({ cards: props.cards, selected: props.selected });
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

    var mainContent = (<Cards cards={cards}/>);

    if (selected == 'my account') {
      mainContent = (<Account />);
    } else if (selected == 'matches') {
      mainContent = (<Matches />);
    }

    return (
      <BpkGridContainer fullWidth={true}>
        <BpkGridRow>
          <NavigationHeader selected={selected} elements={elements} changeElement={this.changeElement}/>
        </BpkGridRow>
        <BpkGridRow>
          <BpkGridColumn
            offset={3}
            width={6}
            mobileOffset={0}
            mobileWidth={12}
            className={styles.column}>
            {mainContent}
          </BpkGridColumn>
        </BpkGridRow>
      </BpkGridContainer>
    );
  }
}

export default MainPage;
