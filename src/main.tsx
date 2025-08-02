// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./pages/index";
import Index from './pages/index';
import './index.css'; // Assuming your global styles are here

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
