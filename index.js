const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ title}) =>
"#Title ${title}"

inquirer
  .prompt([{ 
    type: "input",
    name: "title",
    message: "What is the title of your project",
  },

  ])
  .then((answers) => {
    const ReadMeContent = generateReadMe(answers)

    fs.writeFile('ReadMe.md', ReadMeContent, (err) =>
    err ? console.error(err) : console.log('Successfully created Read Me file!')
    );
  });

// Pass in the inputs into the readme file