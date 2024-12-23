# Laravel-React


## Table of Contents
* [About](#about)
* [Getting Started](#getting-started)
* [Key Features](#key-faetures)
* [Project Status](#project-status)

## About

This project is a CRUD Application for Blog Management designed to showcase the integration of a Laravel backend with a React JS frontend.

# Key Features

### RESTful API: 
A backend API developed using Laravel to handle CRUD operations for blog posts.
### Database Management:
- Implemented migrations to define the database schema, ensuring easy deployment and version control.
- Created database seeders for populating the database with initial data, facilitating testing and development.
### Dynamic Frontend: 
A React-based user interface featuring components for:
- Displaying list of blog posts.
- Creating and editing blog posts with dynamic, validated forms.
- Performing deletions of blog posts.
- Displaying Errors and Loading States
### Client and Server Validation:
Validation implemented on both the client-side (React) and server-side (Laravel) to ensure data consistency and integrity.
### Error and Loading Boundaries: 
Handling of errors and loading states to enhance the user experience.
### Filtering and Sorting: 
Added functionality for filtering and sorting posts by status and creation date.

# Getting started

## Follow these steps to set up and run the project locally:

### Prerequisites
- Ensure MySQL is installed and running locally.
- Install Node.js and npm.
- Install Composer for managing PHP dependencies.

## Backend Setup
#### Clone the repository:
```
git clone https://github.com/nick-r-o-s-e/Laravel-RESTful-API-React.js
```
#### Navigate to the backend folder:
```
cd backend-laravel  
```

#### Install PHP dependencies:
```
composer install  
```

#### Set up the environment file:
- Create a .env file in the back folder.
- Add YOUR database connection settings (e.g., database name, username, and password).
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=blog_crud
DB_USERNAME=root
DB_PASSWORD=
```
#### Run database migrations:
```
php artisan migrate  
```

#### Seed the database (optional):
```
php artisan db:seed  
```

#### Start the server:
```
php artisan serve  
```

The backend server will be available at http://127.0.0.1:8000.

## Frontend Setup
#### Navigate to the frontend folder:
```
cd front  
```

#### Install npm modules:
```
npm install  
```

#### Start the development server:
```
npm run dev  
```
The frontend application will run on a local development server, usually available at http://localhost:5173.

#### Access the Application
 1. Open the frontend application in your browser at http://localhost:5173.
 2. The frontend will communicate with the backend API running at http://127.0.0.1:8000.


## Project Status
Project is in progress


