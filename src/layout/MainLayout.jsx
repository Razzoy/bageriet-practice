import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/NavBar/NavBar";
import { UserContextProvider } from "../context/userContext";

export function MainLayout() {
  return (
    <>
      <NavBar />
      <UserContextProvider>
        <Outlet />
      </UserContextProvider>
      <Footer />
    </>
  );
}
