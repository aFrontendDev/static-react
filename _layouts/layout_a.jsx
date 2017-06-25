import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// header and footer to be included on every page
import Header from '../_components/header.jsx';
import Footer from '../_components/footer.jsx';

// add components here
import Test from '../_components/test.jsx';
import Promo from '../_components/promo.jsx';

// add json page files here
import ExampleData from '../_data/example.json';
import MoreData from '../_data/another_example.json';

class LayoutA extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const pageClass = this.props.pageClass ? this.props.pageClass : '';
    const dataArray = [ExampleData, MoreData];
    const dataFile = this.props.jsonObject;
    let currentData = null;

    dataArray.map((dataObject) => {
      if (dataObject[dataFile]) {
        currentData = dataObject[dataFile];
      }
    });

    return (
      <div>
        <Header />
        <div id="page" className={pageClass}>
          <main class="main" role="main">
            <div className="layout layout--a">
              <div className="region region--a">
                <div className="region-inner">

                {
                  currentData.map((component, index) => {

                    switch(component.component) {
                      case 'promo':
                        return <Promo data={component} key={index}/>
                      case 'test':
                        return <Test data={component} key={index}/>
                    }
                  })
                }

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

LayoutA.propTypes = {
  pageClass: PropTypes.string,
  jsonFile: PropTypes.string
};

export default LayoutA;