import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import MapView from "./MapView.jsx";
import StartPage from "./components/StartPage.jsx";
import NavigationSearch from "./components/NavigationSearch.jsx";
import NavigationDirections from "./NavigationDirections.jsx";
import { RouteProvider } from "./RouteContext.jsx";
import AboutPage from "./AboutPage.jsx"
import LogIn from "./LogIn.jsx";
import QrScan from "./QrScan.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} /> {/* Navigation View */}
          <Route path="/map-view" element={<MapView />} /> {/* Admin View */}
          <Route path="/qr-scan" element={<QrScan />} />
          <Route path="/destination/node/:nodeId" element={<NavigationSearch />} />{" "}
          <Route path="/destination" element={<NavigationSearch />} />{" "}
          <Route path="/directions" element={<NavigationDirections />} /> User View
          <Route path="/about" element={< AboutPage />} />
          <Route path="/login" element={< LogIn />} />
        </Routes>
      </BrowserRouter>
    </RouteProvider>
  </StrictMode>
);
