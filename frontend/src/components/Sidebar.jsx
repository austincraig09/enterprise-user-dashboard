import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  serviceOptions,
  menuOneItems,
  menuTwoItems,
} from "../data/navigationData";

export default function Sidebar() {
  const hoverTimeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [openSection, setOpenSection] = useState(() => {
    if (location.pathname.startsWith("/services")) return "services";
    if (location.pathname.startsWith("/menuOne")) return "menuOne";
    if (location.pathname.startsWith("/menuTwo")) return "menuTwo";
    return null;
  });

  const isDashboardActive = location.pathname === "/dashboard";
  const isServicesActive = location.pathname.startsWith("/services");
  const isMenuOneActive = location.pathname.startsWith("/menuOne");
  const isMenuTwoActive = location.pathname.startsWith("/menuTwo");

  useEffect(() => {
    if (
      location.pathname === "/dashboard" ||
      location.pathname === "/profile"
    ) {
      setOpenSection(null);
    }
  }, [location.pathname]);

  const handleNavClick = (base, label) => {
    const route = label.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const fullPath = `/${base}/${route}`;
    if (location.pathname === fullPath) return;
    navigate(fullPath);
    setOpenSection(null);
  };

  const renderItems = (items, basePath) =>
    items.map((item, index) => {
      const slug = item.toLowerCase().replace(/[^a-z0-9]/g, "-");
      const path = `/${basePath}/${slug}`;
      const isActive = location.pathname === path;

      return (
        <div
          key={index}
          onClick={() => handleNavClick(basePath, item)}
          // className={`ml-4 my-1 px-2 py-1 text-base rounded cursor-pointer transition font-semibold
          // TODO: Decide if I want the rounded corners or not
          className={`ml-4 my-1 px-2 py-1 text-base cursor-pointer transition font-semibold
            ${
              isActive
                ? "bg-sidebarHighlight text-black"
                : "hover:bg-sidebarHighlight hover:text-black"
            }`}
        >
          {item}
        </div>
      );
    });

  return (
    <div className="w-64 fixed top-32 left-0 h-[calc(100vh-6rem)] bg-sidebar font-sans flex flex-col overflow-y-auto z-40">
      <div
        onClick={() => navigate("/dashboard")}
        // TODO: Decide if I want a highlight while selected
        // className={`text-2xl font-bold text-center py-3 cursor-pointer transition border-b border-t border-white z-10
        // TODO: Decide if I want a border
        className={`text-2xl font-bold text-center py-3 cursor-pointer transition z-10 
          ${
            isDashboardActive
              ? "bg-sidebarHighlight text-black"
              : "hover:bg-sidebarHighlight hover:text-black"
          }`}
      >
        Home
      </div>
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-20">
        {/* Home Button Block */}
        {/* <div
          className="relative"
          onMouseEnter={() => {
            clearTimeout(hoverTimeoutRef.current);
            setOpenSection("services");
          }}
          onMouseLeave={() => {
            if (!isDashboardActive) {
              hoverTimeoutRef.current = setTimeout(() => {
                setOpenSection(null);
              }, 700);
            }
          }}
        >
          <div
            className={`text-xl font-bold text-center py-3 transition 
    ${
      isDashboardActive
        ? "bg-sidebarHighlight text-black"
        : "hover:bg-sidebarHighlight hover:text-black"
    }`}
            onClick={() => navigate("/dashboard")}
          >
            Home
          </div>
        </div> */}
        {/* -----------------------------  */}
        {/* -----------------------------  */}
        {/* -----------------------------  */}
        {/* TODO: Look into getting rid of the 'Services' dropdown, and display menu options in static list */}
        {/* -----------------------------  */}
        {/* -----------------------------  */}
        {/* -----------------------------  */}
        {/* Services Block */}
        <div
          className="relative"
          onMouseEnter={() => {
            clearTimeout(hoverTimeoutRef.current);
            setOpenSection("services");
          }}
          onMouseLeave={() => {
            if (!isServicesActive) {
              hoverTimeoutRef.current = setTimeout(() => {
                setOpenSection(null);
              }, 700);
            }
          }}
        >
          <div
            className={`text-lg font-semibold cursor-pointer px-2 py-3 transition 
    ${
      isServicesActive
        ? "bg-sidebarHighlight text-black"
        : "hover:bg-sidebarHighlight hover:text-black"
    }`}
            onClick={() => {
              const slug = serviceOptions[0]
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "-");
              navigate(`/services/${slug}`);
              setOpenSection(null);
            }}
          >
            {openSection === "services" || isServicesActive
              ? "▾ Services"
              : "▸ Services"}
          </div>

          {(openSection === "services" || isServicesActive) && (
            <div className="mt-1 transition-all duration-500 ease-in-out">
              {renderItems(serviceOptions, "services")}
            </div>
          )}
        </div>
        {/* Menu Nav One Block */}
        <div
          className="relative"
          onMouseEnter={() => {
            clearTimeout(hoverTimeoutRef.current);
            setOpenSection("menuOne");
          }}
          onMouseLeave={() => {
            if (!isMenuOneActive) {
              hoverTimeoutRef.current = setTimeout(() => {
                setOpenSection(null);
              }, 700);
            }
          }}
        >
          <div
            className={`text-lg font-semibold cursor-pointer px-2 py-3 transition ${
              isMenuOneActive
                ? "bg-sidebarHighlight text-black"
                : "hover:bg-sidebarHighlight hover:text-black"
            }`}
            onClick={() => {
              const slug = menuOneItems[0]
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "-");
              navigate(`/menuOne/${slug}`);
              setOpenSection(null);
            }}
          >
            {openSection === "menuOne" || isMenuOneActive
              ? "▾ Menu Group One"
              : "▸ Menu Group One"}
          </div>

          {(openSection === "menuOne" || isMenuOneActive) && (
            <div className="mt-1 transition-all duration-500 ease-in-out">
              {renderItems(menuOneItems, "menuOne")}
            </div>
          )}
        </div>

        {/* Menu Nav Two BlockBlock */}
        <div
          className="relative mt-4"
          onMouseEnter={() => {
            clearTimeout(hoverTimeoutRef.current);
            setOpenSection("menuTwo");
          }}
          onMouseLeave={() => {
            if (!isMenuTwoActive) {
              hoverTimeoutRef.current = setTimeout(() => {
                setOpenSection(null);
              }, 700);
            }
          }}
        >
          <div
            className={`text-lg font-semibold cursor-pointer px-2 py-3 transition ${
              isMenuTwoActive
                ? "bg-sidebarHighlight text-black"
                : "hover:bg-sidebarHighlight hover:text-black"
            }`}
            onClick={() => {
              const slug = menuTwoItems[0]
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "-");
              navigate(`/menuTwo/${slug}`);
              setOpenSection(null);
            }}
          >
            {openSection === "menuTwo" || isMenuTwoActive
              ? "▾ Menu Group Two"
              : "▸ Menu Group Two"}
          </div>

          {(openSection === "menuTwo" || isMenuTwoActive) && (
            <div className="mt-1 transition-all duration-500 ease-in-out">
              {renderItems(menuTwoItems, "menuTwo")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
