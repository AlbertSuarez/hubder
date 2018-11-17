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
  }

  like() {
    console.log('like');
    // TODO api call to like
    popCard();
  }

  dislike() {
    console.log('dislike');
    // TODO api call to dislike
    popCard();
  }

  popCard() {
    const cards = this.state.cards.pop();
    this.setState({
      cards: cards
    });
  }

  render() {
    const { cards } = this.state;

    if (cards.length == 0) {
      return (<NoResults/>);
    }

    return (
      <BpkGridContainer fullWidth={true}>
        <BpkGridRow>
          <Card info={cards[0]}/>
        </BpkGridRow>
        <BpkGridRow>
          <ControlButtons like={this.like} dislike={this.dislike} />
        </BpkGridRow>
      </BpkGridContainer>
    );
  }
}

export default Cards;
