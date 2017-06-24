import React from 'react';
import PropTypes from 'prop-types';

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
        <p>Hey this is a componentfghvbjnkm hj v ghv gh</p>
        <p>
        {this.props.data.title} <br />
        {this.props.data.bodyCopy}
        </p>
      </div>
    )
  }
}

Test.propTypes = {
  data: PropTypes.object.isRequired
}


export default Test;