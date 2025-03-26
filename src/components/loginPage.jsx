import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaEnvelope, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(""); 
    try {
      const response = await axios.post("http://localhost:3001/api/auth/login", {
        email,
        password,
      }, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token); // Store token 
        navigate("/otpverification"); // Redirect after successful login
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900">Log in to your Account</h1>
        <p className="text-gray-500 mt-2">Welcome back! Select method to log in:</p>

        <div className="flex gap-4 mt-6">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md shadow-sm bg-white hover:bg-gray-200">
            <FcGoogle className="text-2xl" /> Google
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md shadow-sm bg-white hover:bg-gray-200">
            <FaFacebook className="text-blue-600 text-2xl" /> Facebook
          </button>
        </div>

        <div className="my-6 text-gray-400">or continue with email</div>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <div className="w-full max-w-sm flex items-center border rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <FaEnvelope className="text-gray-500" />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full ml-2 focus:outline-none" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full max-w-sm flex items-center border rounded-md px-4 py-2 mt-4 focus-within:ring-2 focus-within:ring-blue-500">
          <FaLock className="text-gray-500" />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full ml-2 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center w-full max-w-sm mt-4">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" className="form-checkbox text-blue-500" /> Remember me
          </label>
          <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
        </div>

        <button 
          className="w-full max-w-sm mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          onClick={handleLogin} 
        >
          Log in
        </button>

        <p className="mt-4 text-gray-600">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Create an account</a></p>
      </div>

      <div className="hidden lg:flex w-1/2 bg-blue-600 justify-center items-center p-8 text-white">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold">Connect with every application.</h2>
          <p className="mt-2 text-gray-200">Everything you need in an easily customizable dashboard.</p>
          <div className="mt-6 flex justify-center gap-4">
            <FaFacebook className="text-white text-3xl" />
            <FcGoogle className="text-3xl" />
            <FaLock className="text-white text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
