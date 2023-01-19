const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({title, description, installation, license, contribution, usage, test, username, email}) =>
`# ${title}

## Description

${description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [License](#license)
- [Contributions](#contributions)
- [Usage](#usage)
- [Test](#test)
- [Contact](#contact)

## Installation

${installation}

## License

${license}

## Contributions

${contribution}

## Usage

${usage}

## Test

${test}

## Contact

If you wish to perhaps get in touch with me you can contact me via my email address: ${email} .
Or you can get in touch with me through my GitHub account: ${username}
`

inquirer
  .prompt([{ 
    type: "input",
    name: "title",
    message: "What is the title of your project ?",
  },{ 
    type: "input",
    name: "description",
    message: "How would you describe the project ?",
  },{ 
    type: "input",
    name: "installation",
    message: "What are the instructions to install the project ?",
  },{ 
    type: "input",
    name: "license",
    message: "Which license do you wish to use ?",
  }, { 
    type: "input",
    name: "contribution",
    message: "What guidelines do you wish to give to contributions ?",
  }, { 
    type: "input",
    name: "usage",
    message: "What information can you give about the usage of your project ?",
  }, { 
    type: "input",
    name: "test",
    message: "How would one run a test of a your project ?",
  }, { 
    type: "input",
    name: "username",
    message: "What is your GitHub username ?",
  },  { 
    type: "input",
    name: "email",
    message: "What is your email address ?",
  },
  ])
  .then((answers) => {
    const ReadMeContent = generateReadMe(answers)

    fs.writeFile('ReadMe.md', ReadMeContent, (err) =>
    err ? console.error(err) : console.log('Successfully created Read Me file!')
    );
  });

// Pass in the inputs into the readme file