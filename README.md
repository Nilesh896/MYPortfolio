
MY PORTFOLIO 

Welcome to my portfolio project! This application is built using React for the frontend, styled with Tailwind CSS, and utilizes JSON Server as a fake REST API for the backend. This project showcases my skills and provides an interactive way to explore my work.


## Tables of Contents

1. Features
2. Technologies Used
3. Getting Started
4. Installation
5. Usage
6. Project Structure

## Features

- Interactive and responsive UI.
- Dynamic data fetching using a JSON Server.
- Clean and modern design with Tailwind CSS.
- Modular and maintainable codebase.

## Technologies Used

* React:  JavaScript library for building user interfaces.
* Tailwind CSS:  Utility-first CSS framework for styling.
* JSON Server:  Fake REST API for backend data.

## Deployment

Follow the steps below to set up and run the project locally.

Prerequisites

   Node.js installed on your machine.
   A code editor (e.g., VS Code).
   Basic understanding of React and JSON Server.

Installation

1.Clone the repository:
--bash
git clone https://github.com/Nilesh896/MyPortfolio.git

2.Navigate to the project directory:
--bash

cd MypPortfolio

3.Install dependencies:
--bash

npm install

4.Install JSON Server globally (if not already installed):
--bash

npm install -g json-server





## Usage
Running the Frontend

Start the React development server:
--bash

npm start
Open your browser and go to http://localhost:3000 to view the application.

Running the Backend  

Navigate to the backend directory (if applicable) or run JSON Server directly from the root directory:
--bash

json-server --watch db.json --port 5000
The JSON Server will be available at http://localhost:5000.


## Project Structure

portfolio/
├── public/           # Static files
├── src/              # Source code
│   ├── components/   # React components
│   ├── pages/        # Page components
│   ├── assets/       # Images and other assets
│   └── App.js        # Main React component
├── db.json           # JSON Server database
├── tailwind.config.js # Tailwind CSS configuration
└── package.json      # Project metadata and dependencies

## Acknowledgements

Thanks to the creators of React, Tailwind CSS, and JSON Server for providing awesome tools. 
Special thanks to everyone who inspired and supported this project.
