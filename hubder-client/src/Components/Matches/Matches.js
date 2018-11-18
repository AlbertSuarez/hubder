import React, { Component } from 'react';
import BpkText from 'bpk-component-text';
import BpkBadge from 'bpk-component-badge';
import BpkCard from 'bpk-component-card';
import ReactMarkdown from 'react-markdown';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import utils from '../../utils.js';
import styles from '../Matches/Matches.scss';

class Matches extends Component {

  constructor(props) {
    super(props);
    this.state = {
      matches: props.matches || [],
      username: utils.getCookie('username')
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ matches: props.matches });
  }

  render() {
    const { matches } = this.state;

    var matchesList = (<BpkGridRow><div/></BpkGridRow>);

    if (matches.length == 0) {
      const self = this;
      utils.getUserMatches(this.state.username)
        .then(function(response) {
          console.log(response);
          self.setState({ matches: response.data.matches });
        })
        .catch(function(error) {
          console.log(error);
        }
      );
    } else {
      matchesList = this.state.matches.map(function(item, key) {
        const professorTitle = item.project.title.toUpperCase();
        const projectDescription = item.project.description;
        const professorName = item.user.teacher.first_name;
        const studentName = item.user.student.first_name;
        const status = item.status;
        return (
          <BpkGridRow key={key} className={styles.resultItem}>
            <BpkCard>
              <BpkText tagName="h1" textStyle="xxl" className={styles.title}>
                {professorTitle}
              </BpkText>
              <BpkText tagName="p">
                {professorName}
                <BpkBadge className={styles.outlined}>
                  {status}
                </BpkBadge>
                {studentName}
              </BpkText>
              <ReactMarkdown source={projectDescription} />
            </BpkCard>
          </BpkGridRow>
        );
      });
    }

    return (
      <BpkGridContainer fullWidth={true}>{matchesList}</BpkGridContainer>
    );
  }
}

export default Matches;