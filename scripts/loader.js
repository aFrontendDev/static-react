/* global document */
/*
  Isomorphic React renders twice. Once on the HTML page, once in JavaScript.
  If the props are the same on HTML and JavaScript, the template is synced,
  allowing subsequent updates without destroying user input:

  Modified from: http://www.crmarsh.com/react-ssr/
*/

import Entry from '../templates/Entry.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

/*
  In an actual environment, this should be
  retrieved from a Store or some other database function.
*/
const props = JSON.parse(document.querySelector('.initalState').innerHTML);

ReactDOM.render(
  <Entry {...props} />,
  document.getElementById('contents')
);
