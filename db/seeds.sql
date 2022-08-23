use employee_db;
INSERT INTO department (name) VALUES 
("Accounting"),
("IT"),
("Business");
INSERT INTO role (title, salary, department_id) VALUES
("Engineer", 52000, 2),
("Accountant", 60000, 1),
("Manager", 90000, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Mary", "Smith", 2, NULL)
("Bob", "Edwards", 1, 1)
("Sally", "James", 3, 1);