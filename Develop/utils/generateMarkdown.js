//node const init = require("init");



// function to generate markdown for README
function generateMarkdown(data) {
  return `# TITLE: ${data.Title}` + `\n` + 
  `## DESCRIPTION: ${data.Description}` + `\n` + 
  `## Table of content: ${data["Table of contents"]}` + `\n` +
  `## Installation ${data.Installation}` + `\n` +
  `## Usage ${data.Usage}` + `\n` +
   `## licenses ${data.Licenses}` + `\n` +
  `## Contributions ${data.Contributing}` + `\n` +
  `## Testing ${data.Tests}` + `\n` +
   `## Questions "https://github.com/${data["git hub user ID"]}" 
                 ${data.email}   

`;
}

module.exports = generateMarkdown;
