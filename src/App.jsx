import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import HSThemeAppearance from "./utils/HSThemeAppearance"; // Import HSThemeAppearance

function App() {
  useEffect(() => {
    HSThemeAppearance();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
