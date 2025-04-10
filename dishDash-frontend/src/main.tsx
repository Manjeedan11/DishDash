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
import EditRecipePage from "./pages/EditRecipePAge";
import MainLayout from "./layouts/MainLayout";
import { ProtectedLayout } from "./layouts/ProtectedLayout";

import { BrowserRouter, Route, Routes } from "react-router";
import RecipePage from "./pages/RecipePage";

import { store } from "./lib/store";
import { Provider } from "react-redux";
import { AuthProvider } from "./contexts/AuthContext";

createRoot(document.getElementById("root")!).render(
  //<StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/signUp" element={<SignUpPage />} />

            <Route element={<ProtectedLayout />}>
              <Route path="/add-recipes" element={<AddRecipePage />} />
              <Route path="/recipe/:id/edit" element={<EditRecipePage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </Provider>
  //</StrictMode>
);
