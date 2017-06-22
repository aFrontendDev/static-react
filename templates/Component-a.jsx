import React from 'react';
import withInitialProps from 'metalsmith-react-templates/withInitialProps';
import Test from './test.jsx';

class Ca extends React.Component {
  state = {}

  componentDidMount = () => {
    this.setState({
      contents: this.props.contents
    });

    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>Component A</h1>
        <h2>{this.props.subtitle}</h2>
        <p>{this.props.contents}</p>
        <p>{this.props.example.custom.variables[0].toString()}</p>
        <div>
            {this.props.anArray[0]}
        </div>
        <Test />
      </div>
    )
  }
}

export default withInitialProps(Ca);