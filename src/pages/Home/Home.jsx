import "../Home/Home.css";
import profilePic from "../../assets/img/profile.jpg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Home = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`${theme.lightMode && "bg-white border-gray-200"} ${
        theme.darkMode && "bg-gray-900 text-white border-none"
      }bg-gray-500 w-screen h-screen flex flex-col justify-start items-center`}
    >
      <section className="w-3/4 h-3/4 flex flex-col items-center justify-center p-8 mt-6">
        <div className="w-full h-3/5 flex flex-row items-center justify-center ">
          <div className="w-36 h-36 mx-6">
            <img
              className="bg-auto rounded-full w-full h-full border-4 border-emerald-500"
              src={profilePic}
              alt="profile-picture"
            />
          </div>
          <div className="w-80 h-full mx-6 text-xl flex flex-col justify-center items-center">
            <span className="w-full text-3xl font-bold my-4">
              Maximiliano Cardozo
            </span>
            <span className="typewriter text-xl">
              🚀 💻 Full Stack JS Developer
            </span>
            <span
              className={` ${theme.lightMode && "text-gray-800"} ${
                theme.darkMode && "text-slate-300"
              } text-sm mt-4 `}
            >
              maximilianocardozo710@gmail.com
            </span>
            <span
              className={` ${theme.lightMode && "text-gray-800"} ${
                theme.darkMode && "text-slate-300"
              } text-sm mt-4 `}
            >
              Rosario, Santa Fe. Argentina
            </span>
          </div>
        </div>
        <div className="w-3/5 h-56">
          <p className="text-xl">
            <span className="text-xl font-bold">Hi! I'm Max</span>, i am a web
            developer, passionate about technology and software development.
            Always trying to learn something new and grow, using my skills and
            knowledge doing my best in every project and challenge.
          </p>
        </div>
        <div className="w-2/5">
          <button
            onClick={() => navigate("/projects")}
            className={`${
              theme.lightMode &&
              "bg-white text-black border-black hover:bg-black hover:text-white"
            } ${
              theme.darkMode &&
              "bg-orange-500 text-white border-orange-500 hover:bg-orange-400 hover:text-white"
            } text-xl font-semibold px-6 py-4 border-2  rounded-xl  hover:cursor-pointer`}
          >
            See some of my projects!
          </button>
        </div>
      </section>
    </section>
  );
};

export default Home;
