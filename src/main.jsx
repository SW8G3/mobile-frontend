import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import SearchPage from "./SearchPage.jsx";
import App from "./App.jsx";
import StartPage from "./components/StartPage.jsx";
import NavigationSearch from "./components/NavigationSearch.jsx";
import NavigationDirections from "./NavigationDirections.jsx";
import NavigationView from "./NavigationView.jsx";
import { RouteProvider } from "./RouteContext.jsx";
import AboutPage from "./AboutPage.jsx"
import LogIn from "./LogIn.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouteProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/searchPage" element={<SearchPage />} /> */}
          {/* <Route path="/navigation" element={<NavigationView />} /> */}
          {/*} <Route path="/directions" element={<NavigationDirections />} /> {/* Admin View */}
          <Route path="/" element={<StartPage />} /> {/* Navigation View */}
          <Route path="/admin" element={<App />} /> {/* Admin View */}
          <Route path="/destination/node/:nodeId" element={<NavigationSearch />} />{" "}
          {/* Destination Selection View */}
          <Route path="/directions" element={<NavigationDirections />} /> User View
          <Route path="/about" element={< AboutPage />} />
          <Route path="/login" element={< LogIn />} />
        </Routes>
      </BrowserRouter>
    </RouteProvider>
  </StrictMode>
);
