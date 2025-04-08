import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "lucide-react";
import AddRecipePage from "./pages/AddRecipePage";
import FavoritesPage from "./pages/FavoritesPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

createRoot(document.getElementById("root")!).render(
  //<StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-recipes" element={<AddRecipePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
    </Routes>
  </BrowserRouter>
  //</StrictMode>
);
