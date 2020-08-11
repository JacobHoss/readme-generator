// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.email}
  ${data.github}
`;
}

module.exports = generateMarkdown;
