import { useContext } from "react";
import { FaReact } from "react-icons/fa";
import ThemeContext from "../../context/ThemeContext";
import {
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiGit,
  SiJira
} from "react-icons/si";

const Stack = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`${theme.lightMode && "bg-white border-gray-200"} ${
        theme.darkMode && "bg-gray-900 text-white border-none"
      }w-screen h-screen flex justify-center items-center`}
    >
      <div className="w-3/4 h-2/3 flex flex-row flex-wrap items-center justify-center">
        <div
          className={`${
            theme.lightMode && "hover:border-2 hover:border-black"
          } ${
            theme.darkMode && "hover:border-2 hover:border-white"
          } w-36 h-36 hover:cursor-pointer  rounded-md flex flex-col items-center justify-center text-7xl mx-4 text-yellow-500`}
        >
          <SiJavascript />
          <span
            className={`${theme.lightMode && "text-black"} ${
              theme.darkMode && "text-white"
            } text-sm  mt-2 font-bold`}
          >
            JavaScript
          </span>
        </div>
        <div className={`${
            theme.lightMode && "hover:border-2 hover:border-black"
          } ${
            theme.darkMode && "hover:border-2 hover:border-white"
          } w-36 h-36 hover:cursor-pointer  rounded-md flex flex-col items-center justify-center text-7xl mx-4 text-sky-500`}>
          <FaReact />
          <span
            className={`${theme.lightMode && "text-black"} ${
              theme.darkMode && "text-white"
            } text-sm  mt-2 font-bold`}
          >
            React JS
          </span>
        </div>
        <div className={`${
            theme.lightMode && "hover:border-2 hover:border-black"
          } ${
            theme.darkMode && "hover:border-2 hover:border-white"
          } w-36 h-36 hover:cursor-pointer  rounded-md flex flex-col items-center justify-center text-7xl mx-4 text-green-600`}>
          <SiNodedotjs />
          <span
            className={`${theme.lightMode && "text-black"} ${
              theme.darkMode && "text-white"
            } text-sm  mt-2 font-bold`}
          >
            Node JS
          </span>
        </div>
        <div className={`${
            theme.lightMode && " text-black hover:border-2 hover:border-black"
          } ${
            theme.darkMode && "text-white hover:border-2 hover:border-white"
          } w-36 h-36 hover:cursor-pointer  rounded-md flex flex-col items-center justify-center text-7xl mx-4 `}>
          <SiExpress />
          <span
            className={`${theme.lightMode && "text-black"} ${
              theme.darkMode && "text-white"
            } text-sm  mt-2 font-bold`}
          >
            Express JS
          </span>
        </div>
        <div className={`${
            theme.lightMode && "hover:border-2 hover:border-black"
          } ${
            theme.darkMode && "hover:border-2 hover:border-white"
          } w-36 h-36 hover:cursor-pointer  rounded-md flex flex-col items-center justify-center text-7xl mx-4 text-blue-500`}>
          <SiSequelize />
          <span
            className={`${theme.lightMode && "text-black"} ${
              theme.darkMode && "text-white"
            } text-sm  mt-2 font-bold`}
          >
            Sequelize ORM
          </span>
        </div>
        <div className={`${
            theme.lightMode && "hover:border-2 hover:border-black"
          } ${
            theme.darkMode && "hover:border-2 hover:border-white"
          } w-36 h-36 hover:cursor-pointer  rounded-md flex flex-col items-center justify-center text-7xl mx-4 text-orange-500`}>
          <SiHtml5 />
          <span
            className={`${theme.lightMode && "text-black"} ${
              theme.darkMode && "text-white"
            } text-sm  mt-2 font-bold`}
          >
            Html
          </span>
        </div>
        <div className={`${
            theme.lightMode && "hover:border-2 hover:border-black"
          } ${
            theme.darkMode && "hover:border-2 hover:border-white"
          } w-36 h-36 hover:cursor-pointer  rounded-md flex flex-col items-center justify-center text-7xl mx-4 text-blue-500`}>
          <SiCss3 />
          <span
            className={`${theme.lightMode && "text-black"} ${
              theme.darkMode && "text-white"
            } text-sm  mt-2 font-bold`}
          >
            CSS
          </span>
        </div>
        <div className={`${
            theme.lightMode && "text-blue-900 hover:border-2 hover:border-black"
          } ${
            theme.darkMode && "text-blue-300 hover:border-2 hover:border-white"
          } w-36 h-36 hover:cursor-pointer  rounded-md flex flex-col items-center justify-center text-7xl mx-4 `}>
          <SiMysql />
          <span
            className={`${theme.lightMode && "text-black"} ${
              theme.darkMode && "text-white"
            } text-sm  mt-2 font-bold`}
          >
            MySQL
          </span>
        </div>
        <div className={`${
            theme.lightMode && "hover:border-2 hover:border-black"
          } ${
            theme.darkMode && "hover:border-2 hover:border-white"
          } w-36 h-36 hover:cursor-pointer  rounded-md flex flex-col items-center justify-center text-7xl mx-4 text-green-600`}>
          <SiMongodb />
          <span
            className={`${theme.lightMode && "text-black"} ${
              theme.darkMode && "text-white"
            } text-sm  mt-2 font-bold`}
          >
            Mongo DB
          </span>
        </div>
        <div className={`${
            theme.lightMode && "hover:border-2 hover:border-black"
          } ${
            theme.darkMode && "hover:border-2 hover:border-white"
          } w-36 h-36 hover:cursor-pointer  rounded-md flex flex-col items-center justify-center text-7xl mx-4 text-orange-500`}>
          <SiGit />
          <span
            className={`${theme.lightMode && "text-black"} ${
              theme.darkMode && "text-white"
            } text-sm  mt-2 font-bold`}
          >
            Git & GitHub
          </span>
        </div>
        <div className={`${
            theme.lightMode && "text-blue-700 hover:border-2 hover:border-black"
          } ${
            theme.darkMode && "text-blue-500 hover:border-2 hover:border-white"
          } w-36 h-36 hover:cursor-pointer  rounded-md flex flex-col items-center justify-center text-7xl mx-4 `}>
          <SiJira />
          <span
            className={`${theme.lightMode && "text-black"} ${
              theme.darkMode && "text-white"
            } text-sm  mt-2 font-bold`}
          >
            JIRA Software
          </span>
        </div>
      </div>
    </section>
  );
};

export default Stack;
