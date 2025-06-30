export default function SidebarFooter({ onLogout }) {
  return (
    <div className="p-4 border-t border-white/20 bg-sidebar">
      <button
        onClick={onLogout}
        // className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold px-4 py-2 rounded transition"
        // TODO: Decide if I want the rounded corners or not
        className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold px-4 py-2 transition"
      >
        Logout
      </button>
    </div>
  );
}
