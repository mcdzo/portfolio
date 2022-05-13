import {FaGithub} from "react-icons/fa"
import {TiSocialLinkedin} from "react-icons/ti"

const Header = () => {
  return (
    <header className="w-screen h-16 border-b border-gray-200 flex flex-row items-center justify-between">
      <section className="mx-4 text-xl font-bold">MC</section>
      <section className="w-2/5  h-full flex flex-row items-center ">
        <ul className="w-full h-full flex flex-row items-center justify-center">
          <li className="mx-4">
            <a href="./">Contact</a>
          </li>
          <li className="mx-4">
            <a href="./">Projects</a>
          </li>
          <li className="mx-4 text-2xl hover:cursor-pointer p-1 rounded-md hover:bg-black hover:text-white"><a href="https://github.com/mcdzo"><FaGithub/></a> </li>
          <li className="mx-4 text-2xl p-1 rounded-md hover:cursor-pointer hover:bg-sky-700 hover:text-white"><a href="https://github.com/mcdzo"><TiSocialLinkedin/></a> </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
