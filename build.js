/* eslint-disable no-console */
require('babel-core/register');
var Metalsmith = require('metalsmith');
var reactTemplate = require('metalsmith-react-templates').default;

new Metalsmith(__dirname)
  .source('./page_data')
  .clean(false)
  .use(reactTemplate({
    babel: true,
    directory: 'pages',
    baseFileDirectory: 'layouts',
    baseFile: '_layout-a.html',
    isStatic: true
  }))
  .destination('./dist')
  .build(function(err) {
    if (err) {
      throw err;
    }
  });
