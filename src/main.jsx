import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./redux/store.js"
import { HashRouter as Router } from "react-router-dom";

import App from './app/App.jsx'
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/">

      <Provider store={store}> 
        <App />
      </Provider>
      
    </Router>
  </React.StrictMode>
)
