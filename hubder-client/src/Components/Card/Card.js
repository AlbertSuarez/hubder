import React, { Component } from 'react';
import BpkText from 'bpk-component-text';
import BpkCard from 'bpk-component-card';
import BpkBadge, { BADGE_TYPES } from 'bpk-component-badge';
import ReactMarkdown from 'react-markdown';
import styles from './Card.scss';

class Card extends Component {
  
  constructor(props) {
    super(props);
    this.state = props.info;
  }

  componentWillReceiveProps(props) {
    this.setState(props.info);
  }

  render() {
    const tags = this.state.tags.map(
      (tag, index) => {
        return (
          <BpkBadge key={index} className={styles.outlinedGrey}>{tag}</BpkBadge>
        );
      }
    );

    return (
      <BpkCard>
        <BpkText tagName="h1" textStyle="xxl" className={styles.title}>
          {this.state.title.toUpperCase()}
        </BpkText>
        <BpkText tagName="p">
          <BpkBadge className={styles.outlinedBlue}>
            {this.state.specialization}
          </BpkBadge>
          {this.state.fullName}
        </BpkText>
        <ReactMarkdown source={this.state.description} />
        {tags}
      </BpkCard>
    );
  }
}

export default Card;