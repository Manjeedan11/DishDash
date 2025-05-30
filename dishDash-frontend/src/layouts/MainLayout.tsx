import Footer from "@/components/standalone/Footer";
import NavBar from "@/components/standalone/NavBar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
