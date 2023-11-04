import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import HSThemeAppearance from "./utils/HSThemeAppearance"; // Import HSThemeAppearance
import FooterAll from "./components/footerAll";


function App() {
  useEffect(() => {
    HSThemeAppearance();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterAll />
    </>
  );
}

export default App;
