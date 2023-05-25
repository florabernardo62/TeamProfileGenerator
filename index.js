// Import the Engineer class from the 'lib' folder
const Engineer = require('./lib/Engineer');
// Import the Employee class from the 'lib' folder
const Employee = require('./lib/Employee');
// Import the Intern class from the 'lib' folder
const Intern = require('./lib/Intern');
// Import the Manager class from the 'lib' folder
const Manager = require('./lib/Manager');

// Import the inquirer package
// Requirement met: GIVEN a command-line application that accepts user input 
const inquirer = require('inquirer');

// Create an empty array to store the team members
const teamMembers = [];

inquirer
  .prompt([
    //WHEN I start the application, THEN I am prompted to enter the team manager’s name
    {
      type: 'input',
      name: 'managersName',
      message: "What is the Manager's name?",
    },
    {
      // THEN I am prompted to enter the team manager’s employee ID
      type: 'input',
      name: 'managersId',
      message: "What is the Manager's employee ID?",
    },
    {
      // THEN I am prompted to enter the team manager’s email address
      type: 'input',
      name: 'managersEmail',
      message: "What is the Manager's email address?",
    },
    {
      // THEN I am prompted to enter the team manager’s office number
      type: 'input',
      name: 'managersOfficeNumber',
      message: "What is the Manager's office number?",
    },

  ])
  .then((answers) => {
    // TO create the table with manager's data
    const manager = new Manager(
      answers.managersName,
      answers.managersID,
      answers.managersEmail,
      answers.managersOfficeNumber,
    );
    teamMembers.push(manager);
    promptForTeamMember();
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });

// TO add a new team member 
const promptForTeamMember = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'addMember',
        message: 'Would you like to add another team member?',
        choices: [
          'Yes, add an Engineer',
          'Yes, add an Intern',
          'No, the team is completed'
        ],
      },
    ])
    .then((answers) => {
      // TO set conditions depending on the answer to the question 'Would you like to add another team member?'
      // TO set conditions for the answer 'Yes, add an Engineer'
      if (answers.addMember === 'Yes, add an Engineer') {
        inquirer
          .prompt([
            // WHEN I select the engineer option, THEN I am prompted to enter the engineer’s name
            {
              type: 'input',
              name: 'engineersName',
              message: "What is the Engineer's name?",
            },
            // THEN I am prompted to enter the engineer’s employee ID
           {
            type: 'input',
            name: 'engineersID',
            message: "What is the Engineer's employee ID?",
          },
           // THEN I am prompted to enter the engineer’s email
           {
            type: 'email',
            name: 'engineersEmail',
            message: "What is the Engineer's email?",
          },
          // THEN I am prompted to enter the engineer’s gitHub
          {
            type: 'input',
            name: 'engineersGitHub',
            message: "What is the Engineer's gitHub username?",
          },
          ])
          .then((engineerAnswers) => {
            const engineer = new Engineer(
              engineerAnswers.engineersName,
              engineerAnswers.engineersID,
              engineerAnswers.engineersEmail,
              engineerAnswers.engineersGitHub,
            );
            teamMembers.push(engineer);
            promptForTeamMember();
          })
          .catch((error) => {
            console.error('Error occurred:', error);
          });
      }
      // TO set conditions for the answer 'Yes, add an Intern'
      else if (answers.addMember === 'Yes, add an Intern') {
        inquirer
          .prompt([
            // WHEN I select the intern option, THEN I am prompted to enter the intern’s name
            {
              type: 'input',
              name: 'internsName',
              message: "What is the Intern's name?",
            },
             // THEN I am prompted to enter the intern’s employee ID
           {
            type: 'input',
            name: 'internsID',
            message: "What is the Intern's employee ID?",
          },
           // THEN I am prompted to enter the intern’s email
           {
            type: 'email',
            name: 'internsEmail',
            message: "What is the Intern's email?",
          },
          // THEN I am prompted to enter the intern’s school
          {
            type: 'input',
            name: 'internsSchool',
            message: "What is the Intern's school?",
          },
          ])
          .then((internAnswers) => {
            const intern = new Intern(
              internAnswers.internsName,
              internAnswers.internsID,
              internAnswers.internsEmail,
              internAnswers.internsSchool,
            );
            teamMembers.push(intern);
            promptForTeamMember();
          })
          .catch((error) => {
            console.error('Error occurred:', error);
          });
      }
      // No more team members, generate HTML or perform other actions
      else {
        generateHTML(teamMembers);
      }
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
};

// TO import the fs module to read and write files
const fs = require('fs');
const path = require('path');
// ...

const generateHTML = (teamMembers) => {
  // Read the HTML template file
  const templatePath = path.join(__dirname, 'src', 'templateHelper.html');
  fs.readFile(templatePath, 'utf8', (err, templateContent) => {
    if (err) {
      console.error('Error occurred while reading the template file:', err);
      return;
    }

    // WHEN I decide to finish building my team, THEN I exit the application, and the HTML is generated
    const teamMemberHTML = teamMembers
      .map((member) => {
        if (member instanceof Manager) {
          // TO generate an HTML for a Manager
          return `
            <div class="member">
              <h2>${member.getName()}</h2>
              <h3> Manager </h3>
              <!-- WHEN I click on an email address in the HTML, THEN my default email program opens and populates the TO field of the email with the address -->
              <p>Email: <a class="email-link" href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
              <p>Employee ID: ${member.getId()}</p>
              <p>Office Number: ${member.getOfficeNumber()}</p>
            </div>
          `;
        } else if (member instanceof Engineer) {
          // TO generate an HTML for an Engineer
          return `
            <div class="member">
              <h2>${member.getName()}</h2>
              <h3> Engineer </h3>
              <!-- WHEN I click on an email address in the HTML, THEN my default email program opens and populates the TO field of the email with the address -->
              <p>Email: <a class="email-link" href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
              <p>Employee ID: ${member.getId()}</p>
              <!-- WHEN I click on the GitHub username, THEN that GitHub profile opens in a new tab -->
              <p>GitHub: <a class="github-link" href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a></p>
            </div>
          `;
        } else if (member instanceof Intern) {
          // TO Generate an HTML for an Intern
          return `
            <div class="member">
              <h2>${member.getName()}</h2>
              <h3> Intern </h3>
              <!-- WHEN I click on an email address in the HTML, THEN my default email program opens and populates the TO field of the email with the address -->
              <p>Email: <a class="email-link" href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
              <p>Employee ID: ${member.getId()}</p>
              <p>School: ${member.getSchool()}</p>
            </div>
          `;
        }
      })
      .join('');

    // TO M=modify the templateContent to insert the team members' HTML
    const modifiedTemplate = templateContent.replace('<!-- Team Members information will be displayed here -->', teamMemberHTML);

    // TO define the file path
    const filePath = path.join(__dirname, 'dist', 'team.html');

    // TO write the modified template content to the file
    fs.writeFile(filePath, modifiedTemplate, (err) => {
      if (err) {
        console.error('Error occurred while creating the HTML file:', err);
      } else {
        console.log('HTML file created successfully at:', filePath);
      }
    });
  });
};
//WHEN I am prompted for my team members and their information
//THEN an HTML file is generated that displays a nicely formatted team roster based on user input