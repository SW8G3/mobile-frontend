import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Navigation from './components/Navigation.jsx';
import DestinationSelection from './components/DestinationSelection.jsx';
import UserView from './UserView.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigation />} /> {/* Navigation View */}
      <Route path="/admin" element={<App />} /> {/* Admin View */}
      <Route path="/destination" element={<DestinationSelection />} /> {/* Destination Selection View */}
      <Route path="/user" element={<UserView />} /> {/* User View */}
    </Routes>
    </BrowserRouter>
  </StrictMode>,
);
