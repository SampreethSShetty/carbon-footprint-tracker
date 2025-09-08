# Carbon Footprint Tracker

!

## Project Overview

This is a full-stack web application that helps users estimate their personal carbon footprint from daily activities. The project demonstrates the ability to build a complete application from scratch, handling both frontend and backend logic, and integrating with a real-world public API.

## Features

- **Multi-Category Input**: Calculates the carbon footprint based on electricity, transport, and food consumption.
- **Real-Time Data**: The backend fetches live, real-time carbon intensity data from the Electricity Maps API for the `IN-SO` zone.
- **Data Visualization**: Presents a visual breakdown of the carbon footprint by category using a dynamic pie chart.
- **Client-Server Architecture**: The project is architected with a decoupled frontend (Vue.js) and backend (Node.js/Express.js) for clean code and scalability.

## Technologies Used

### Frontend
- **Vue.js**: The progressive framework used for the user interface.
- **Vite**: A fast build tool for a quick development experience.
- **Axios**: A library for making API calls from the frontend to the backend.
- **Vue-Chartjs**: A library to easily add data visualizations.

### Backend
- **Node.js**: The JavaScript runtime for building the server-side logic.
- **Express.js**: A web framework for creating a RESTful API.
- **Electricity Maps API**: The public API that provides real-world carbon emission data.

### Tools
- **Git & GitHub**: For version control and project hosting.
- **VS Code**: The primary code editor.

## How to Run Locally

To run this project on your machine, follow these steps:

### 1. Backend Setup

Navigate to the `server` directory and install the dependencies:
```bash
npm install
### Then, start the server:
npm start
### 2. Frontend Setup
In a new terminal, navigate to the client directory and install the dependencies:

Bash

npm install
Then, start the frontend development server:

Bash

npm run dev
The application will be available at http://localhost:5173.





