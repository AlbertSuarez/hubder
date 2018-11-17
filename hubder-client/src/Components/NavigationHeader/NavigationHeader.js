import React, { Component } from 'react';
import BpkHorizontalNav, { BpkHorizontalNavItem } from 'bpk-component-horizontal-nav';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import BpkText from 'bpk-component-text';

class NavigationHeader extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected,
    };
  }

  onClick = (e) => {
    this.setState({
      selected: e.target.name,
    });
    // TODO swap page
  }

  render() {
    var horizontalNavItems = this.props.elements.map(
      (element, index) => {
        return (
          <BpkHorizontalNavItem
            key={index}
            name={element}
            selected={this.state.selected === element}
            onClick={this.onClick}
            spaceAround={true}>
            <BpkText>{element.toUpperCase()}</BpkText>
          </BpkHorizontalNavItem>
        );
      }
    );

    return (
      <BpkHorizontalNav>
        {horizontalNavItems}
      </BpkHorizontalNav>
    );
  }
}

export default NavigationHeader;
