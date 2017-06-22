/* eslint-disable react/prop-types */

import React from 'react';
import withInitialProps from 'metalsmith-react-templates/withInitialProps';
// header and footer to be included on every page
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

import Promo from '../components/promo.jsx';

class Default extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const jsonData = JSON.parse(this.props.contents);

    return (
      <div>

        <Promo data={jsonData} />
        
      </div>
    )
  }
}

export default withInitialProps(Default);
