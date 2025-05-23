// src/layouts/RootLayout.tsx
import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout() {
  return (
    <>
      <Toaster />
      <Outlet />
    </>
  );
}
