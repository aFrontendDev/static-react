import React from 'react';

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
      <div className="block block--size-a test">
        <p>Hey this is a component</p>
        <p>
        {this.props.data.title} <br />
        {this.props.data.bodyCopy}
        </p>
      </div>
    )
  }
}

Test.propTypes = {
  data: React.PropTypes.object.isRequired
}


export default Test;