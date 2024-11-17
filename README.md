# React Native To-Do List App

## Overview
This is a simple React Native To-Do List app that allows users to create, edit, delete, and mark tasks as completed. The app also includes a search bar for filtering tasks.

## Features
- Add new tasks with a title.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed or uncompleted.
- Search for tasks by title.
- Persistent storage using `AsyncStorage` to save tasks between app sessions.

## Setup and Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Munira12345/MyTodoApp.git
   cd MyTodoApp
 
## Install dependencies:
npm install
Run the app:

For iOS (macOS required):
bash
npx react-native run-ios

For Android:
bash
npx react-native run-android

## Approach
Built using React Native functional components and hooks. Components are separated for modularity:

TaskItem: Displays each task.
TaskList: Renders the list of tasks.
TaskInput: Handles adding new tasks.
TaskModal: Used for editing tasks.
## Screenshots
Current UI for MyTodoApp 

## Challenges and Solutions
Challenge: Handling state and updates for task editing. 
Solution: Managed with React state hooks and passed functions as props to child components.

Challenge: Maintaining persistent data across sessions. 
Solution: Used AsyncStorage to store tasks and read them during app initialization.

challenge: Matching 100% UI while meeting the necessary functionality 
Solution: Focused on 100% functional product than 100% UI 

