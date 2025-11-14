import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useToast } from "../Toast/ToastContainer";

const Register = ({ onSwitchToLogin }) => {
  const [userData, setUserData] = useContext(AuthContext);
  const { showToast } = useToast();
  
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstname.trim()) {
      newErrors.firstname = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Check if email already exists
    if (userData.some(emp => emp.email === formData.email)) {
      newErrors.email = "Email already registered";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast("Please fix the errors below", "error");
      return;
    }

    // Create new employee
    const newEmployee = {
      id: Math.max(...userData.map(e => e.id), 0) + 1,
      firstname: formData.firstname.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
      tasks: [],
      taskNumbers: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
    };

    const updatedEmployees = [...userData, newEmployee];
    setUserData(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    showToast(
      `Account created successfully! You can now login as ${newEmployee.firstname}`,
      "success"
    );

    // Reset form
    setFormData({
      firstname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});

    // Switch to login after 1.5 seconds
    setTimeout(() => {
      onSwitchToLogin();
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <h1 className="text-4xl font-extrabold text-emerald-400 mb-10 tracking-wide drop-shadow-lg">
        Employee Management System
      </h1>

      <div className="w-full max-w-md bg-gray-900/70 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-emerald-500/30">
        <h2 className="text-3xl font-bold text-emerald-400 text-center mb-2">
          Register
        </h2>
        <p className="text-gray-400 text-center mb-6 text-sm">
          Create your employee account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Name Field */}
          <div>
            <input
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className={`w-full text-lg border rounded-xl py-3 px-4 bg-gray-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 outline-none transition-all ${
                errors.firstname
                  ? "border-red-500 focus:ring-red-500"
                  : "border-emerald-500/40"
              }`}
              type="text"
              placeholder="Full Name"
              required
            />
            {errors.firstname && (
              <p className="text-red-400 text-xs mt-1">{errors.firstname}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full text-lg border rounded-xl py-3 px-4 bg-gray-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 outline-none transition-all ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-emerald-500/40"
              }`}
              type="email"
              placeholder="Email"
              required
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full text-lg border rounded-xl py-3 px-4 bg-gray-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 outline-none transition-all ${
                errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "border-emerald-500/40"
              }`}
              type="password"
              placeholder="Password"
              required
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full text-lg border rounded-xl py-3 px-4 bg-gray-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 outline-none transition-all ${
                errors.confirmPassword
                  ? "border-red-500 focus:ring-red-500"
                  : "border-emerald-500/40"
              }`}
              type="password"
              placeholder="Confirm Password"
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full text-lg font-semibold bg-emerald-500 hover:bg-emerald-600 active:scale-95 rounded-xl py-3 px-4 text-white shadow-md transition-all mt-6"
          >
            Create Account
          </button>
        </form>

        {/* Switch to Login */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Already have an account?{" "}
            <button
              onClick={onSwitchToLogin}
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
