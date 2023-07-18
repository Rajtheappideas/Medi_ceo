import React, { useEffect, useRef } from "react";
import { FiLogOut, FiUsers } from "react-icons/fi";
import { RiBarChartLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { BsShieldCheck } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import apiManagement from "../assets/images/code-1 1.png";
import cms from "../assets/images/objects.png";
import sourceManagement from "../assets/images/document-filter 1.png";
import tw from "tailwind-styled-components";

const Sidebar = ({
  setActiveComponent,
  activeComponent,
  setOpenSidebar,
  openSidebar,
}) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (window.screen.width < 1024) {
      const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event?.target)) {
          setOpenSidebar(false);
        }
      };
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
        document.removeEventListener("resize", () => {});
      };
    }
  }, [handleClickOutside, window.screen.width]);

  function handleClickOutside() {
    setOpenSidebar(false);
  }

  return (
    <div
      className={` overflow-y-scroll scrollbar ${
        openSidebar ? "xl:w-[20%] lg:w-1/5" : "lg:w-[10%]"
      } h-auto capitalize`}
    >
      {/* for desktop */}
      <div
        className={`min-h-screen w-full xl:px-6 lg:px-3 lg:block hidden py-3`}
      >
        <p
          onClick={() => setOpenSidebar(!openSidebar)}
          className={`cursor-pointer my-3 mt-5 flex items-center  ${
            openSidebar ? "justify-between" : "justify-end"
          } gap-x-3 py-1 xl:text-4xl text-2xl font-semibold text-center`}
        >
          <img
            src={require("../assets/images/logo.png")}
            className="w-fit h-fit object-contain object-center"
          />
          <AiOutlineRight
            size={20}
            className={`inline-block ${
              openSidebar ? "rotate-180" : "rotate-0"
            } transition`}
          />
        </p>
        <div className="w-full  text-sm flex flex-col h-[80vh] justify-between">
          <ul className="w-full space-y-3">
            <List
              onClick={() => setActiveComponent("dashboard")}
              className={` ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              <RiBarChartLine className={`text-textColor`} size={25} />
              {openSidebar && <span>Dashboard</span>}
            </List>
            <List
              onClick={() => setActiveComponent("user_management")}
              className={` ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              <FiUsers className={`text-textColor`} size={25} />
              {openSidebar && <span>Users Management</span>}
            </List>
            <List
              onClick={() => setActiveComponent("api_management")}
              className={` ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              <img
                src={apiManagement}
                alt="api management"
                className="h-fit w-fit text-textColor object-contain object-center"
              />
              {openSidebar && <span>Api Management</span>}
            </List>
            <List
              onClick={() => setActiveComponent("mail_service")}
              className={` ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              <IoMailOutline className={`text-textColor`} size={25} />
              {openSidebar && <span>Mail Service</span>}
            </List>
            <List
              onClick={() => setActiveComponent("permission_management")}
              className={` ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              <BsShieldCheck className={`text-textColor`} size={25} />
              {openSidebar && <span>Permission Management</span>}
            </List>
            <List
              onClick={() => setActiveComponent("cms")}
              className={`items-start ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              <img
                src={cms}
                alt="cms"
                className="h-7 w-7 text-textColor object-contain object-center"
              />{" "}
              {openSidebar && (
                <p className="space-y-3">
                  <span className="block">CMS</span>
                  <span className="block">Content List</span>
                  <span className="block">Sandbox Mode</span>
                </p>
              )}
            </List>
            <List
              onClick={() => setActiveComponent("source_management")}
              className={` ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              <img
                src={sourceManagement}
                alt="source management"
                className="h-7 w-7 text-textColor object-contain object-center"
              />{" "}
              {openSidebar && <span>Source Management</span>}
            </List>
          </ul>
          <ul>
            <List
              onClick={() => setActiveComponent("source_management")}
              className={` ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              <span className="bg-gray-200 rounded-full w-9 h-9"></span>
              {openSidebar && (
                <p>
                  <span className="block">John Doe</span>
                  <span className="block text-gray-500">example@xyz.com</span>
                </p>
              )}
              {openSidebar && <FiLogOut size={20} />}
            </List>
          </ul>
        </div>
      </div>
      {/* for tablet / mobile */}
      <div
        ref={sidebarRef}
        className={`min-h-screen absolute scrollbar overflow-y-scroll max-h-screen md:w-1/2 w-4/5 z-50 bg-white ${
          openSidebar ? "translate-x-0" : "-translate-x-[100%]"
        } px-4 transition duration-300 ease-in-out lg:hidden block py-3 shadow-xl`}
      >
        <p className="my-3 xl:text-4xl text-2xl font-semibold">
          <img
            src={require("../assets/images/logo.png")}
            className="w-fit h-fit object-contain object-center inline-block"
          />
          <HiOutlineXMark
            onClick={() => setOpenSidebar(false)}
            role="button"
            size={25}
            className="inline-block float-right"
          />
        </p>
        <ul className="w-full space-y-3 max-h-screen overflow-y-scroll">
          <List
            onClick={() => setActiveComponent("dashboard")}
            className={` ${openSidebar ? "justify-start" : "justify-center"} `}
          >
            <RiBarChartLine className={`text-textColor`} size={25} />
            {openSidebar && <span>Dashboard</span>}
          </List>
          <List
            onClick={() => setActiveComponent("user_management")}
            className={` ${openSidebar ? "justify-start" : "justify-center"} `}
          >
            <FiUsers className={`text-textColor`} size={25} />
            {openSidebar && <span>Users Management</span>}
          </List>
          <List
            onClick={() => setActiveComponent("api_management")}
            className={` ${openSidebar ? "justify-start" : "justify-center"} `}
          >
            <img
              src={apiManagement}
              alt="api management"
              className="h-fit w-fit text-textColor object-contain object-center"
            />
            {openSidebar && <span>Api Management</span>}
          </List>
          <List
            onClick={() => setActiveComponent("mail_service")}
            className={` ${openSidebar ? "justify-start" : "justify-center"} `}
          >
            <IoMailOutline className={`text-textColor`} size={25} />
            {openSidebar && <span>Mail Service</span>}
          </List>
          <List
            onClick={() => setActiveComponent("permission_management")}
            className={` ${openSidebar ? "justify-start" : "justify-center"} `}
          >
            <BsShieldCheck className={`text-textColor`} size={25} />
            {openSidebar && <span>Permission Management</span>}
          </List>
          <List
            onClick={() => setActiveComponent("cms")}
            className={`items-start ${
              openSidebar ? "justify-start" : "justify-center"
            } `}
          >
            <img
              src={cms}
              alt="cms"
              className="h-7 w-7 text-textColor object-contain object-center"
            />{" "}
            {openSidebar && (
              <p className="space-y-3">
                <span className="block">CMS</span>
                <span className="block">Content List</span>
                <span className="block">Sandbox Mode</span>
              </p>
            )}
          </List>
          <List
            onClick={() => setActiveComponent("source_management")}
            className={` ${openSidebar ? "justify-start" : "justify-center"} `}
          >
            <img
              src={sourceManagement}
              alt="source management"
              className="h-7 w-7 text-textColor object-contain object-center"
            />{" "}
            {openSidebar && <span>Source Management</span>}
          </List>
          <List
            onClick={() => setActiveComponent("source_management")}
            className={` ${openSidebar ? "justify-start" : "justify-center"} `}
          >
            <span className="bg-gray-200 rounded-full w-9 h-9"></span>
            {openSidebar && (
              <p>
                <span className="block">John Doe</span>
                <span className="block text-gray-500">example@xyz.com</span>
              </p>
            )}
            {openSidebar && <FiLogOut size={20} className="ml-auto" />}
          </List>
        </ul>
      </div>
      {openSidebar && (
        <div className="absolute lg:hidden block z-30 inset-0 bg-black bg-opacity-20 backdrop-blur-sm max-w-[100%] h-full overflow-hidden" />
      )}
    </div>
  );
};

export default Sidebar;

const List = tw.li`
flex items-center text-black xl:px-2 px-1 py-1 rounded-md xl:gap-x-5 gap-x-2 w-full font-medium cursor-pointer
`;