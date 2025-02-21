import { useContext } from "react";
import assets from "../assets/assets.js";
import { QuizContext } from "../context/QuizContext.jsx";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const { isDarkMode, toggleDarkMode, navigate } = useContext(QuizContext);
  const router = useLocation();
  return (
    <div className="w-full flex justify-between items-center p-4 font-ibm">
      {/* Section for logo */}
      <section>
        <img
          className="cursor-pointer h-12"
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="logo"
        />
      </section>
      {/* Section for Nav links */}
      <section className="flex gap-6 items-center">
        <p
          onClick={() => navigate("/about")}
          className={`after:content-["_"] after:absolute after:right-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-black dark:after:bg-white relative after:transition-all after:duration-500 cursor-pointer ${
            router.pathname === "/about" ? "after:w-full" : ""
          }`}
        >
          ABOUT
        </p>
        <p
          onClick={() => navigate("/history")}
          className={`after:content-["_"] after:absolute after:right-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-black dark:after:bg-white relative after:transition-all after:duration-500 cursor-pointer ${
            router.pathname === "/history" ? "after:w-full" : ""
          }`}
        >
          HISTORY
        </p>
        <img
          className="cursor-pointer pr-2"
          src={isDarkMode ? assets.sun : assets.moon}
          onClick={toggleDarkMode}
          alt="darkmode"
        />
      </section>
    </div>
  );
};

export default Navbar;
