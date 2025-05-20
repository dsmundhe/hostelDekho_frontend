import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !userType || !imageFile) {
      setError("Please fill in all fields including profile image.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "my_unsigned_preset");

      const cloudRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dmchat-app/image/upload",
        formData
      );

      const imageUrl = cloudRes.data.secure_url;

      const response = await axios.post("http://localhost:4000/user/signup", {
        name,
        email,
        password,
        userType,
        image: imageUrl,
      });

      if (response.data.msg === "Signup successful!") {
        const loginResponse = await axios.post("http://localhost:4000/user/login", {
          email,
          password,
        });

        if (loginResponse.data.token) {
          localStorage.setItem("token", loginResponse.data.token);
          localStorage.setItem("user", JSON.stringify(loginResponse.data.user));
          navigate("/");
        }
      } else {
        setError(response.data.msg || "Sign up failed.");
      }
    } catch (err) {
      console.error(err);
      setError("Error signing up. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md mt-12">
       <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Signup to <span className="text-blue-600">HostelDekho</span>
        </h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="********"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">User Type</label>
            <select
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">Select User Type</option>
              <option value="user">Student</option>
              <option value="admin">Hostel Owner</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
          </div>

          <div className="mt-4">
            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            )}
          </div>

          <div className="text-center mt-4">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
