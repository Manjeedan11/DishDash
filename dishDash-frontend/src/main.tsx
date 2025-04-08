import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Home } from "lucide-react";

import HomePage from "./pages/HomePage";
import AddRecipePage from "./pages/AddRecipePage";
import FavoritesPage from "./pages/FavoritesPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MainLayout from "./layouts/MainLayout";

import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")!).render(
  //<StrictMode>
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-recipes" element={<AddRecipePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  //</StrictMode>
);
