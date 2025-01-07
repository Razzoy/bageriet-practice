import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/NavBar/NavBar";

export function MainLayout() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
