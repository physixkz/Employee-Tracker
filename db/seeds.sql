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
    ('Captain America', 120000, 2),
    ('Wolverine', 70000, 2),
    ('Star-Lord', 100000, 3),
    ('Rocket Raccoon', 120000, 3),
    ('Agent Coulson', 65000, 4),
    ('Black Widow', 55000, 4),
    ('Black Panther', 100000, 5),
    ('Winter Soldier', 100000, 5);

-- Employees
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('Tony', 'Stark', 2, 2),
    ('Peter', 'Parker', 5, 5),
    ('Steve', 'Rogers', 1, 1),
    ('Logan', 'Howlett', 1, 2),
    ('Peter', 'Quill', 3, 2),
    ('Rocket', 'Raccoon', 1, 5),
    ('Phil', 'Coulson', 4, 1),
    ('Natasha', 'Romanoff', 3, 2),
    ('T''Challa', 'Wakanda', 2, 5), -- Fixed here with double single quotes
    ('Bucky', 'Barnes', 5, 1),
    ('Groot', 'Guardiansbane', 3, 1),
    ('Shuri', 'Wakanda', 4, 4),
    ('Davos', 'Seaworth', 4, null),
    ('Carol', 'Danvers', 2, null),
    ('Drax', 'Galaxy', 3, null),
    ('Nick', 'Fury', 5, null)