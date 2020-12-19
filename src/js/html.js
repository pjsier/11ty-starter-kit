// Tagged template literal function that passes through values with default behavior,
// but if used as html`` it will trigger HTML syntax highlighting and prettier formatting
// inside the string. Used for better IDE support for 11ty.js templates
module.exports = (strings, ...values) =>
  strings.reduce(
    (result, string, i) => `${result}${string}${values[i] || ``}`,
    ``
  )
