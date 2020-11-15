const fs = require('fs')

// function to generate markdown for README
function generateMarkdown(data) {
  const readmeTemplate = fs.readFileSync('./templates/README_TEMPLATE.md').toString();
  
  try {
    let filledOutReadme = readmeTemplate
      .replace('[template_title]', data.title)
      .replace('[template_description]', data.description)
      .replace('[template_instalation]', data.installation)
      .replace('[template_usage]', data.usage)
      .replace('[template_license]', data.license)
      .replace('[template_contributing]', data.contributing)
      .replace('[template_tests]', data.tests)
      .replace('[template_github_user]', data.github_user)
      .replace('[template_github_user]', data.github_user)
      .replace('[template_email]', data.email);

    fs.writeFile('./output/README.md', filledOutReadme) ;

  } catch (error) {
    console.log(error);
  }

}
  
module.exports = generateMarkdown;
