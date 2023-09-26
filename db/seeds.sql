-- Departments
INSERT INTO department (name)
VALUES
    ('Marketing'),
    ('Sales'),
    ('Finance'),
    ('HR'),
    ('Product Development');

-- Roles
INSERT INTO roles (title, salary, department_id)
VALUES
    ('Marketing Manager', 90000, 1),
    ('Sales Representative', 70000, 1),
    ('Finance Director', 120000, 1),
    ('Sales Manager', 70000, 2),
    ('Product Manager', 100000, 3),
    ('Product Engineer', 120000, 3),
    ('HR Specialist', 65000, 4),
    ('HR Manager', 55000, 4),
    ('CEO', 100000, 5),
    ('COO', 100000, 5);

-- Employees
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Smith', 1, 1),
    ('Jane', 'Doe', 2, 1),
    ('Michael', 'Johnson', 3, 3),
    ('David', 'Brown', 4, 4),
    ('Sarah', 'Wilson', 5, 5),
    ('Jennifer', 'Harris', 6, 5),
    ('Robert', 'Davis', 7, 7),
    ('Emily', 'Miller', 8, 1),
    ('William', 'Anderson', 9, 1),
    ('Daniel', 'Clark', 10, 1);
