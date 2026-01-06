import { useState } from "react";
import { onlyNumbers } from "../utils/Validations.js";

function Register() {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "pincode" && !onlyNumbers(value)) return;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (!form.username || !form.password) {
      setError("Username and Password are required");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Registration Successful");
  };

  return (
    <div className="container">
      <h2>Society Registration</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input placeholder="First Name" name="firstName" onChange={handleChange} />
      <input placeholder="Last Name" name="lastName" onChange={handleChange} />
      <input type="date" name="dob" onChange={handleChange} />
      <input placeholder="Society Wing" name="wing" onChange={handleChange} />
      <input placeholder="Flat No" name="flatNo" onChange={handleChange} />
      <input placeholder="Pincode" name="pincode" onChange={handleChange} />
      <textarea placeholder="Address" name="address" onChange={handleChange} />

      <input placeholder="Username" name="username" onChange={handleChange} />
      <input type="password" placeholder="Password" name="password" onChange={handleChange} />
      <input placeholder="Hint Question" name="hint" onChange={handleChange} />

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Register;