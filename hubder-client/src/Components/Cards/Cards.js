import React, { Component } from 'react';
import BpkHorizontalNav, { BpkHorizontalNavItem } from 'bpk-component-horizontal-nav';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkText from 'bpk-component-text';
import NoResults from '../NoResults/NoResults.js';
import Card from '../Card/Card.js';
import ControlButtons from '../ControlButtons/ControlButtons.js';
import utils from '../../utils.js';

class Cards extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards
    };
    this.popCard = this.popCard.bind(this);
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({ cards: props.cards });
  }

  like() {
    var self = this;
    const from = utils.getCookie('username');
    const to = this.state.cards[0].username;
    console.log(from);
    console.log(to);
    utils.like(from, to)
      .then(function(response) {
        console.log(response);
        if (response.data.match) {
          console.log('NEW MATCH');
        }
        self.popCard();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  dislike() {
    // TODO api call to dislike
    this.popCard();
  }

  popCard() {
    if (this.state.cards.length > 0) {
      var cards = this.state.cards;
      cards.shift();
      this.setState({ 'cards': cards });
    }
  }

  render() {
    const { cards } = this.state;

    if (cards.length == 0) {
      return (<NoResults/>);
    }

    const card = (<Card info={cards[0]}/>);

    return (
      <BpkGridContainer fullWidth={true}>
        <BpkGridRow>
          {card}
        </BpkGridRow>
        <BpkGridRow>
          <ControlButtons like={this.like} dislike={this.dislike} />
        </BpkGridRow>
      </BpkGridContainer>
    );
  }
}

export default Cards;
