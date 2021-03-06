const generateManager = function (manager) {
  return `
<div class="column is-one-fourth">
<div class="content has-background-warning is-marginless">
  <h2 class="title">${manager.name}</h2>
<h4 class="subtitle">
  <span class="icon"><i class="fas fa-mug-hot"></i></span>
  Manager</h4>
</div>
<section>
  <div class="tile is-12">
    id: ${manager.id}
  </div> 
  <div class="tile is-12">
    email:&nbsp;
    <a href="mailto:email: ${manager.email}">${manager.email}</a>
  </div> 
  <div class="tile is-12">
    office number: ${manager.officeNumber}
  </div> 
</section>
</div>
`;
};

const generateEngineer = function (engineer) {
  return `
  \n<div class="column is-one-fourth">
    <div class="content has-background-warning is-marginless">
      <h2 class="title">${engineer.name}</h2>
    <h4 class="subtitle">
      <span class="icon"><i class="fas fa-glasses"></i></span>
      Engineer</h4>
    </div>
    <section>
      <div class="tile is-12">
        id: ${engineer.id}
      </div> 
      <div class="tile is-12">
        email:&nbsp;
        <a href="mailto:email: ${engineer.email}">${engineer.email}</a>
      </div> 
      <div class="tile is-12">
        github:&nbsp;
        <a href="https://github.com/${engineer.github}">${engineer.github}</a>
      </div> 
    </section>
  </div>
  `;
};

const generateIntern = function (intern) {
  return `
  \n<div class="column is-one-fourth">
  <div class="content has-background-warning is-marginless">
    <h2 class="title">${intern.name}</h2>
  <h4 class="subtitle">
    <span class="icon"><i class="fas fa-user-graduate"></i></span>
    Intern</h4>
  </div>
  <section>
    <div class="tile is-12">
      id: ${intern.id}
    </div> 
    <div class="tile is-12">
      email:&nbsp;
      <a href="mailto:email: ${intern.email}">${intern.email}</a>
    </div> 
    <div class="tile is-12">
      school: ${intern.school}
    </div> 
  </section>
</div>
`;
};
 
generateHTML = (data) => {

  pageArray = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 

      if (role === 'Manager') {
          const managerCard = generateManager(employee);

          pageArray.push(managerCard);
      }

      if (role === 'Engineer') {
          const engineerCard = generateEngineer(employee);

          pageArray.push(engineerCard);
      }

      if (role === 'Intern') {
          const internCard = generateIntern(employee);

          pageArray.push(internCard);
      }
      
  }

  const employeeCards = pageArray.join('')

  const generateTeam = generateTeamPage(employeeCards); 
  return generateTeam;

}

const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Roster</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    <section class="hero has-text-centered has-background-dark">
        <div class="hero-body">
        <h1 class="title has-text-white">Team Profiles</h1>
        </div>
    </section>
    <section class="columns">
    ${employeeCards}
    </section>
    </body>
    </html>
    `;
};

module.exports = generateHTML; 