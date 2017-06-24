import React from 'react';
import PropTypes from 'prop-types';
// header and footer to be included on every page
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

// components and data here
import Test from '../components/test.jsx';
import testData from '../data/test.json';
import Promo from '../components/promo.jsx';
import promoData from '../data/promos.json';

class ExamplePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pageClass = this.props.pageClass ? this.props.pageClass : '';

    return (
      <div>
        <Header />
        <div id="page" className={pageClass}>
          <main class="main" role="main">
            <div className="layout layout--a">
              <div className="region region--a">
                <div className="region-inner">


                  <Test data={testData.test_a} />
                  <Promo data={promoData.promo_a} />


                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}

ExamplePage.propTypes = {
  pageClass: PropTypes.string
};

export default ExamplePage;