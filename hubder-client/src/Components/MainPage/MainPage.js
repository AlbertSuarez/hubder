import React, { Component } from 'react';
import NavigationHeader from '../NavigationHeader/NavigationHeader.js';
import Cards from '../Cards/Cards.js';
import BpkHorizontalNav, { BpkHorizontalNavItem } from 'bpk-component-horizontal-nav';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkText from 'bpk-component-text';
import styles from './MainPage.scss';
import getUserCards from '../../utils.js';

function mapToCard(card) {
  var title = card.project_title;
  var fullName = card.first_name + " " + card.last_name;
  var tags = [];
  var descripcion = card.descripcion || "";
  if (card.project_title == null) {
    title = card.first_name + " " + card.last_name;
    fullName = "";
  }
  if (card.project_tags != null) {
    tags = card.project_tags.split(',');
  }
  var cardd = {
    title: title,
    tags: tags,
    descripcion: descripcion,
    fullName: fullName,
    specialization: card.specialization
  }
  return cardd;
}

class MainPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: "projects",
      elements: [ 'profile', 'projects', 'chat' ],
      cards: []
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ cards: props.cards });
  }

  render() {
    const { selected, elements, cards } = this.state;

    if (cards.length == 0) {
      const self = this;
      getUserCards('carlotacatot')
        .then(function(response) {
          const cards = response.data.cards.map(mapToCard);
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
