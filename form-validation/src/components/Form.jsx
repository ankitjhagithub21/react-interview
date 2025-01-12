import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Form = ({ setUsers }) => {
  const initialData = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegax.test(formData.email)) {
      setError("Invalid email address.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password length must be 8 characters.");
      return;
    }

    if (!/[!@#$%^&?*<>]/.test(formData.password)) {
      setError("Password must contain atleast one special character.");
      return;
    }

    if (!/[A-Z]/.test(formData.password)) {
      setError("Password must contain atleast one uppercase letter.");
      return;
    }

    if (formData.password != formData.confirmPassword) {
      setError("Password and Confirm password must be same.");
      return;
    }

    setError("");

    toast.success("Form submitted.");

    setUsers((prev) => [...prev, formData]);
    setFormData(initialData);
    navigate("/users");

  };
  return (
    <div className="h-screen relative w-full flex items-center justify-center p-5 bg-gray-800">

<div className="absolute top-5 left-5">
<Link to={"/users"} className="bg-green-500 text-white rounded-lg px-4 py-2">All Users</Link>
</div>

      <div className="max-w-md w-full p-5 rounded-lg border shadow-xl">
        <h2 className="mb-5 text-2xl text-white">Add User</h2>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            className="px-4 py-2 text-gray-800 outline-none bg-gray-300 rounded-lg  ring-green-600 focus:ring-2"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter your email"
            className="px-4 py-2 text-gray-800 outline-none bg-gray-300 rounded-lg ring-green-600 focus:ring-2"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="px-4 py-2 text-gray-800 outline-none bg-gray-300 rounded-lg ring-green-600 focus:ring-2"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="px-4 py-2 text-gray-800 outline-none bg-gray-300 rounded-lg ring-green-600 focus:ring-2"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-green-600 p-2 rounded-lg text-white hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
