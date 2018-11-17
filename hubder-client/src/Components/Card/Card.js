import React, { Component } from 'react';
import BpkText from 'bpk-component-text';
import BpkCard from 'bpk-component-card';
import BpkBadge, { BADGE_TYPES } from 'bpk-component-badge';
import ReactMarkdown from 'react-markdown';
import styles from './Card.scss';

const mock = {
  title: 'Project Hub',
  kind: 'Software',
  author: 'Albert Suarez',
  description: '# Lorem ipsum dolor sit amet\n\n## Consectetur adipiscing elit.\n\nMaecenas maximus in ante at viverra. In non felis nisi. Duis auctor turpis vitae elit blandit congue. Maecenas ornare mi orci, dictum tempor mauris ultricies vitae. Aliquam porttitor, tortor eget sagittis posuere, diam arcu ullamcorper sem, sed consectetur felis tellus vitae orci.\n\n> Pellentesque vel eros felis.\n\nProin interdum orci eu gravida blandit. Donec vel felis sem.',
  tags: 'Software,Hackathon,HackEPS'
}

class Card extends Component {
  
  constructor(props) {
    super(props);
    this.state = mock;
  }

  render() {
    const tags = this.state.tags.split(',').map((tag) => {
      return (
        <BpkBadge className={styles.outlinedGrey}>{tag}</BpkBadge>
      );
    })

    return (
      <BpkCard>
        <BpkText tagName="h1" textStyle="xxl" className={styles.title}>
          {this.state.title.toUpperCase()}
        </BpkText>
        <BpkText tagName="p">
          <BpkBadge className={styles.outlinedBlue}>
            {this.state.kind}
          </BpkBadge>
          {this.state.author}
        </BpkText>
        <ReactMarkdown source={this.state.description} />
        {tags}
      </BpkCard>
    );
  }
}

export default Card;