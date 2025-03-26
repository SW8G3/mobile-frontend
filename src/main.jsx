import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import SearchPage from './SearchPage.jsx';
import UserView from './UserView.jsx';
import NavigationView from './NavigationView.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/navigation" element={<NavigationView />} />
      <Route path="/directions" element={<UserView />} /> {/* Admin View */}
    </Routes>
    </BrowserRouter>
  </StrictMode>,
);
