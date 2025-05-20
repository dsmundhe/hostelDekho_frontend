import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import LoaderTwo from "../Loader/LoaderTwo";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
      setForm({ name: userData.name, email: userData.email, password: "" });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/");
  };

  const handleEdit = () => setEditing(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      // Name
      if (form.name !== user.name) {
        await axios.patch(
          "https://hoste-dekho-backend.vercel.app/user/editname",
          { email: user.email, newName: form.name },
          { headers: { Authorization: token } }
        );
      }

      // Email
      if (form.email !== user.email) {
        await axios.patch(
          "https://hoste-dekho-backend.vercel.app/user/editemail",
          { email: user.email, newEmail: form.email },
          { headers: { Authorization: token } }
        );
      }

      // Password
      if (form.password) {
        await axios.patch(
          "https://hoste-dekho-backend.vercel.app/user/editpassword",
          { email: form.email, newPassword: form.password },
          { headers: { Authorization: token } }
        );
      }

      const updatedUser = {
        ...user,
        name: form.name,
        email: form.email,
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setEditing(false);
      setForm({ ...form, password: "" });

      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error("Failed to update profile");
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (!confirm) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete("https://hoste-dekho-backend.vercel.app/user/delete", {
        headers: { Authorization: token },
        data: { email: user.email },
      });

      localStorage.clear();
      navigate("/");
      toast.success("Account deleted successfully");
    } catch (error) {
      toast.error("Failed to delete account");
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">{<LoaderTwo />}</p>
      </div>
    );
  }

  const { name, email, image, phone, location } = user;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-blue-100">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="relative bg-white p-10 rounded-3xl shadow-2xl w-full max-w-4xl flex flex-col items-center mt-22 p-5 mt-30">
        <div className="absolute -top-16 w-36 h-36 rounded-full overflow-hidden shadow-lg border-4 border-white">
          <img
            src={image || "https://via.placeholder.com/150"}
            alt={`${name || "User"} profile`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-20 text-center">
          {editing ? (
            <>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="border p-2 rounded w-full max-w-xs"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border p-2 rounded w-full max-w-xs mt-2"
              />
              <input
                type="password"
                name="password"
                placeholder="New Password"
                value={form.password}
                onChange={handleChange}
                className="border p-2 rounded w-full max-w-xs mt-2"
              />
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
              <p className="text-gray-500 text-sm mt-2">{email}</p>
            </>
          )}
        </div>

        <section className="mt-6 text-center max-w-xl">
          <h3 className="text-xl font-semibold text-gray-700">About</h3>
          <p className="text-gray-600 mt-2">
            Passionate about technology and learning. Always curious and eager
            to grow.
          </p>
        </section>

        <section className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Contact Info</h3>
          <p className="text-gray-600 mt-2">Phone: {phone || "Not provided"}</p>
          <p className="text-gray-600">
            Location: {location || "Not provided"}
          </p>
        </section>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          {!editing ? (
            <>
              <Button
                onClick={handleEdit}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md transition hover:bg-blue-700"
              >
                Edit Profile
              </Button>
              <Button
                onClick={handleLogout}
                className="bg-yellow-600 text-white px-6 py-3 rounded-xl shadow-md transition hover:bg-yellow-700"
              >
                Logout
              </Button>
              <Link to="/bookings">
                {" "}
                <Button className="bg-red-600 text-white px-6 py-3 rounded-xl shadow-md transition hover:bg-red-700">
                  My Bookings
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Button
                onClick={handleSave}
                className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md transition hover:bg-green-700"
              >
                Save Changes
              </Button>
              <Button
                onClick={() => {
                  setEditing(false);
                  setForm({ name: user.name, email: user.email, password: "" });
                }}
                className="bg-gray-600 text-white px-6 py-3 rounded-xl shadow-md transition hover:bg-gray-700"
              >
                Cancel
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
