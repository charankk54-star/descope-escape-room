import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from '@descope/react-sdk';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider projectId="P3Fy0n5N7J3q9RxvP1W8eCJ4jgRY">
      <App />
    </AuthProvider>
  </React.StrictMode>
);
