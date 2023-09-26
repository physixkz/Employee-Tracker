# Employee-Tracker

A simple command-line application for tracking employees, departments, and roles within your organization.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Starting the Application](#starting-the-application)
  - [Using the Application](#using-the-application)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Employee-Tracker Application is a command-line tool that allows you to manage employees, departments, and roles within your organization or business. It provides features such as viewing and adding all departments, roles, and employees. You are also able to update your employee's existing role to another role.

## Features

- View a list of all departments.
- View a list of all roles, including their associated departments.
- View a list of all employees, along with their roles and managers.
- Add new departments to the organization.
- Add new roles to departments while adding the title and the salary.
- Add new employees, including their first name, last name, role, and manager.
- Update an employee's role within the organization or business.
- Exit the application without having to force close.

## Getting Started

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your computer.
- [MySQL](https://www.mysql.com/) installed and running, and you have necessary database access.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone git@github.com:physixkz/Employee-Tracker.git

 2.  Navigate to the project directory: cd Tracker

 3. Install the required npm packages: npm install

 ## Usage
### Starting the Application
1. Ensure your MySQL database is set up with the necessary schema and tables. Use the following commands in your terminal:
    mysql -u your-username -p 
    source db/schema.sql
    source db/seeds.sql

2. Open the .env.EXAMPLE file and add your mysql user in the quotations after DB_USER, and then your mysql password in the quotations after DB_PASSWORD. Once that is complete, rename the .env.EXAMPLE file to .env
3. Start the application: npm start

## Using the Application
Follow the on-screen prompts to navigate and interact with the application. Use arrow keys and Enter to make selections.
You can view and manage departments, roles, and employees as described in the application's features.

## Database Schema
The application uses the following database schema:

department table: Stores department information.
roles table: Stores role information, including the department each role belongs to.
employee table: Stores employee information, including their role and manager.

## Contributing
N/A

## License
This project is licensed under the MIT License - see the LICENSE file for details.