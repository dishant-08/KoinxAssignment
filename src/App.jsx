import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Aside from "./pages/Aside";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row ">
          <Main />
          <aside>
            {" "}
            <Aside />{" "}
          </aside>
        </div>
        <div className=" hidden md:block bg-blue-600 ">You May Also Like </div>
      </div>
    </>
  );
}

export default App;
