import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext'
import { AppProvider } from './contexts/AppContext'
import App from './components/App/App';

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

