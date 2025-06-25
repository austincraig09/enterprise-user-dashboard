// import { useState, useEffect, useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { finalMileItems, truckloadItems } from "../data/navigationData";

// export default function Sidebar() {
//   const hoverTimeoutRef = useRef(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [openSection, setOpenSection] = useState(() => {
//     if (location.pathname.startsWith("/truckload")) return "truckload";
//     return "final-mile";
//   });

//   const isDashboardActive = location.pathname === "/dashboard";

//   useEffect(() => {
//     if (
//       location.pathname === "/dashboard" ||
//       location.pathname === "/profile"
//     ) {
//       setOpenSection(null);
//     }
//   }, [location.pathname]);

//   const handleNavClick = (base, label) => {
//     const route = label.toLowerCase().replace(/[^a-z0-9]/g, "-");
//     const fullPath = `/${base}/${route}`;
//     if (location.pathname === fullPath) return;
//     navigate(`/${base}/${route}`);
//     setOpenSection(null);
//   };

//   const renderItems = (items, basePath) =>
//     items.map((item, index) => {
//       const slug = item.toLowerCase().replace(/[^a-z0-9]/g, "-");
//       const path = `/${basePath}/${slug}`;
//       const isActive = location.pathname === path;
//       return (
//         <div
//           key={index}
//           onClick={() => handleNavClick(basePath, item)}
//           className={`ml-4 my-1 px-2 py-1 text-base rounded cursor-pointer transition
//                 ${
//                   isActive
//                     ? "bg-sidebarHighlight font-semibold text-white"
//                     : "hover:bg-sidebarHighlight hover:text-white text-white"
//                 }`}
//         >
//           {item}
//         </div>
//       );
//     });

//   return (
//     <div className="w-64 fixed top-32 left-0 h-[calc(100vh-6rem)] bg-sidebar text-white font-sans flex flex-col overflow-y-auto z-40">
//       <div
//         onClick={() => navigate("/dashboard")}
//         className={`text-2xl font-bold text-center py-3 cursor-pointer transition hover:bg-sidebarHighlight border-b border-white/ z-10
//         ${
//           isDashboardActive
//             ? "bg-sidebarHighlight"
//             : "hover:bg-sidebarHighlight"
//         }`}
//       >
//         <div>Dashboard</div>
//       </div>

//       <div className="flex-1 overflow-y-auto px-4 pt-4 pb-20">
//         {/* Final Mile Block */}
//         <div
//           className="relative"
//           onMouseEnter={() => {
//             clearTimeout(hoverTimeoutRef.current);
//             setOpenSection("final-mile");
//           }}
//           onMouseLeave={() => {
//             hoverTimeoutRef.current = setTimeout(() => {
//               setOpenSection(null);
//             }, 200);
//           }}
//         >
//           <div
//             className="text-lg font-semibold cursor-pointer px-2 py-1 rounded transition hover:bg-sidebarHighlight"
//             onClick={() => {
//               const slug = finalMileItems[0]
//                 .toLowerCase()
//                 .replace(/[^a-z0-9]/g, "-");
//               navigate(`/final-mile/${slug}`);
//               setOpenSection(null);
//             }}
//           >
//             {openSection === "final-mile" ? "▾ Final Mile" : "▸ Final Mile"}
//           </div>

//           {openSection === "final-mile" && (
//             <div className="mt-1 transition-all duration-500 ease-in-out">
//               {renderItems(finalMileItems, "final-mile")}
//             </div>
//           )}
//         </div>

//         {/* Truckload Block */}
//         <div
//           className="relative mt-4"
//           onMouseEnter={() => {
//             clearTimeout(hoverTimeoutRef.current);
//             setOpenSection("truckload");
//           }}
//           onMouseLeave={() => {
//             hoverTimeoutRef.current = setTimeout(() => {
//               setOpenSection(null);
//             }, 200);
//           }}
//         >
//           <div
//             className="text-lg font-semibold cursor-pointer px-2 py-1 rounded transition hover:bg-sidebarHighlight"
//             onClick={() => {
//               const slug = truckloadItems[0]
//                 .toLowerCase()
//                 .replace(/[^a-z0-9]/g, "-");
//               navigate(`/truckload/${slug}`);
//               setOpenSection(null);
//             }}
//           >
//             {openSection === "truckload" ? "▾ Truckload" : "▸ Truckload"}
//           </div>

//           {openSection === "truckload" && (
//             <div className="mt-1 transition-all duration-500 ease-in-out">
//               {renderItems(truckloadItems, "truckload")}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { finalMileItems, truckloadItems } from "../data/navigationData";

export default function Sidebar() {
  const hoverTimeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [openSection, setOpenSection] = useState(() => {
    if (location.pathname.startsWith("/truckload")) return "truckload";
    if (location.pathname.startsWith("/final-mile")) return "final-mile";
    return null;
  });

  const isDashboardActive = location.pathname === "/dashboard";
  const isFinalMileActive = location.pathname.startsWith("/final-mile");
  const isTruckloadActive = location.pathname.startsWith("/truckload");

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
          className={`ml-4 my-1 px-2 py-1 text-base rounded cursor-pointer transition 
            ${
              isActive
                ? "bg-sidebarHighlight font-semibold text-white"
                : "hover:bg-sidebarHighlight hover:text-white text-white"
            }`}
        >
          {item}
        </div>
      );
    });

  return (
    <div className="w-64 fixed top-32 left-0 h-[calc(100vh-6rem)] bg-sidebar text-white font-sans flex flex-col overflow-y-auto z-40">
      <div
        onClick={() => navigate("/dashboard")}
        className={`text-2xl font-bold text-center py-3 cursor-pointer transition hover:bg-sidebarHighlight border-b border-white/ z-10 ${
          isDashboardActive ? "bg-sidebarHighlight" : ""
        }`}
      >
        <div>Dashboard</div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-20">
        {/* Final Mile Block */}
        <div
          className="relative"
          onMouseEnter={() => {
            clearTimeout(hoverTimeoutRef.current);
            setOpenSection("final-mile");
          }}
          onMouseLeave={() => {
            if (!isFinalMileActive) {
              hoverTimeoutRef.current = setTimeout(() => {
                setOpenSection(null);
              }, 700);
            }
          }}
        >
          <div
            className={`text-lg font-semibold cursor-pointer px-2 py-1 rounded transition ${
              isFinalMileActive
                ? "bg-sidebarHighlight"
                : "hover:bg-sidebarHighlight"
            }`}
            onClick={() => {
              const slug = finalMileItems[0]
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "-");
              navigate(`/final-mile/${slug}`);
              setOpenSection(null);
            }}
          >
            {openSection === "final-mile" || isFinalMileActive
              ? "▾ Final Mile"
              : "▸ Final Mile"}
          </div>

          {(openSection === "final-mile" || isFinalMileActive) && (
            <div className="mt-1 transition-all duration-500 ease-in-out">
              {renderItems(finalMileItems, "final-mile")}
            </div>
          )}
        </div>

        {/* Truckload Block */}
        <div
          className="relative mt-4"
          onMouseEnter={() => {
            clearTimeout(hoverTimeoutRef.current);
            setOpenSection("truckload");
          }}
          onMouseLeave={() => {
            if (!isTruckloadActive) {
              hoverTimeoutRef.current = setTimeout(() => {
                setOpenSection(null);
              }, 700);
            }
          }}
        >
          <div
            className={`text-lg font-semibold cursor-pointer px-2 py-1 rounded transition ${
              isTruckloadActive
                ? "bg-sidebarHighlight"
                : "hover:bg-sidebarHighlight"
            }`}
            onClick={() => {
              const slug = truckloadItems[0]
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "-");
              navigate(`/truckload/${slug}`);
              setOpenSection(null);
            }}
          >
            {openSection === "truckload" || isTruckloadActive
              ? "▾ Truckload"
              : "▸ Truckload"}
          </div>

          {(openSection === "truckload" || isTruckloadActive) && (
            <div className="mt-1 transition-all duration-500 ease-in-out">
              {renderItems(truckloadItems, "truckload")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
