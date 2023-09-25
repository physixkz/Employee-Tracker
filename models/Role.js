const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Department = require('./department'); // Import the Department model

class Role extends Model {}

Role.init(
  {
    // Define attributes for the Role model
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Ensure title is not nullable
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false, // Ensure salary is not nullable
    },
    // Add a foreign key reference to department_id
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // Make sure department_id is not nullable
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'role',
    tableName: 'roles',
  }
);

// Define the association
Role.belongsTo(Department, { foreignKey: 'department_id' }); // Define the association

module.exports = Role;
