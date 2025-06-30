import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PushToProdLogo from "../assets/push-to-prod-small.png";

export default function Header({ user }) {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full h-32 bg-headerGray fixed top-0 left-0 z-50 flex items-center justify-between px-6 shadow-sm">
      <img
        // TODO: Can add link to client logged-out site
        // onClick={() => {
        //   navigate("https://www.client-logged-out-site.com/");
        //   setDropdownOpen(false);
        // }}
        src={PushToProdLogo}
        alt="Push to Prod, LLC Logo"
        className="h-12"
      />
      <div className="flex items-center gap-16 ml-auto text-3xl font-bold">
        {/* User Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            // className="text-lg bg-sidebar hover:bg-sidebarHighlight text-white px-4 py-1 rounded font-semibold"
            // TODO: Decide if I want the rounded corners or not
            className="text-lg bg-sidebarHighlight hover:bg-sidebarHighlightText text-black hover:text-white px-4 py-1 font-semibold"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            {user?.email || "User"}
          </button>

          {dropdownOpen && (
            // <div className="text-lg absolute left-0 mt-2 min-w-full bg-white border border-gray-200 rounded shadow-md z-50">
            // TODO: Decide if I want the rounded corners or not
            <div className="text-lg absolute mt-2 bg-white border min-w-half border-gray-200 shadow-md z-50">
              <button
                className="w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => {
                  navigate("/profile");
                  setDropdownOpen(false);
                }}
              >
                Profile
              </button>
              <button
                className="w-full px-4 py-2 text-red-600 hover:bg-gray-100"
                onClick={() => {
                  navigate("/logout");
                  setDropdownOpen(false);
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
