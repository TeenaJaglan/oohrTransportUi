import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthContextProvider from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import LoginPage from "./pages/Loginpage.jsx";
import SigninPage from "./pages/SigninPage.jsx";
import Navbar from "./components/Navbar.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <AuthContextProvider>
        <App />
      </AuthContextProvider>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
