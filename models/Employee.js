const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Role = require('./role');

class Employee extends Model {}

Employee.init(
  {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'employee',
    tableName: 'employee',
  }
);

Employee.belongsTo(Role, { foreignKey: 'role_id' });

Employee.belongsTo(Employee, {
  as: 'manager',
  foreignKey: 'manager_id',
  constraints: false,
});

module.exports = Employee;
