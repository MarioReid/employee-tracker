
USE employeeDB;

INSERT INTO department (name)
VALUES("Management"), ("Human Resources"),("Administrative");

INSERT INTO role (title, salary, department_id)
VALUES("Manager", 90000, 1), ("HR", 65000, 2),("Report Processor", 45000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Kevin", "Dunbar", 1, 1), ("Mini", "Stevens", 2, 1),("Tim", "Dunwoody", 3, 1);


SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

UPDATE employee
SET first_name = "Mark"
WHERE employee.id = 1;

