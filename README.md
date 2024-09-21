# To-Do List Application

This is a simple **To-Do List** web application built using **React**, which allows users to add, edit, delete, and mark tasks as completed. The tasks are stored locally using `localStorage`, ensuring that the user's data persists across page reloads.

## Features
- Add new tasks with a minimum of 3 characters.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed.
- Filter tasks by whether they are completed or not.
- All tasks are stored in `localStorage` for persistent data.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>

cd to-do-list-app
npm install
npm run dev



The app should now be running on http://localhost:3000.

Usage

Open the application in a web browser.
Type a task in the input field and click on the Save button to add the task to the list.
Use the checkboxes to mark tasks as completed or toggle completion.
To edit a task, click the edit icon next to it. After editing, the task will move back to the input field for changes.
To delete a task, click the delete icon next to it.
Use the Show Completed checkbox to toggle the visibility of completed tasks.
File Structure
index.html: Contains the basic HTML structure for rendering the React app.
App.jsx: Main React component where the functionality of the to-do list is implemented.
index.css: Styling for the to-do list app.
main.jsx: Entry point for the React app.
Dependencies
React: JavaScript library for building user interfaces.
React Icons: Library for adding icons like edit and delete buttons.
UUID: Library used to generate unique IDs for each to-do item.
Screenshots

Future Improvements
Add categories or tags to organize tasks.
Implement due dates for tasks.
Add animations to enhance user experience.
Integrate with a backend for multi-device synchronization.
License
This project is licensed under the MIT License. See the LICENSE file for more information.


