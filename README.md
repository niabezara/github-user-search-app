# GitHub User Search App

This is a GitHub User Search application built with React and TypeScript using CSS Modules for styling. The app allows users to search for GitHub users and view their profiles.

## Features

- Search for GitHub users by username
- Display user profiles including username, profile picture, bio, number of followers, and number of repositories
- Error handling for invalid usernames or failed API requests

## Technologies Used

- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- CSS Modules: A CSS approach that allows for scoped and modular CSS styles.
- GitHub REST API: The official GitHub API for retrieving user data.

## Project Structure

The project structure follows a standard React application layout:

```
github-user-search-app
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── App.tsx
│   │   ├── Card.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Subsection.tsx
│   │   └── Footer.tsx
│   ├── styles
│   │   ├── Card.module.css
│   │   ├── SearchBar.module.css
│   │   ├── Subsection.module.css
│   │   └── Footer.module.css
│   ├── services
│   │   └── githubApi.ts
│   ├── App.tsx
│   └── ...
├── ...
└── README.md


-public/: Contains images/ folder for storing images used in the project.
-src/: Contains the application's source code.
-components/: Contains  React components Card.tsx, SearchBar.tsx, Subsection.tsx, and Footer.tsx.
-styles/: Contains CSS module files for styling components, including Card.module.css, SearchBar.module.css, Subsection.module.css, and Footer.module.css.
-App.tsx: The main component that renders the application.


## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [GitHub REST API](https://docs.github.com/en/rest)
- [Create React App](https://create-react-app.dev/)
```
