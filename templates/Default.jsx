/* eslint-disable react/prop-types */

import React from 'react';
import withInitialProps from 'metalsmith-react-templates/withInitialProps';

class Default extends React.Component {
  state = {}

  componentDidMount = () => {
    this.setState({
      contents: this.props.contents,
      inputValue: this.props.inputValue
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.test}</p>
        <p>{this.props.contents}</p>
      </div>
    )
  }
}

export default withInitialProps(Default);
