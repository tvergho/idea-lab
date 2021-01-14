const compat = require('next-aws-lambda');
const fs = require('fs');
const page = require('./next-automatic-functions/next_404/nextJsPage');

// These two objects usually contain the HTTP request information and
// data about the environment in which the Netlify Function is invoked (AWS
// server ID, etc...). In this case, they don't matter and can just be empty.
const event = { requestContext: {} };
const context = {};

// This is our render callback handler. It writes the response body to 404.html
// in out_publish/
const writePageHtml = (_arg, response) => {
  fs.writeFileSync('./out/404.html', response.body);
};

// Render the page
compat(page)(
  event,
  context,
  writePageHtml,
);
