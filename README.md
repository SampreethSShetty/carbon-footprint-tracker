# Carbon Footprint Tracker

\!

-----

## Project Overview

This is a full-stack web application that helps users estimate their personal carbon footprint from daily activities. The project demonstrates the ability to build a complete application from scratch, handling both frontend and backend logic, and integrating with a real-world public API.

## Features

  - **Multi-Category Input**: Calculates the carbon footprint based on electricity, transport, and food consumption.
  - **Real-Time Data**: The backend fetches live, real-time carbon intensity data from the Electricity Maps API for the `IN-SO` zone.
  - **Data Visualization**: Presents a visual breakdown of the carbon footprint by category using a dynamic pie chart.
  - **Client-Server Architecture**: The project is architected with a decoupled frontend (Vue.js) and backend (Node.js/Express.js) for clean code and scalability.

-----

## Technologies Used

### Frontend

  - **Vue.js**: The progressive framework used for the user interface.
  - **Vite**: A fast build tool for a quick development experience.
  - **Axios**: A library for making API calls from the frontend to the backend.
  - **Vue-Chartjs**: A library to easily add data visualizations.

### Backend

  - **Node.js**: The JavaScript runtime for the server-side logic.
  - **Express.js**: A web framework for creating a RESTful API.
  - **Electricity Maps API**: The public API that provides real-world carbon emission data.

### Tools

  - **Git & GitHub**: For version control and project hosting.
  - **VS Code**: The primary code editor.

-----

## How to Run Locally

To run this project on your machine, follow these steps:

### 1\. Backend Setup

Navigate to the `server` directory and install the dependencies:

```bash
npm install
```

Then, start the server:

```bash
npm start
```

### 2\. Frontend Setup

In a new terminal, navigate to the `client` directory and install the dependencies:

```bash
npm install
```
Then, start the frontend development server:
```bash
npm run dev
```
Project Screenshots
Here are the screenshots of your completed project.
1. The Input Interface
This is the main page of your application. The user can input values for electricity, transport, and food consumption.
<img width="1919" height="984" alt="image" src="https://github.com/user-attachments/assets/3f6bf732-5d85-4f95-883b-cc2c0faef7fc" />


2. The Final Output with Pie Chart
After the user clicks "Calculate," the application displays the total carbon footprint and a pie chart that visually breaks down the footprint by category.
<img width="1759" height="999" alt="image" src="https://github.com/user-attachments/assets/b63af869-5c7a-4684-8512-355c1bffed6f" />
