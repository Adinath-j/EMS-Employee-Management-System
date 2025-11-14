import React, { useState } from "react";

const Login = ({ loginHandler, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      
      <h1 className="text-4xl font-extrabold text-emerald-400 mb-10 tracking-wide drop-shadow-lg">
        Employee Management System
      </h1>

      <div className="w-full max-w-md bg-gray-900/70 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-emerald-500/30">
        <h2 className="text-3xl font-bold text-emerald-400 text-center mb-6">
          Login
        </h2>
        <form
          onSubmit={SubmitHandler}
          className="flex flex-col space-y-5"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-lg border border-emerald-500/40 rounded-xl py-3 px-4 bg-gray-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-lg border border-emerald-500/40 rounded-xl py-3 px-4 bg-gray-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
            type="password"
            placeholder="Enter your password"
            required
          />
          <button
            type="submit"
            className="w-full text-lg font-semibold bg-emerald-500 hover:bg-emerald-600 active:scale-95 rounded-xl py-3 px-4 text-white shadow-md transition-all"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}
            <button
              onClick={onSwitchToRegister}
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              Register here
            </button>
          </p>
        </div>

        {/* Demo Credentials */}
        <div className="mt-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
          <p className="text-xs text-gray-400 font-medium mb-2">Demo Credentials:</p>
          <p className="text-xs text-gray-300">
            <span className="text-emerald-400">Admin:</span> admin@me.com / 123
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
