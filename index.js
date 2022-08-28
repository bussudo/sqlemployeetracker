const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql2 = require("mysql2");
const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "M1chig@n",
  database: "employee_db",
});

connection.connect(function (error) {
  if (error) {
    throw error;
  }
  console.log("connected");
  menu();
});
function menu() {
  inquirer
    .prompt({
      type: "list",
      name: "userChoice",
      message: "Make a Selection",
      choices: [
        "View all Departments",
        "View all Roles",
        "View all Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee Role",
      ],
    })
    .then((answers) => {
      console.log(answers);
      console.log(answers.userChoice);
      if (answers.userChoice === "View all Departments") {
        viewDepartments();
      }
      if (answers.userChoice === "View all Roles") {
        viewRoles();
      }
      if (answers.userChoice === "View all Employees") {
        viewEmployees();
      }
      if (answers.userChoice === "Add a Department") {
        addDepartment();
      }
      if (answers.userChoice === "Add a Role") {
        addRole();
      }
      if (answers.userChoice === "Add an Employee") {
        addEmployee();
      }
      if (answers.userChoice === "Update an Employee Role") {
        updRole();
      }
    });
}
function viewRoles() {
  console.log("connection");
  connection.query("SELECT * FROM role", function (error, results) {
    if (error) {
      throw error;
    }
    console.table(results);
    menu();
  });
}
function viewDepartments() {
  console.log("connection");
  connection.query("SELECT * FROM department", function (error, results) {
    if (error) {
      throw error;
    }
    console.table(results);
    menu();
  });
}
function viewEmployees() {
  console.log("connection");
  connection.query("SELECT * FROM employee", function (error, results) {
    if (error) {
      throw error;
    }
    console.table(results);
    menu();
  });
}
function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      name: "newDept",
      message: "What is the name of the department",
    })
    .then((deptChoice) => {
      console.log(deptChoice.newDept);
      connection.query(
        `INSERT INTO department (name) VALUES ('${deptChoice.newDept}')`,
        function (error, results) {
          if (error) {
            throw error;
          }
          console.log("Successfully added to the department table");
          menu();
        }
      );
    });
}
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newTitle",
        message: "What is the title of the new role?",
      },
      {
        type: "input",
        name: "newSal",
        message: "What is the salary of the new role?",
      },
      {
        type: "input",
        name: "newDept",
        message: "What is the department of the new role?",
      },
    ])
    .then((RoleChoices) => {
      console.log(
        RoleChoices.newTitle,
        RoleChoices.newSal,
        RoleChoices.newDept
      );
      function addRole() {
        inquirer
          .prompt([
            {
              type: "input",
              name: "newTitle",
              message: "add the new title",
            },
            {
              type: "input",
              name: "newSal",
              message: "enter the new salary",
            },
            {
              type: "input",
              name: "newDept",
              message: "enter the department",
            },
          ])
          .then((RoleChoices) => {
            console.log(
              RoleChoices.newTitle,
              RoleChoices.newSal,
              RoleChoices.newDept
            );
            connection.query(
              `INSERT INTO role (title, salary, department_id) VALUES ('${RoleChoices.newTitle}'),(${RoleChoices.newSal}),(${RoleChoices.newDept})`,
              function (error, results) {
                if (error) {
                  throw error;
                }
                console.log("Successfully added to the role table");
                menu();
              }
            );
          });
      }
        function (error, results) {
          if (error) {
            throw error;
          }
          console.log("Successfully added to the role table");
          menu();
        }
      );
    });
}
