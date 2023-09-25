const express = require('express');
const sequelize = require('./config/connection');
const inquirer = require('inquirer');
const Department = require('./models/department');
const Role = require('./models/role');
const Employee = require('./models/employee');

//const { Department, Role, Employee } = require('./models');



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// Prompts
const InquirerPrompt = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'choices',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add department',
          'Add role',
          'Add employee',
          'Update all departments',
          'Update employee information',
          'Exit',
        ],
      },
    ])
    .then((answers) => {
      const { choices } = answers;

      if (choices === 'View all departments') {
        showDepartments();
      }

      if (choices === 'View all roles') {
        showRoles();
      }

      if (choices === 'View all employees') {
        showEmployees();
      }

      if (choices === 'Add department') {
        addDepartments();
      }

      if (choices === 'Add role') {
        addRoles();
      }

      if (choices === 'Add employee') {
        addEmployees();
      }

      if (choices === 'Update all departments') {
        allDepartments();
      }

      if (choices === 'Update employee information') {
        updateEmployee();
      }

      if (choices === 'Exit') {
        sequelize.close(); // Close the Sequelize connection
      }
    });
};

// Departments information
const showDepartments = () => {
    console.log('All departments are showing.');
  
    // Query to retrieve department data
    const sql = `SELECT id, name FROM department`;
  
    sequelize
      .query(sql, { type: sequelize.QueryTypes.SELECT })
      .then((rows) => {
        // Check if any departments were found
        if (rows.length > 0) {
          // Display department data in a tabular format
          console.table(rows);
        } else {
          console.log('No departments found.');
        }
  
        // Continue with the inquirer prompts
        InquirerPrompt();
      })
      .catch((err) => {
        console.error(err);
        InquirerPrompt();
      });
  };
  

// Show roles
const showRoles = () => {
    console.log('Show all roles.');
  
    Role.findAll({
      include: Department, // Include the Department model to fetch associated departments
    })
      .then((roles) => {
        // Map the roles to a format suitable for console.table
        const roleData = roles.map((role) => ({
          id: role.id,
          title: role.title,
          salary: role.salary,
          department: role.department.name, // Access the associated department's name
        }));
  
        console.table(roleData);
        InquirerPrompt();
      })
      .catch((err) => {
        console.error(err);
        InquirerPrompt();
      });
  };
  

// Add roles information
const addRoles = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the role title:',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter the role salary:',
      },
      {
        type: 'list',
        name: 'departmentId',
        message: 'Select the department for this role:',
        choices: getDepartmentChoices(),
      },
    ])
    .then((answer) => {
      const { title, salary, departmentId } = answer;

      Role.create({
        title,
        salary,
        department_id: departmentId,
      })
        .then(() => {
          console.log(`Added ${title} role to roles.`);
          showRoles();
        })
        .catch((err) => {
          console.error(err);
          InquirerPrompt();
        });
    });
};

// Show employees
const showEmployees = () => {
  console.log('All employees are showing.');

  Employee.findAll({
    include: [
      { model: Role, include: Department }, // Include Role and its Department
      { model: Employee, as: 'manager' }, // Include manager (self-referencing relationship)
    ],
  })
    .then((employees) => {
      console.table(employees);
      InquirerPrompt();
    })
    .catch((err) => {
      console.error(err);
      InquirerPrompt();
    });
};

// Update employees
const updateEmployee = () => {
  Employee.findAll()
    .then((employees) => {
      const employeeChoices = employees.map((employee) => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id,
      }));

      inquirer
        .prompt([
          {
            type: 'list',
            name: 'employeeId',
            message: 'Select the employee to update:',
            choices: employeeChoices,
          },
          {
            type: 'list',
            name: 'roleId',
            message: 'Select the new role for the employee:',
            choices: getRoleChoices(),
          },
        ])
        .then((answer) => {
          const { employeeId, roleId } = answer;

          Employee.update(
            { role_id: roleId },
            { where: { id: employeeId } }
          )
            .then(() => {
              console.log('Employee role updated successfully.');
              showEmployees();
            })
            .catch((err) => {
              console.error(err);
              InquirerPrompt();
            });
        });
    })
    .catch((err) => {
      console.error(err);
      InquirerPrompt();
    });
};

// Define the addDepartments function to handle adding departments
function addDepartments() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the department name:',
      },
    ])
    .then((answer) => {
      const { name } = answer;

      Department.create({
        name,
      })
        .then(() => {
          console.log(`Added ${name} department.`);
          showDepartments();
        })
        .catch((err) => {
          console.error(err);
          InquirerPrompt();
        });
    });
}

// Add employee
const addEmployees = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'first_name',
        message: 'Enter the employee\'s first name:',
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'Enter the employee\'s last name:',
      },
      {
        type: 'list',
        name: 'role_id',
        message: 'Select the employee\'s role:',
        choices: getRoleChoices(),
      },
      {
        type: 'input',
        name: 'manager_id',
        message: 'Enter the manager\'s ID (if applicable):',
      },
    ])
    .then((answer) => {
      const { first_name, last_name, role_id, manager_id } = answer;

      Employee.create({
        first_name,
        last_name,
        role_id,
        manager_id,
      })
        .then(() => {
          console.log(`Added ${first_name} ${last_name} to employees.`);
          showEmployees();
        })
        .catch((err) => {
          console.error(err);
          InquirerPrompt();
        });
    });
}

// Helper function to get department choices
function getDepartmentChoices() {
  return Department.findAll().then((departments) =>
    departments.map((department) => ({
      name: department.name,
      value: department.id,
    }))
  );
}

// Helper function to get role choices
function getRoleChoices() {
  return Role.findAll().then((roles) =>
    roles.map((role) => ({
      name: role.title,
      value: role.id,
    }))
  );
}

// Call the InquirerPrompt function to start the prompts
InquirerPrompt();
