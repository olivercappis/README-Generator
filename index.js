const inquirer = require('inquirer')
const fs = require('fs')

inquirer
    .prompt([
        {
            message: 'Project title:',
            name: 'title'
        },
        {
            message: 'description:',
            name: 'description',
        },
        {
            message: 'installation instructions:',
            name: 'installation'
        },
        {
            message: 'usage:',
            name: 'usage',
        },
        {
            message: 'Github username',
            name: 'credits',
        },
        {
            type: 'list',
            message: 'pick a license',
            name: 'license',
            choices: ['MIT', 'Apache', 'GPL']
        },
        {
            message: 'file path:',
            name: 'filePath'
        }

    ])


    .then((response) => {
        console.log(response)
        const readme = `# ${response.title}\n\n## Description\n\n${response.description}\n\n## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Credits](#credits)\n- [License](#license)\n\n## Installation\n\n${response.installation}\n\n## Usage\n\n${response.usage}\n\n## Credits\n\nhttps://github.com/${response.credits}\n\n## License \n\n${response.license}`


        fs.writeFile(response.filePath, readme, (error) => error ? console.log(error) : console.log('it worked prolly'))



    })