const html = require("../src/js/html")

exports.data = {
  layout: "base",
  title: "404 Not Found",
  eleventyExcludeFromCollections: true,
  permalink: `404/`,
}

exports.render = ({ title }) => html`<h1>${title}</h1>`
