import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div className="p-4">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
