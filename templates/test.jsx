import React from 'react';
import withInitialProps from 'metalsmith-react-templates/withInitialProps';

class Test extends React.Component {
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
        <p>Hey this is a component</p>
      </div>
    )
  }
}

export default withInitialProps(Test);