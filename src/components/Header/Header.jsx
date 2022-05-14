import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Header = () => {
  const { theme, themeDispatch } = useContext(ThemeContext);

  const handleLightMode = () => {
    themeDispatch({
      type: "LIGHT_MODE",
    });
  };
  const handleDarkMode = () => {
    themeDispatch({
      type: "DARK_MODE",
    });
  };
  return (
    <header
      className={`${theme.lightMode && "bg-white border-gray-200"} ${
        theme.darkMode && "bg-gray-900 text-white border-none"
      } w-screen h-16 border-b  flex flex-row items-center justify-between `}
    >
      <section className="mx-4 text-xl font-bold">MC</section>
      <section className="w-2/5  h-full flex flex-row items-center ">
        <ul className="w-full h-full flex flex-row items-center justify-center">
          <li className="mx-4">
            <Link to="./">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="mx-4">
            <Link to="/stack">Stack</Link>
          </li>
          <li className="mx-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-4 text-2xl hover:cursor-pointer p-1 rounded-md hover:bg-black hover:text-white">
            <a href="https://github.com/mcdzo">
              <FaGithub />
            </a>{" "}
          </li>
          <li className="mx-4 text-2xl p-1 rounded-md hover:cursor-pointer hover:bg-sky-700 hover:text-white">
            <a href="https://www.linkedin.com/in/maximiliano-cardozo-544681231">
              <TiSocialLinkedin />
            </a>
          </li>
          <li className=" mx-2 flex flex-row items-center justify-evenly ">
            {theme.darkMode && (
              <button className="px-2 py-2 " onClick={handleLightMode}>
                <FiSun />
              </button>
            )}
            {theme.lightMode && (
              <button className="px-2 py-2 " onClick={handleDarkMode}>
                <FiMoon />
              </button>
            )}
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
