import React, { useEffect, useRef } from "react";
import { FiLogOut, FiEdit } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import heirarchy from "../assets/images/hierarchy-3.png";
import environment from "../assets/images/3dcube.png";
import usermanagement from "../assets/images/user-octagon.png";
import contentmodel from "../assets/images/task-square.png";
import contentlist from "../assets/images/slider-vertical.png";
import admin from "../assets/images/element-4.svg";
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

  const sidebarList = [
    {
      title: t("admin"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M14.8275 10.3125H11.7975C10.29 10.3125 9.5625 9.615 9.5625 8.175V3.075C9.5625 1.635 10.2975 0.9375 11.7975 0.9375H14.8275C16.335 0.9375 17.0625 1.635 17.0625 3.075V8.175C17.0625 9.615 16.3275 10.3125 14.8275 10.3125ZM11.7975 2.0625C10.845 2.0625 10.6875 2.3175 10.6875 3.075V8.175C10.6875 8.9325 10.845 9.1875 11.7975 9.1875H14.8275C15.78 9.1875 15.9375 8.9325 15.9375 8.175V3.075C15.9375 2.3175 15.78 2.0625 14.8275 2.0625H11.7975Z"
            fill={activeComponent === "admin" ? "#000000" : "#6C6D6D"}
          />
          <path
            d="M14.8275 17.0625H11.7975C10.29 17.0625 9.5625 16.365 9.5625 14.925V13.575C9.5625 12.135 10.2975 11.4375 11.7975 11.4375H14.8275C16.335 11.4375 17.0625 12.135 17.0625 13.575V14.925C17.0625 16.365 16.3275 17.0625 14.8275 17.0625ZM11.7975 12.5625C10.845 12.5625 10.6875 12.8175 10.6875 13.575V14.925C10.6875 15.6825 10.845 15.9375 11.7975 15.9375H14.8275C15.78 15.9375 15.9375 15.6825 15.9375 14.925V13.575C15.9375 12.8175 15.78 12.5625 14.8275 12.5625H11.7975Z"
            fill={activeComponent === "admin" ? "#000000" : "#6C6D6D"}
          />
          <path
            d="M6.2025 17.0625H3.1725C1.665 17.0625 0.9375 16.365 0.9375 14.925V9.825C0.9375 8.385 1.6725 7.6875 3.1725 7.6875H6.2025C7.71 7.6875 8.4375 8.385 8.4375 9.825V14.925C8.4375 16.365 7.7025 17.0625 6.2025 17.0625ZM3.1725 8.8125C2.22 8.8125 2.0625 9.0675 2.0625 9.825V14.925C2.0625 15.6825 2.22 15.9375 3.1725 15.9375H6.2025C7.155 15.9375 7.3125 15.6825 7.3125 14.925V9.825C7.3125 9.0675 7.155 8.8125 6.2025 8.8125H3.1725Z"
            fill={activeComponent === "admin" ? "#000000" : "#6C6D6D"}
          />
          <path
            d="M6.2025 6.5625H3.1725C1.665 6.5625 0.9375 5.865 0.9375 4.425V3.075C0.9375 1.635 1.6725 0.9375 3.1725 0.9375H6.2025C7.71 0.9375 8.4375 1.635 8.4375 3.075V4.425C8.4375 5.865 7.7025 6.5625 6.2025 6.5625ZM3.1725 2.0625C2.22 2.0625 2.0625 2.3175 2.0625 3.075V4.425C2.0625 5.1825 2.22 5.4375 3.1725 5.4375H6.2025C7.155 5.4375 7.3125 5.1825 7.3125 4.425V3.075C7.3125 2.3175 7.155 2.0625 6.2025 2.0625H3.1725Z"
            fill={activeComponent === "admin" ? "#000000" : "#6C6D6D"}
          />
        </svg>
      ),
    },
    {
      title: t("environment"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M9.69 1.69488L14.5725 4.32738C15.1425 4.63488 15.1425 5.51238 14.5725 5.81988L9.69 8.45238C9.255 8.68488 8.745 8.68488 8.31 8.45238L3.4275 5.81988C2.8575 5.51238 2.8575 4.63488 3.4275 4.32738L8.31 1.69488C8.745 1.46238 9.255 1.46238 9.69 1.69488Z"
            stroke={activeComponent === "environment" ? "#000" : "#6C6D6D"}
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.7075 7.59726L7.245 9.86976C7.8075 10.1548 8.1675 10.7323 8.1675 11.3623V15.6523C8.1675 16.2748 7.515 16.6723 6.96 16.3948L2.4225 14.1223C1.86 13.8373 1.5 13.2598 1.5 12.6298V8.33976C1.5 7.71726 2.1525 7.31976 2.7075 7.59726Z"
            stroke={activeComponent === "environment" ? "#000" : "#6C6D6D"}
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.2924 7.59726L10.7549 9.86976C10.1924 10.1548 9.8324 10.7323 9.8324 11.3623V15.6523C9.8324 16.2748 10.4849 16.6723 11.0399 16.3948L15.5774 14.1223C16.1399 13.8373 16.4999 13.2598 16.4999 12.6298V8.33976C16.4999 7.71726 15.8474 7.31976 15.2924 7.59726Z"
            stroke={activeComponent === "environment" ? "#000" : "#6C6D6D"}
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: t("user management"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M9.00012 17.0625C8.49762 17.0625 7.98762 16.935 7.53762 16.6725L3.08262 14.1C2.18262 13.575 1.62012 12.6075 1.62012 11.565V6.43499C1.62012 5.39249 2.18262 4.42499 3.08262 3.89999L7.53762 1.3275C8.43762 0.802496 9.55512 0.802496 10.4626 1.3275L14.9176 3.89999C15.8176 4.42499 16.3801 5.39249 16.3801 6.43499V11.565C16.3801 12.6075 15.8176 13.575 14.9176 14.1L10.4626 16.6725C10.0126 16.935 9.50262 17.0625 9.00012 17.0625ZM9.00012 2.06248C8.69262 2.06248 8.37762 2.14499 8.10012 2.30249L3.64512 4.87498C3.09012 5.19748 2.74512 5.78999 2.74512 6.43499V11.565C2.74512 12.2025 3.09012 12.8025 3.64512 13.125L8.10012 15.6975C8.65512 16.02 9.34512 16.02 9.90012 15.6975L14.3551 13.125C14.9101 12.8025 15.2551 12.21 15.2551 11.565V6.43499C15.2551 5.79749 14.9101 5.19748 14.3551 4.87498L9.90012 2.30249C9.62262 2.14499 9.30762 2.06248 9.00012 2.06248Z"
            fill={activeComponent === "user management" ? "#000" : "#6C6D6D"}
          />
          <path
            d="M8.99994 8.81255C7.72494 8.81255 6.68994 7.77753 6.68994 6.50253C6.68994 5.22753 7.72494 4.19257 8.99994 4.19257C10.2749 4.19257 11.3099 5.22753 11.3099 6.50253C11.3099 7.77753 10.2749 8.81255 8.99994 8.81255ZM8.99994 5.31757C8.34744 5.31757 7.81494 5.85003 7.81494 6.50253C7.81494 7.15503 8.34744 7.68755 8.99994 7.68755C9.65244 7.68755 10.1849 7.15503 10.1849 6.50253C10.1849 5.85003 9.65244 5.31757 8.99994 5.31757Z"
            fill={activeComponent === "user management" ? "#000" : "#6C6D6D"}
          />
          <path
            d="M12 13.0576C11.6925 13.0576 11.4375 12.8026 11.4375 12.4951C11.4375 11.4601 10.3425 10.6126 9 10.6126C7.6575 10.6126 6.5625 11.4601 6.5625 12.4951C6.5625 12.8026 6.3075 13.0576 6 13.0576C5.6925 13.0576 5.4375 12.8026 5.4375 12.4951C5.4375 10.8376 7.035 9.48761 9 9.48761C10.965 9.48761 12.5625 10.8376 12.5625 12.4951C12.5625 12.8026 12.3075 13.0576 12 13.0576Z"
            fill={activeComponent === "user management" ? "#000" : "#6C6D6D"}
          />
        </svg>
      ),
    },
    {
      title: t("content model"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M9.27759 6.65991H13.2151"
            stroke={activeComponent === "content model" ? "#000" : "#6C6D6D"}
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.78491 6.65991L5.34741 7.22241L7.03491 5.53491"
            stroke={activeComponent === "content model" ? "#000" : "#6C6D6D"}
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.27759 11.9099H13.2151"
            stroke={activeComponent === "content model" ? "#000" : "#6C6D6D"}
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.78491 11.9099L5.34741 12.4724L7.03491 10.7849"
            stroke={activeComponent === "content model" ? "#000" : "#6C6D6D"}
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
            stroke={activeComponent === "content model" ? "#000" : "#6C6D6D"}
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: t("content list"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M5.25 4.5H12.75C13.215 4.5 13.6275 4.515 13.995 4.5675C15.9675 4.785 16.5 5.715 16.5 8.25V9.75C16.5 12.285 15.9675 13.215 13.995 13.4325C13.6275 13.485 13.215 13.5 12.75 13.5H5.25C4.785 13.5 4.3725 13.485 4.005 13.4325C2.0325 13.215 1.5 12.285 1.5 9.75V8.25C1.5 5.715 2.0325 4.785 4.005 4.5675C4.3725 4.515 4.785 4.5 5.25 4.5Z"
            stroke={activeComponent === "content list" ? "#000" : "#6C6D6D"}
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.7501 13.5001C13.2151 13.5001 13.6276 13.4851 13.9951 13.4326C14.0026 13.5376 14.0026 13.6351 14.0026 13.7476V14.0026C14.0026 15.9976 13.5001 16.5001 11.4976 16.5001H6.50256C4.50006 16.5001 3.99756 15.9976 3.99756 14.0026V13.7476C3.99756 13.6351 3.99756 13.5376 4.00506 13.4326C4.37256 13.4851 4.78506 13.5001 5.25006 13.5001H12.7501Z"
            stroke={activeComponent === "content list" ? "#000" : "#6C6D6D"}
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.50256 1.5H11.4976C13.5001 1.5 14.0026 2.0025 14.0026 3.9975V4.2525C14.0026 4.365 14.0026 4.4625 13.9951 4.5675C13.6276 4.515 13.2151 4.5 12.7501 4.5H5.25006C4.78506 4.5 4.37256 4.515 4.00506 4.5675C3.99756 4.4625 3.99756 4.365 3.99756 4.2525V3.9975C3.99756 2.0025 4.50006 1.5 6.50256 1.5Z"
            stroke={activeComponent === "content list" ? "#000" : "#6C6D6D"}
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: t("source"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M3.75 6C4.99264 6 6 4.99264 6 3.75C6 2.50736 4.99264 1.5 3.75 1.5C2.50736 1.5 1.5 2.50736 1.5 3.75C1.5 4.99264 2.50736 6 3.75 6Z"
            stroke={activeComponent === "source" ? "#000" : "#6C6D6D"}
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.25 11.25C15.4926 11.25 16.5 10.2426 16.5 9C16.5 7.75736 15.4926 6.75 14.25 6.75C13.0074 6.75 12 7.75736 12 9C12 10.2426 13.0074 11.25 14.25 11.25Z"
            stroke={activeComponent === "source" ? "#000" : "#6C6D6D"}
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.75 16.5C4.99264 16.5 6 15.4926 6 14.25C6 13.0074 4.99264 12 3.75 12C2.50736 12 1.5 13.0074 1.5 14.25C1.5 15.4926 2.50736 16.5 3.75 16.5Z"
            stroke={activeComponent === "source" ? "#000" : "#6C6D6D"}
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 9H6.75C5.1 9 3.75 8.25 3.75 6V12"
            stroke={activeComponent === "source" ? "#000" : "#6C6D6D"}
            stroke-width="1.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div
      className={`scrollbar border-r-2 ${
        openSidebar ? "xl:w-[20%] lg:w-[25%]" : "lg:w-[10%]"
      } lg:fixed bg-white h-auto capitalize overflow-y-scroll no_scrollbar`}
    >
      {/* for desktop */}
      <div
        className={`min-h-screen w-full xl:px-4 lg:px-2 lg:block hidden py-3`}
      >
        <div
          onClick={() => setOpenSidebar(!openSidebar)}
          className={`cursor-pointer my-3 mt-5 flex items-center  ${
            openSidebar ? "justify-between" : "justify-center ml-7"
          } gap-x-3 py-1 xl:text-4xl text-2xl font-semibold text-center`}
        >
          <div className="flex items-center gap-2">
            <img
              src={require("../assets/images/logo_mediceo.png")}
              className="w-10 h-10 text-red-400 object-contain object-center"
            />
            {openSidebar && (
              <img
                src={require("../assets/images/Mediceo.png")}
                className="w-fit h-fit object-contain object-center"
              />
            )}
          </div>
          <AiOutlineRight
            size={20}
            className={`inline-block ${
              openSidebar ? "rotate-180" : "rotate-0"
            } transition`}
          />
        </div>
        <div className="w-full  text-sm flex flex-col min-h-[85vh] max-h-[85vh] justify-between">
          <ul className="w-full space-y-5">
            {sidebarList.map((list, i) => (
              <List
                key={i}
                onClick={() => setActiveComponent(list.title)}
                className={`items-center ${
                  activeComponent === list.title && "bg-gray-200 rounded-md"
                } ${openSidebar ? "justify-start" : "justify-center"} `}
              >
                {/* svg */}
                {list.icon}

                {openSidebar && <span className="block">{list.title}</span>}
              </List>
            ))}
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
          <ul className="space-y-3">
            {sidebarList.map((list, i) => (
              <List
                key={i}
                onClick={() => {
                  setActiveComponent(list.title);
                  setOpenSidebar(false);
                }}
                className={`items-start ${
                  activeComponent === list.title && "bg-gray-200 rounded-md"
                } ${openSidebar ? "justify-start" : "justify-center"} `}
              >
                {/* svg */}
                {list.icon}
                {openSidebar && <span className="block">{list.title}</span>}
              </List>
            ))}
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
