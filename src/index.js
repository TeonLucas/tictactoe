import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './js/app';
import './img/favicon.ico';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
