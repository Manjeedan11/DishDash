# DishDash

DishDash is a recipe sharing platform built using React 18 and Tailwind CSS 3.4.17. It provides a user-friendly interface for users to add, view, edit, and delete recipes, as well as manage their favorite recipes.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Why React 18 and Tailwind CSS 3.4.17 ?](#why-react-18-and-tailwind-css-3417)

## Features

- **Search and Filter**: Users can search for recipes by title or ingredients and filter them by category and dietary preferences.
- **Recipe Management**: Users can add, edit, and delete recipes.
- **Favorites**: Users can save their favorite recipes and view them in a separate section.
- **User Authentication**: Users can sign in and sign up for an account.

## Tech Stack 🛠️

**Frontend:**
- React 18 + TypeScript
- Redux Toolkit + RTK Query
- React Router v7
- Shadcn/ui Component Library
- Tailwind CSS v3.4.17
- Zod + React Hook Form

**Mock API:**
- json-server
- RESTful endpoints

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Manjeedan11/DishDash.git
   cd dishdash-frontend
   cd dishdash-mockAPI
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Running the Application

### Start the frontend:

```sh
cd dishdash-frontend
npm run dev
```

### Start the backend (Mock API):

```sh
cd dishDash-mockAPI
npm run server
```

## Why React 18 and Tailwind CSS 3.4.17?

- **React 18:**  
  React 19 is still in the canary release, and using it may cause compatibility issues with `shadcn/ui`. React 18 ensures stability and avoids these risks.

- **Tailwind CSS 3.4.17:**  
  Tailwind v4 is in canary release and may lead to dependency issues with components of `shadcn/ui`. Version 3.4.17 is stable and avoids such conflicts.

---


