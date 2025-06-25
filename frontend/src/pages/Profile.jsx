import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Update failed");

      toast.success("Profile updated!");
      setIsEditingEmail(false);
      setIsEditingPassword(false);
      setPassword("");
    } catch (err) {
      toast.error(`${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <form onSubmit={handleUpdate} className="space-y-6">
        {/* Email Field */}
        <div className="text-left">
          <label className="block font-semibold mb-1">Email</label>
          <div className="flex gap-2 items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!isEditingEmail}
              required
              className={`w-full px-3 py-2 border rounded ${
                isEditingEmail ? "bg-white" : "bg-gray-200"
              }`}
            />
            {!isEditingEmail && (
              <button
                type="button"
                onClick={() => setIsEditingEmail(true)}
                className="text-sm text-blue-600 underline"
              >
                Change
              </button>
            )}
          </div>
        </div>

        {/* Password Field */}
        <div className="text-left">
          <label className="block font-semibold mb-1">Password</label>
          {isEditingPassword ? (
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="New password"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsEditingPassword(true)}
              className="text-sm text-blue-600 underline"
            >
              Change password
            </button>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-sidebarHighlight text-white font-semibold py-2 px-4 rounded hover:bg-accent transition"
          onClick={() => navigate("/dashboard")}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}
