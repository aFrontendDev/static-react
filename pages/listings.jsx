import React from 'react';


class Listings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div class="main" id="main" role="main">

            <div class="client-image" style="background-image: url({{global.clientImage}}); background-size: cover; background-position: center;">
                <img class="client-logo" src="{{global.clientLogo}}" alt="Client Logo" height="50" />
            </div>

            <div class="site-files">
                <div class="container">
                    <header class="header" role="banner">
                            <a href="#" class="logo">
                                <img src="_bb/bb-logo.svg" alt="Building Blocks" width="83" height="50" />
                            </a>
                            <h1 class="project-title">
                                
                                <span class="last-modified">
                                    <b>Last Modified:</b> <span></span> 
                                </span>
                            </h1>
                    </header>
                    <div class="content">
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
  }
}

export default Listings;