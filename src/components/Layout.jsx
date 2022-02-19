import { useState } from "react";
import { AppContext } from "./context";
import Footer from "./menues/Footer";
import Nav from "./menues/Nav";
const Layout = ({ children }) => {
  const [dark, setDark] = useState(false);
  const handleDark = () => {
    setDark(!dark);
  };
  return (
    <div
      className={`${
        dark
          ? "dark transition-all duration-700 ease-in-out"
          : "light transition-all duration-700 ease-in-out"
      } w-full transition-all duration-700 ease-in-out`}
    >
      <Nav handleDark={handleDark} dark={dark} />
      <AppContext.Provider value={{ dark }}>{children}</AppContext.Provider>
      <Footer />
    </div>
  );
};

export default Layout;
