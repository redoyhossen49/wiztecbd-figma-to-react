import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  const hideNavbarRoutes = ["/login"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
