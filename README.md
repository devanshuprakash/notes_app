
Notes App – Backend (Node.js + TypeScript + MongoDB)
Overview

This project is a backend application for a simple Notes App built using Node.js, TypeScript, Express, and MongoDB.
The project follows an OOP-based architecture and uses a clean separation of concerns with controllers, models, routes, and interfaces.

The purpose of this project is to demonstrate how to build a scalable backend using class-based design, MVC pattern, and REST APIs, while keeping the codebase easy to understand for beginners.

This project was developed as part of a workshop-style learning approach and focuses on clarity over complexity.

Features

Create notes

Fetch all notes

Input validation

MongoDB database integration

Clean OOP-based architecture

Type-safe code using TypeScript

Easy to extend with edit, delete, and search functionality

Tech Stack

Node.js

Express

TypeScript

MongoDB

Mongoose

dotenv

Project Structure
src/
├── controllers/
│   └── note.controller.ts
├── models/
│   └── note.model.ts
├── routes/
│   └── note.routes.ts
├── utils/
│   ├── route.Interface.ts
│   └── note.interface.ts
├── app.ts
└── server.ts


Each folder has a single responsibility, which makes the codebase easier to maintain and understand.