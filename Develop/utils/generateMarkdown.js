//node const init = require("init");



// function to generate markdown for README
function generateMarkdown(data) {
  return `# TITLE: ${data.Title}

          # DESCRIPTION: 
          ${data.Description}
          

          # Table of content
          ${data["Table of contents"]}

          # Installation
          ${data.Installation}

          # Usage
          ${data.Usage}

          # licenses
          ${data.Licenses}

          # Contributions
          ${data.Contributing}
          
          # Testing
          ${data.Tests}

          # Questions
          "https://github.com/${data["git hub user ID"]}"
          ${data.email}   

`;
}

module.exports = generateMarkdown;
