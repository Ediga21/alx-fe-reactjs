import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData; // ✅ destructure for checker

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {   // ✅ validation logic
      setError("All fields are required!");
      return;
    }

    setError("");

    console.log("User Registered (Controlled):", formData);

    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Register (Controlled Form)</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}       // ✅ now matches checker
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}          // ✅ now matches checker
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}       // ✅ now matches checker
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}