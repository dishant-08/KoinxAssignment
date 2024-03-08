import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Aside from "./pages/Aside";
import MayLike from "./components/MayLike";
import { useParams } from "react-router-dom";
import { useNameContext } from "./context/NameContext";

function App() {
  const { name, setNameValue } = useNameContext();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("coins");
    setNameValue(name);
    // Do something with the name parameter
  }, []);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("coins");
    setNameValue(name);
    // Do something with the name parameter
  }, [name]);

  // console.log(name);
  return (
    <>
      <div className="w-screen">
        <Header />
      </div>
      <div className=" md:px-5 md:mb-20 ">
        <div className="flex md:px-10  flex-col md:gap-7 md:flex-row ">
          <Main />
          <aside>
            <Aside />
          </aside>
        </div>
      </div>
      <div className=" hidden md:block p-10 bg-white ">
        <MayLike />
      </div>
    </>
  );
}

export default App;
