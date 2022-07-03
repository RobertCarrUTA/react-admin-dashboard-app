import React from 'react';
import ReactDOM from 'react-dom'; // Hook the React application to the real DOM

import './index.css'; // Imports all tailwind utilities
import App from './App';

// Hook our React application to the root div
ReactDOM.render(<App />, document.getElementById('root'));