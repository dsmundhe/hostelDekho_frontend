import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/user/login", { email, password });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/hostels");
      } else {
        setError(response.data.msg || "Login Failed");
      }
    } catch (error) {
      setError("Error logging in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Login to <span className="text-blue-600">HostelDekho</span>
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          {error && <p className="text-red-500 text-center text-sm">{error}</p>}

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-4">
            {!isLoading ? (
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </button>
            ) : (
              <Loader />
            )}
          </div>

          <div className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline font-medium">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
