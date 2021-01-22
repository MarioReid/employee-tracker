const inquirer = require("inquirer");
const mysql = require("mysql");
const { inherits } = require("util");
require("console.table")

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "MallyWorld",
    database: "employeeDB"
  });

  connection.connect(function(err) {
    if (err) throw err;
    init();
    //console.log("connected as id " + connection.threadId + "\n");
  });

//display employees
  function displayEmployee(){
  var query = "SELECT * FROM employee";
      connection.query(query, function(err, res){
          console.table(res)
          init();
      })
    }

    //display departments
  function displayDepartment(){
    var query = "SELECT * FROM department";
        connection.query(query, function(err, res){
            console.table(res)
            init();
        })
      }
//create new department
function createNewEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employee's last name?"
        },
        {
            type: "input",
            name: "roleId",
            message: "What is the employee's role id?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the employee's manager id?"
        }
    ]).then(answers => {
        var query = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES("${answers.firstName}", "${answers.lastName}", ${answers.roleId}, ${answers.managerId})`;
            connection.query(query, function(err, res){
                console.table(res)
            
            })
    })
}

//Initial Questions
function init(){
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "Add Employee",
                "View All Departments",
                "Update Employee Role",
                "Exit"
            ]
        }
    ]).then(answers => {

        if(answers.action == 'View All Employees') {
            displayEmployee();
        } else if(answers.action == "Add Employee") {
            createNewEmployee();
        } else if(answers.action == "View All Departments") {
            displayDepartment();
        } else if(answers.action == "Update Employee Role") {
            displayDepartment();
        } else {
            console.log('Goodbye!')
            exit();
        }

    })
}

    function exit() {
        connection.end();
    }