// function to generate markdown for README
function generateMarkdown(data) {
let url = ""
let badgeUrl = ""

if (data.license === "MIT") {
	url = "https://opensource.org/licenses/MIT";
	badgeUrl = "https://img.shields.io/npm/l/express";
}
else if (data.license === "Apache") {
	url = "http://www.apache.org/licenses/LICENSE-2.0";
	badgeUrl = "https://img.shields.io/eclipse-marketplace/l/notepad4e";
}
else if (data.license === "EPL 2.0") {
	url = "https://www.eclipse.org/legal/epl-2.0/";
	badgeUrl = "https://img.shields.io/eclipse-marketplace/l/notepad4e";
}
else if (data.license === "LGPL_2_1") {
	url = "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html";
	badgeUrl = "https://img.shields.io/cpan/l/Config-Augeas";
}
else if (data.license === "Artistic-2.0") {
	url = "https://opensource.org/licenses/Artistic-2.0";
	badgeUrl = "https://img.shields.io/badge/license-artistic--2.0-green"
}

  return `# ${data.title}
  
  ## Description:
  ${data.description}
   
  ## Table of Contents:
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  [![License](${badgeUrl})](${url})

  ## Contributing
  ${data.contributors}

  ## Tests 
  ${data.tests}

  ## Questions
  Visit my Github page [${data.github}](https://github.com/${data.github})
  For any questions, please contact me at ${data.email} 
  `;
}

module.exports = generateMarkdown;
