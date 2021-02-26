# The-Hunt
“The Hunt game” is an outdoor collaborative game which allows the authorized users to play with other team members or to compete with other players in finding the hidden locations in a quest. We are designing this game in view that this is compatible with iPhone SE, Laptop, Tablet, and Android phones.

A first time user has to register in order to become a player in the game with the Open Authorization. After the user creates an account he can login into the account. The player will have options either to join a team or to create a team. In order to join a team an invitation will be sent to the users via mail. The invitation will be automatic rejection if the user does not respond to it within three days. A user can create a quest containing number of locations that can be identified by means of latitudes and longitudes. A team containing players will compete to find the locations within specified time period. The team which identifies maximum number of locations within quest gains maximum number of points and will be the winner.
 # Links
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dabde95955984dd08493709c421c7da6)](https://app.codacy.com/organizations/gh/Rajeshwari-Rudra/dashboard)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

## Links

- [Webapp on Heroku](https://treasure-hunt2.herokuapp.com/)
- [Source](https://github.com/Rajeshwari-Rudra/treasure-hunt)

## Stack

##### Platform: Node(Version - v15.1.0)
##### Web Framework : Express
##### View engine : EJS
##### Database : SQL 
##### Object Relational Mapping(ORM) : Sequelize 
##### Web App Host : Heroku
##### Data host : PostgreSQL
##### Coding standards : Enforce AirBnB/Prettier/ESlint

### CI/CD
 Auto-deploy from  main repo is required.
 
### Guidelines: 
 
### Prerequisites

- Node.js (comes with npm)
- Git
- TortoiseGit
- VS Code
- VS Code Extension - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [DB Browser for SQLite](https://sqlitebrowser.org/dl/), e.g., standard for 64 Windows. Save the .msi file and double-click to run it.

### Prerequisites for Publishing

- [Heroku CLI - to publish](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
- [Heroku login](https://id.heroku.com/login)
- [PostgreSQL local install](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

Create Heroku app with Heroku Postgres (Hobby Dev - free) add-on.

### Background - Steps to create a New App 

- Run Express-generator with EJS (dynamically create pages with HTML & embedded JS)
- Update the JavaScript - change var to const, use async/await
- Change package.json versions to "latest" - until you have issues, then freeze a version
- Add folders to organize your code
- Update to use Express app4 updates - stay current
- [Set up ESLint and Prettier](https://sourcelevel.io/blog/how-to-setup-eslint-and-prettier-on-node)

### Build Responsive Apps (for all screen sizes)

- We choose [MDB 5](https://mdbootstrap.com/docs/standard/) (Material Design Bootstrap 5 - no jQuery)

### Instructions:

Follow conventions - use standard lowercase, no spaces, follow naming patterns

Enable standard CRUD options (create, read, update, delete)

- Make a model & seed some data on startup
- Route requests to specific routers
- Route CRUD requests to controller functions
- Create standard views for the resource

1. create.ejs
1. delete.ejs
1. details.ejs
1. edit.ejs
1. index.ejs

Add a standard comment block at the top of each file.

Add yourself and email as the author (follow examples).

## Contributors 

<table>
 
 <td align="center"><a href="https://github.com/Rajeshwari-Rudra"><img src="https://avatars1.githubusercontent.com/u/60014358?s=460&u=b6e1e1ffa7551e5140b5a565a73ba572c362addc&v=4" width="100px;" alt=""/><br /><sub><b>Rajeshwari Rudravaram</b></sub></a><br /><a href="https://github.com/Rajeshwari-Rudra/treasure-hunt/commits?author=Rajeshwari-Rudra" title="Code">💻</a> <a attid="8742" href="https://www.linkedin.com/in/rajeshwari-r-52b53095/" width="18" height="18"><img src="https://www.linkedin-makeover.com/wp-content/uploads/2014/08/linkedin.png" alt="linkedin" width="18" height="18" class="alignleft size-full wp-image-8742"></a></td>
 
<td align="center"><a href="https://github.com/nrajubn"><img src="https://avatars1.githubusercontent.com/u/60019513?s=400&u=cace9ac06c512a02e613426ab241e064fbd5a985&v=4" width="100px;" alt=""/><br /><sub><b>Nooka Raju Boddu</b></sub></a><br /><a href="https://github.com/Rajeshwari-Rudra/treasure-hunt/commits?author=nrajubn" title="Code">💻</a> <a attid="8742" href="" width="18" height="18"><img src="https://www.linkedin-makeover.com/wp-content/uploads/2014/08/linkedin.png" alt="linkedin" width="18" height="18" class="alignleft size-full wp-image-8742"></a></td>
    
<td align="center"><a href="https://github.com/Avisakula123"><img src="https://avatars2.githubusercontent.com/u/60164504?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Rohith Reddy Avisakula</b></sub></a><br /><a href="https://github.com/Rajeshwari-Rudra/treasure-hunt/commits?author=Avisakula123" title="Code">💻</a> <a attid="8742" href="" width="18" height="18"><img src="https://www.linkedin-makeover.com/wp-content/uploads/2014/08/linkedin.png" alt="linkedin" width="18" height="18" class="alignleft size-full wp-image-8742"></a></td>

<td align="center"><a href="https://github.com/Puneeth159"><img src="https://avatars3.githubusercontent.com/u/60018781?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Puneeth Annam</b></sub></a><br /><a href="https://github.com/Rajeshwari-Rudra/treasure-hunt/commits?author=Puneeth159" title="Code">💻</a> <a attid="8742" href="https://www.linkedin.com/in/puneeth-annam-921b7219a/" width="18" height="18"><img src="https://www.linkedin-makeover.com/wp-content/uploads/2014/08/linkedin.png" alt="linkedin" width="18" height="18" class="alignleft size-full wp-image-8742"></a></td>

<td align="center"><a href="https://github.com/Bhaskar2909"><img src="https://avatars2.githubusercontent.com/u/60013714?s=400&u=acd92b4e2b14cd3a5c6930878eadae21ccf74cb3&v=4" width="100px;" alt=""/><br /><sub><b>Bhaskar Reddy Minupuri</b></sub></a><br /><a href="https://github.com/Rajeshwari-Rudra/treasure-hunt/commits?author=Bhaskar2909" title="Code">💻</a> <a attid="8742" href="" width="18" height="18"><img src="https://www.linkedin-makeover.com/wp-content/uploads/2014/08/linkedin.png" alt="linkedin" width="18" height="18" class="alignleft size-full wp-image-8742"></a></td>
  
</table>

### Septs for Contribution:

### Step 1 - Get fresh code.

1. Pull fresh code. (Fork & clone if this is the first time.)

#### Steps for cloning repository using command line

- On GitHub, navigate to the main page of the repository
- Click "Code" on main page repository which is above the list of files.
- Here we can clone using HTTPS and SSH.Click the respective tabs and copy the URL provided.
- Now open Git Bash.(necessary tools should be installed)
- Change the current working directory to the location where we want the cloned directory.
- Type "git clone", and then paste the URL copied earlier.
- Press "Enter" to create your local clone.

##### Note:
- We can also clone the repository using github desktop.

1. Run npm install
1. Run npm run start
1. Verify everything runs.

```PowerShell
npm install
npm run start
```

### Step 2 - Make your contributions.

As you test your code, format it with Prettier and
lint (clean it up) with ESLint.
See scripts in package.json.

1. Immediately, make your local edits.
1. Verify the app still runs & standarize your code (see commands below)

```PowerShell
npm install
npm run start

npm run prettier
npm run lint
npm run lint-fix
```

### Step 3 - Save your work.

1. Git add & git commit locally.
1. Git push to the origin.
1. In your updated GitHub repo look for "Pull Request".
1. Follow instructions (click the green buttons) to prepare a "pull request" into the main repo.

### Start Options

Start the app by running npm run start.
Until error handling is complete, a clean shutdown is better.
Once error handling is complete, use npm run dev to start with nodemon.

```PowerShell
npm run start
```

View the application locally at <http://localhost:3060/>

### Sequelize commands

```PowerShell
npx sequelize-cli db:migrate
```

### PostgreSQL commands (for Production Database)

```PowerShell
Start-Process 'C:\Program Files\PostgreSQL\13\scripts\runpsql.bat'
psql "${DATABASE_URL}"

```

#### Heroku commands (for Production App)

```PowerShell
heroku login
heroku addons

click create new app on 'NEW' button
type the name of your app and then click "create app"
Create heroku project
setting up this heroku project to get automatically connected to code so that whenever code is pushed to your GitHub repo it directly gets updated. 
Heroku website is responding correctly with a default page.


```

### References

- [Dr.DeniseCase](https://github.com/denisecase/web-app-2020-fall)
- [Main repo](https://github.com/Krishna-Koyyalamudi/The-Hunt)
- [Express API with Postgres](https://www.smashingmagazine.com/2020/04/express-api-backend-project-postgresql/)
- [See repo](https://github.com/chidimo/Express-API-Template)
- [Getting Started with Sequelize and Postgres](https://dev.to/nedsoft/getting-started-with-sequelize-and-postgres-emp)
- [Getting Started with Node, Express and PostgreSQL using Sequelize](https://morioh.com/p/fe03e5149f97)
- [EJS CRUD tutorial](https://www.mynotepaper.com/nodejs-simple-crud-with-expressjs-and-mysql)
- [EJS CRUD repo](https://github.com/mdobydullah/nodejs-crud-with-expressjs-mysql)
- [MDN Guide to Publishing with Heroku](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment)
- [Provising Heroku Postgres](https://devcenter.heroku.com/articles/heroku-postgresql#provisioning-heroku-postgres)


### Team Members

#### Boddu Nooka Raju :- Team Leader
#### Rohith Reddy Avisakula :- Architect
#### Bhaskar reddy Minupuri :- Front-end eveloper
#### Puneeth Annam :- Back-end Developer
#### Rajeshwari Rudravaram :- Database Administrator

### Reminders
- No spaces in folders and file names.
- Don't work on stale code - ALWAYS pull first
- Don't work on your desktop - organize your repos either by class or under a common folder (e.g., github or other).
- Deploy as you work - if everything passes tests, we want to add / commit / push and deploy frequently (several times a week). We should see your app develop throughout the sprint.
- Do hard things early. Do not delay figuring out the hard questions.
