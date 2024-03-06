import React, { useState } from "react";
import Button from "./commonComponents/Button";
import Logo from "../assets/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      style={{ boxShadow: "0px 0px 12px 0px #1026490F" }}
      className="p-4 bg-white  "
    >
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          {/* Your logo/svg goes here */}
          <img src={Logo} alt="" srcset="" />
        </a>
        <ul className=" items-stretch text-black space-x-3 md:flex hidden ">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
            >
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
            >
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent "
            >
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
            >
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
            >
              <Button />
            </a>
          </li>
        </ul>
        <button onClick={toggleMenu} className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <div className=" absolute top-[4rem]  right-2 ">
          {isMenuOpen && (
            <div className="xl:hidden rounded-xl bg-gray-900 text-white p-4">
              <ul className="flex flex-col space-y-4">
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
                  >
                    Link
                  </a>
                </li>
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
                  >
                    Link
                  </a>
                </li>
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2 border-transparent "
                  >
                    Link
                  </a>
                </li>
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
                  >
                    Link
                  </a>
                </li>
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
                  >
                    <Button />
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;

// import React from "react";

// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <header
//       className={`p-4 dark:bg-gray-800 dark:text-gray-100 fixed bottom-0 left-0 right-0 transition-transform duration-300 transform ${
//         isNavOpen ? "translate-y-0" : "translate-y-full"
//       }`}
//     >
//       <div className="container flex justify-between h-16 mx-auto">
//         <a
//           rel="noopener noreferrer"
//           href="#"
//           aria-label="Back to homepage"
//           className="flex items-center p-2"
//         >
//           {/* Your SVG icon */}
//         </a>
//         <ul className="items-stretch hidden space-x-3 md:flex">
//           {/* Your navigation links */}

//           <li className="flex">
//             <a
//               rel="noopener noreferrer"
//               href="#"
//               className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
//             >
//               Link
//             </a>
//           </li>
//           <li className="flex">
//             <a
//               rel="noopener noreferrer"
//               href="#"
//               className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
//             >
//               Link
//             </a>
//           </li>
//           <li className="flex">
//             <a
//               rel="noopener noreferrer"
//               href="#"
//               className="flex items-center px-4 -mb-1 border-b-2 border-transparent "
//             >
//               Link
//             </a>
//           </li>
//           <li className="flex">
//             <a
//               rel="noopener noreferrer"
//               href="#"
//               className="flex items-center px-4 -mb-1 border-b-2  border-transparent"
//             >
//               Link
//             </a>
//           </li>
//         </ul>

//         <button className="flex justify-end p-4 md:hidden" onClick={toggleNav}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             ></path>
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// };
// export default Header;
