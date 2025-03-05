Read Me – Book Search App

Deployed at https://readmebooks.netlify.app/search
Overview

Read Me is a mobile-first book search application that allows users to discover books using the Google Books API and save favorites for easy access. Built with React, state management, and Tailwind CSS, it provides a seamless and modern user experience.

Features
	•	Search for books by title, author, or keywords using the    Google Books API
	•	Save favorite books to revisit later
	•	State management for efficient app performance
	•	Component-based architecture for modularity and reusability
	•	Tailwind CSS for clean and responsive styling
	•	Mobile-first design, optimized for smaller screens

Tech Stack
	•	Frontend: React (functional components and hooks)
	•	State Management: useState, useReducer, or Context API
	•	Styling: Tailwind CSS
	•	Data Source: Google Books API

Getting Started

Installation
	1.	Clone the repository:
git clone https://github.com/meganjar/read-me.git
cd read-me
	2.	Install dependencies:
npm install
	3.	Start the development server:
npm start
	4.	Open the app in a browser at http://localhost:3000/.

API Key Setup

To access the Google Books API, create a .env file in the project root and add:

REACT_APP_GOOGLE_BOOKS_API_KEY=your_api_key_here
Replace your_api_key_here with your actual API key.

Deployment

To deploy the project:
	1.	Build the production files:
npm run build
	2.	Deploy to a hosting platform like Vercel or Netlify.

Future Enhancements
	•	User authentication to sync favorites across devices
	•	Improved recommendation algorithm
	•	Additional filtering and sorting options
	•	Dark mode and UI refinements


