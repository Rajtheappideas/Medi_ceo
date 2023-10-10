import React, { useEffect, useRef } from "react";
import { FiLogOut, FiUsers, FiEdit } from "react-icons/fi";
import { RiBarChartLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { BsShieldCheck } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import apiManagement from "../assets/images/code-1 1.png";
import cms from "../assets/images/icon.png";
import sourceManagement from "../assets/images/document-filter 1.png";
import tw from "tailwind-styled-components";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../redux/AuthSlice";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { handleLogoutFromAllTabs } from "../redux/GlobalStates";

const Sidebar = ({
  setActiveComponent,
  activeComponent,
  setOpenSidebar,
  openSidebar,
}) => {
  const { user } = useSelector((state) => state.root.auth);

  const sidebarRef = useRef(null);

  const dispatch = useDispatch();

  const { t } = useTranslation();

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

  const handlelogout = () => {
    toast.loading("Logout...");
    setTimeout(() => {
      toast.remove();
      dispatch(handleLogout());
      dispatch(handleLogoutFromAllTabs());
    }, 2000);
  };

  return (
    <div
      className={`scrollbar border-r-2 ${
        openSidebar ? "xl:w-[20%] lg:w-[25%]" : "lg:w-[10%]"
      } lg:fixed bg-white h-auto capitalize`}
    >
      {/* for desktop */}
      <div
        className={`min-h-screen w-full xl:px-4 lg:px-2 lg:block hidden py-3`}
      >
        <p
          onClick={() => setOpenSidebar(!openSidebar)}
          className={`cursor-pointer my-3 mt-5 flex items-center  ${
            openSidebar ? "justify-between" : "justify-center ml-7"
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
        <div className="w-full  text-sm flex flex-col min-h-[85vh] max-h-[85vh] justify-between">
          <ul className="w-full space-y-3">
            {/* <List
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
          </List> */}
            <List
              onClick={() => setActiveComponent("content_list")}
              className={`items-start ${
                activeComponent === "content_list" && "bg-gray-200 rounded-md"
              } ${openSidebar ? "justify-start" : "justify-center"} `}
            >
              <img
                src={cms}
                alt="cms"
                className="h-7 w-7 text-textColor object-contain object-center"
              />{" "}
              {openSidebar && (
                <span className="block">{t("Content List")}</span>
              )}
            </List>
            <List
              onClick={() => setActiveComponent("sandbox")}
              className={`items-start ${
                activeComponent === "sandbox" && "bg-gray-200 rounded-md"
              } ${openSidebar ? "justify-start" : "justify-center"} `}
            >
              <FiEdit size={25} />
              {openSidebar && (
                <span className="block">{t("Sandbox Mode")}</span>
              )}
            </List>
            <List
              onClick={() => setActiveComponent("source_management")}
              className={`${
                activeComponent === "source_management" &&
                "bg-gray-200 rounded-md"
              } ${openSidebar ? "justify-start" : "justify-center"} `}
            >
              <img
                src={sourceManagement}
                alt="source management"
                className="h-7 w-7 text-textColor object-contain object-center"
              />{" "}
              {openSidebar && <span>{t("Source Management")}</span>}
            </List>
          </ul>
          <ul>
            <List
              className={` ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              {openSidebar && (
                <p>
                  <span className="block">
                    {user?.first_name} {user?.last_name}
                  </span>
                  <span className="block text-gray-500">{user?.email}</span>
                </p>
              )}
              {openSidebar && (
                <FiLogOut
                  onClick={() => handlelogout()}
                  size={20}
                  className="ml-auto"
                />
              )}
            </List>
          </ul>
        </div>
      </div>
      {/* for tablet / mobile */}
      <div
        ref={sidebarRef}
        className={`min-h-screen fixed scrollbar overflow-y-scroll max-h-screen md:w-1/2 w-4/5 z-50 bg-white ${
          openSidebar ? "translate-x-0" : "-translate-x-[100%]"
        } md:px-4 px-2 transition duration-300 ease-in-out lg:hidden block py-3 shadow-xl`}
      >
        <p className="my-2 font-semibold">
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
        <div className="w-full space-y-3 max-h-screen min-h-[85vh] flex flex-col justify-between">
          {/* <List
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
        </List> */}
          <ul className="space-y-3">
            <List
              onClick={() => {
                setActiveComponent("content_list");
                setOpenSidebar(false);
              }}
              className={`items-start ${
                activeComponent === "content_list" && "bg-gray-200 rounded-md"
              }  ${openSidebar ? "justify-start" : "justify-center"} `}
            >
              <img
                src={cms}
                alt="cms"
                className="h-7 w-7 text-textColor object-contain object-center"
              />{" "}
              {openSidebar && (
                <span className="block">{t("Content List")}</span>
              )}
            </List>
            <List
              onClick={() => {
                setActiveComponent("sandbox");
                setOpenSidebar(false);
              }}
              className={`items-start ${
                activeComponent === "sandbox" && "bg-gray-200 rounded-md"
              } ${openSidebar ? "justify-start" : "justify-center"} `}
            >
              <FiEdit size={25} />
              {openSidebar && (
                <span className="block">{t("Sandbox Mode")}</span>
              )}
            </List>
            <List
              onClick={() => {
                setActiveComponent("source_management");
                setOpenSidebar(false);
              }}
              className={`${
                activeComponent === "source_management" &&
                "bg-gray-200 rounded-md"
              } ${openSidebar ? "justify-start" : "justify-center"} `}
            >
              <img
                src={sourceManagement}
                alt="source management"
                className="h-7 w-7 text-textColor object-contain object-center"
              />{" "}
              {openSidebar && <span>{t("Source Management")}</span>}
            </List>
          </ul>
          <ul className="mt-auto">
            <List
              onClick={() => {}}
              className={` ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              {openSidebar && (
                <p>
                  <span className="block">
                    {user?.first_name} {user?.last_name}
                  </span>
                  <span className="block text-gray-500">{user?.email}</span>
                </p>
              )}
              {openSidebar && (
                <FiLogOut
                  onClick={() => handlelogout()}
                  size={20}
                  className="ml-auto"
                />
              )}
            </List>
          </ul>
        </div>
      </div>
      {openSidebar && (
        <div className="fixed lg:hidden block z-30 inset-0 bg-black bg-opacity-20 backdrop-blur-sm max-w-[100%] h-full overflow-hidden" />
      )}
    </div>
  );
};

export default Sidebar;

const List = tw.li`
flex items-center text-black xl:px-2 px-1 py-1 rounded-md xl:gap-x-3 gap-x-4 w-full font-medium cursor-pointer
`;
