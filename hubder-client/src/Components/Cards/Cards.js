import React, { Component } from 'react';
import BpkHorizontalNav, { BpkHorizontalNavItem } from 'bpk-component-horizontal-nav';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkText from 'bpk-component-text';
import NoResults from '../NoResults/NoResults.js';
import Card from '../Card/Card.js';
import ControlButtons from '../ControlButtons/ControlButtons.js';

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
    console.log('like');
    // TODO api call to like
    this.popCard();
  }

  dislike() {
    console.log('dislike');
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
