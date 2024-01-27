import Footer from "@components/layout/Footer";
import { Outlet } from "react-router-dom";

const LayoutDefault = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutDefault;
