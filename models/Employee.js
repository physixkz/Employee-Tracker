const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Role = require('./role'); // Import the Role model

class Employee extends Model {}

Employee.init(
  {
    // Define attributes for the Employee model
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add a foreign key reference to role_id
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true, // Assuming manager_id can be nullable
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'employee',
    tableName: 'employees',
  }
);

// Define the association with Role
Employee.belongsTo(Role, { foreignKey: 'role_id' });

// Define the self-referencing association with Manager
Employee.belongsTo(Employee, {
  as: 'manager',
  foreignKey: 'manager_id',
  constraints: false, // Allow null values for manager_id
});

module.exports = Employee;
