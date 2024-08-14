# MERN Stack VTU Programs

This repository contains a collection of exercises and mini-projects designed to help you learn and practice various concepts in the MERN (MongoDB, Express, React, Node.js) stack.

## Concepts Covered

- MongoDB operations (CRUD, querying, upserts)
- Node.js basics and file system operations
- Express.js routing and middleware
- React components and hooks
- API integration with React
- Authentication mechanisms
- AJAX requests using Axios
- Server-side operations with Node.js and MongoDB

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0 or later)
- Git

## Installation

1. Clone the repository:
git clone https://github.com/AnupDangi/MERN.git

2. Navigate to the project directory:
cd MERN

3. Install the dependencies:
npm install


4. Create a `.env` file in the root directory and add your MongoDB connection string:
MONGODB_URI=your_mongodb_connection_string

## Running the Project

### Backend (Node.js and Express)

1. Start the MongoDB server (if not already running):
mongod

2. In a new terminal, navigate to the server directory:
cd server

3. Start the Node.js server:
npm start

The server should now be running on `http://localhost:5000` (or your specified port).

### Frontend (React)

1. Open a new terminal and navigate to the client directory:
cd client

2. Start the React development server:
npm start

The React app should now be running on `http://localhost:3000`.

## Project Structure

- `/server`: Contains the Node.js and Express backend code
- `/client`: Contains the React frontend code
- `/database`: Contains MongoDB-related scripts and data files

## Exercises

1. **MongoDB Operations**
- Create a `transactions` collection and bulk load data
- Perform upsert operations
- Query MongoDB with various conditions

2. **Node.js Basics**
- Manipulate object properties
- Implement CRUD operations on the file system

3. **React Fundamentals**
- Build a search filter functionality
- Fetch and display data from a REST API

4. **Node.js and MongoDB Integration**
- Store and retrieve student data
- Implement partial name search

5. **AJAX and Express.js** 
- Send data from client to server using Axios
- Implement authentication with email and password

6. **Express.js Routing and Middleware** 
- Create routes for prime numbers and cube calculations
- Check request headers for cookies

## Run Locally

Clone the project

```bash
  git clone https://github.com/AnupDangi/MERN.git
```

Go to the project directory

```bash
  cd MERN
```

Step 1.Create React app or can use vite also.
```bash
  npx create-react-app folder_name
```
Using Vite
```bash
  npm create vite@latest client -- --template react
```
After using this command you will get other steps in terminal and select React and then javascript at last. 

Step 2. Change to the created directory 
```bash
  cd folder_name 
```

Step 3: Install npm packages and dependencies
```bash
  npm install express
```

Here based on the dependencies of the program we will install other npm packages such as express,cors,body-parser,axios,react-router-dom,and so many other packages 

## Note : If the dependencies are not installed then remember this may give error to run the project so be cautious.
eg 
```bash
  npm install express
```

Start the server

4.If you are using react then 
```bash
  npm start

```
If you are using vite then 

```bash
  npm run dev
```
Step 5.To run node and connect database server create another directory named node inside src directory as given in codebase.

```bash
  cd src
```
# Create a directory named node or can copy my given folder in given programs with specific index.js file.
```bash
  mkdir node
```
# Change directory
```bash
  cd node
```
# Run 
```bash
  node index.js 
```

## Whatever problem occurs get a simple search and try to solve it.

## Note: Remember to manage your folder in proper structure  after creating react app or vite bundler,install all required dependencies and run proper commands based on usage of react-app or vite bundler used as guided above.


## Contributing

Feel free to fork this repository and submit pull requests to contribute to this project. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


