import React from 'react'
import ReactDOM from 'react-dom/client'

import { HashRouter as Router } from "react-router-dom";

import App from './app/App.jsx'
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/">
      <App />
    </Router>
  </React.StrictMode>
)
