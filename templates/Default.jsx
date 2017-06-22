/* eslint-disable react/prop-types */

import React from 'react';
import withInitialProps from 'metalsmith-react-templates/withInitialProps';

class Default extends React.Component {

  constructor(props) {
    super(props);

    const jsonData = JSON.parse(this.props.contents);
    this.state = {
      data: jsonData
    };
  }

  render() {
    let jsonData = this.state.data;
    let tagsLength = jsonData.tags ? jsonData.tags.length : null;
    let ctaLength = jsonData.ctas ? jsonData.ctas.length : null;
    return (
      <div id={jsonData.id}>
        <h1>{jsonData.title}</h1>

        {
          tagsLength ?
          <ul>
          {
            jsonData.tags.map(function (item, index) {
              return <li key={index}>{item}</li>
            })
          }
          </ul>
          : null
        }

        {
          ctaLength ?
          <div class="ctas">
            {
              jsonData.ctas.map( (cta, index) => {
                return (
                  <p key={index}>
                    <a href={cta.href} target="_blank">
                    {cta.text}
                    </a>
                  </p>
                );
              })
            }
          </div>
          : null
        }

        <picture>
            <source media="(min-width: 1024px)" srcSet={jsonData.image.lrg} />
            <source media="(min-width: 768px)" srcSet={jsonData.image.med} />
            <img srcSet={jsonData.image.small} src={jsonData.image.lrg} alt="alt text" />
        </picture>
      </div>
    )
  }
}

export default withInitialProps(Default);
