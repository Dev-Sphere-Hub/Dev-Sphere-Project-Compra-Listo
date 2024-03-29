import smallLogo from "@/assets/images/smallLogo.webp";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoIosList,
  IoIosPaper,
  BsFillQuestionCircleFill,
  TiInfoLargeOutline,
  FaRegEnvelope,
  FaRegEnvelopeOpen,
  MdCategory,
  IoMdLogOut,
} from "react-icons/all";
import { IoMdExit, BiUserCircle } from "react-icons/all";
import { decodeToken } from "@/api/auth";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const controlHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 pt-2 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          <div className="flex ml-[45%] lg:mx-7">
            <Link to="/create" className="flex">
              <img className="h-11 w-auto " src={smallLogo} alt="Logo" />
              <span className="hidden lg:block text-lg text-black font-damion ml-3 mr-2 pr-3">
                Compra LISTo
              </span>
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden pt-2">
            <button
              className={`flex flex-col w-6 h-7 border-0 bg-transparent gap-1.5 btn-animation ${
                isOpen ? "open" : ""
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="w-full bg-black h-[2px] rounded-md transition-all duration-500 origin-left btn-line"></span>
              <span className="w-full bg-black h-[2px] rounded-md transition-all duration-500 origin-left btn-line"></span>
              <span className="w-full bg-black h-[2px] rounded-md transition-all duration-500 origin-left btn-line"></span>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <ul className="flex w-full">
                  <Link to="/home">
                    <li className="flex items-center mr-3 p-3 border-b-2 border-transparent hover:border-violet-700 text-slate-900 text-body font-body transition-all duration-300">
                      <IoIosList className="mr-4 text-lg text-violet-700 hover:text-green-500" />
                      Mis listas
                    </li>
                  </Link>
                  <Link>
                    <li className="flex items-center mr-3 p-3 border-b-2 border-transparent hover:border-violet-700 group text-slate-900 text-body font-body transition-all duration-300">
                      <BiUserCircle className="mr-4 text-lg text-violet-700 group-hover:text-green-500 transition" />
                      <span className="border-b-2 border-transparent hover:border-gradient-violet-green">
                        {/* {decodeToken()?.sub} */} Perfil
                      </span>
                    </li>
                  </Link>
                  <Link to="#">
                    <li className="flex items-center mr-3 p-3 border-b-2 border-transparent hover:border-violet-700 text-slate-900 text-body font-body transition-all duration-300">
                      <TiInfoLargeOutline className="mr-4 text-lg text-violet-700 hover:text-green-500" />
                      <span className="border-b-2 border-transparent hover:border-gradient-violet-green">
                        Sobre Nosotros
                      </span>
                    </li>
                  </Link>
                  <Link to="#">
                    <li className="flex items-center mr-3 p-3 border-b-2 border-transparent hover:border-violet-700 text-slate-900 text-body font-body transition-all duration-300">
                      <FaRegEnvelope className="mr-4 text-lg text-violet-700 hover:text-green-500" />
                      <span className="border-b-2 border-transparent hover:border-gradient-violet-green">
                        Contacto
                      </span>
                    </li>
                  </Link>

                  <Link to="/">
                    <button className="flex items-center ml-4 ">
                      <IoMdLogOut className="mr-3.5 text-gray-500 hover:text-violet-700" />
                    </button>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden absolute bg-white w-full left-0 z-20`}
        >
          <div className="px-2">
            <ul className="w-full">
              <Link to="/home">
                <li className="flex items-center mr-3 p-3 rounded-full text-slate-900 hover:bg-slate-200 text-body font-body">
                  <IoIosList className="mr-3.5 text-violet-700" />
                  Mis listas
                </li>
              </Link>
              <Link>
                <li className="flex items-center mr-3 p-3 border-b-2 border-transparent hover:border-violet-700 group text-slate-900 text-body font-body transition-all duration-300">
                  <BiUserCircle className="mr-4 text-lg text-violet-700 group-hover:text-green-500 transition" />
                  <span className="border-b-2 border-transparent hover:border-gradient-violet-green">
                    {/* {decodeToken()?.sub} */} Perfil
                  </span>
                </li>
              </Link>
              <Link to="#">
                <li className="flex items-center mr-3 p-3 rounded-full text-slate-900 hover:bg-slate-200 text-body font-body">
                  <TiInfoLargeOutline className="mr-3.5 text-violet-700" />{" "}
                  Sobre Nosotros
                </li>
              </Link>
              <Link to="#">
                <li className="flex items-center mr-3 p-3 rounded-full text-slate-900 hover:bg-slate-200 text-body font-body">
                  <FaRegEnvelope className="mr-3.5 text-violet-700" /> Contacto
                </li>
              </Link>

              <Link to="/">
                <button className="flex items-center ml-4 text-gray-500 hover:text-gray-900">
                  <IoMdLogOut className="mr-3.5 text-gray-500 hover:text-violet-700" />
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
