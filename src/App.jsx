import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Aside from "./pages/Aside";
import MayLike from "./components/MayLike";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen">
        <Header />
      </div>
      <div className=" md:px-5 ">
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
