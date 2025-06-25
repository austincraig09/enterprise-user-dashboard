import Header from "./Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Layout() {
  const { logout, user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header user={user} />
      <div className="flex flex-1 overflow-hidden w-full">
        <Sidebar onLogout={logout} />
        {/* TODO: Does black text (text-black) or gray text (text-gray-800) look better? */}
        <main className="flex-1 p-6 text-black overflow-y-auto mt-32 ml-64">
          <Outlet />
        </main>
        {/* <main className="flex-1 bg-gray-100 p-6 text-gray-800 overflow-y-auto">
          <Outlet />
        </main> */}
      </div>
    </div>
  );
}
