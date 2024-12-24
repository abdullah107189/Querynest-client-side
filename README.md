# QueryNest Client-Side
QueryNest is a platform for managing and discussing queries about various products. This repository contains the client-side implementation of QueryNest built using React and Tailwind CSS.

## Purpose
The purpose of this project is to create a seamless user experience for:
- Adding, viewing, and managing product queries.
- Sharing and exploring recommendations for products.
- Encouraging community-driven discussions about product alternatives and issues.

## Live URL
[Live Demo](https://querynest-8df96.web.app/)

## Key Features
- **User Authentication**: Secure login and registration using Firebase.
- **Add Queries**: Users can add queries about specific products.
- **View Recommendations**: Displays user-submitted recommendations for products.
- **Real-Time Updates**: Updates query recommendation counts dynamically.
- **Interactive UI**: Intuitive and responsive user interface with Tailwind CSS.
- **Toast Notifications**: Provides feedback for user actions using `react-hot-toast`.

## Technologies Used
### Front-End
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **DaisyUI**: A Tailwind CSS plugin for pre-styled components.
- **Swiper**: A modern slider for featured sections.
- **SweetAlert2**: For interactive alert dialogs.
- **React Hot Toast**: Toast notifications for feedback.

### State Management and Networking
- **Axios**: For making API requests.
- **Firebase**: User authentication and hosting.

### Utilities
- **Date-Fns**: For manipulating and formatting dates.
- **LocalForage**: For managing offline storage.
- **Match Sorter**: For client-side search functionality.

## NPM Packages Used
- `axios`: ^1.7.9
- `date-fns`: ^4.1.0
- `firebase`: ^11.1.0
- `localforage`: ^1.10.0
- `lottie-react`: ^2.4.0
- `match-sorter`: ^8.0.0
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-hot-toast`: ^2.4.1
- `react-icons`: ^5.4.0
- `react-router-dom`: ^7.1.0
- `sort-by`: ^1.2.0
- `sweetalert2`: ^11.15.3
- `swiper`: ^11.1.15

## Dev Dependencies
- `@vitejs/plugin-react`
- `autoprefixer`
- `daisyui`
- `eslint` and related plugins
- `postcss`
- `tailwindcss`
- `vite`

## Contribution
Feel free to fork this repository and contribute to improve QueryNest. Submit a pull request with your changes for review.
