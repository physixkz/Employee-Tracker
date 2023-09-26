-- Departments
INSERT INTO department (name)
VALUES
    ('Avengers'),
    ('X-Men'),
    ('Guardians of the Galaxy'),
    ('SHIELD'),
    ('Wakanda');

-- Roles
INSERT INTO roles (title, salary, department_id)
VALUES
    ('Iron Man', 90000, 1),
    ('Spider-Man', 70000, 1),
    ('Captain America', 120000, 1),
    ('Wolverine', 70000, 2),
    ('Star-Lord', 100000, 3),
    ('Rocket Raccoon', 120000, 3),
    ('Agent', 65000, 4),
    ('Black Widow', 55000, 4),
    ('Black Panther', 100000, 5),
    ('Winter Soldier', 100000, 5);

-- Employees
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('Tony', 'Stark', 1, 1),
    ('Peter', 'Parker', 2, 1),
    ('Steve', 'Rogers', 3, 3),
    ('Logan', 'Howlett', 4, 4),
    ('Peter', 'Quill', 5, 5),
    ('Rocket', 'Raccoon', 6, 5),
    ('Phil', 'Coulson', 7, 7),
    ('Natasha', 'Romanoff', 8, 1),
    ('T''Challa', 'Wakanda', 9, 1),
    ('Bucky', 'Barnes', 10, 1);
