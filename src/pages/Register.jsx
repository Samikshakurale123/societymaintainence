import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [society, setSociety] = useState("");
  const [wing, setWing] = useState("");
  const [flat, setFlat] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const numberOnly = (value, max) =>
    value.replace(/\D/g, "").slice(0, max);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!passwordPattern.test(password)) {
      alert(
        "Password must have 8 characters, 1 uppercase letter, 1 number, and 1 symbol"
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Save username for navbar
    localStorage.setItem("username", firstName);

    alert("Registration Successful!");

    // Reset form
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setDob("");
    setAddress("");
    setSociety("");
    setWing("");
    setFlat("");
    setPincode("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="container">
      <div
        className="card shadow p-4 my-5 mx-auto"
        style={{ maxWidth: "750px" }}
      >
        <h3 className="text-center mb-4">Registration Form</h3>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Email ID</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(e) =>
                  setPhone(numberOnly(e.target.value, 10))
                }
                required
              />
            </div>
          </div>

          {/* DOB */}
          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>

          {/* Address */}
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              className="form-control"
              rows="3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          {/* Society */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Society</label>
              <input
                type="text"
                className="form-control"
                value={society}
                onChange={(e) => setSociety(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Wing</label>
              <input
                type="text"
                className="form-control"
                value={wing}
                onChange={(e) => setWing(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Flat No</label>
              <input
                type="text"
                className="form-control"
                value={flat}
                onChange={(e) => setFlat(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Pincode */}
          <div className="mb-3">
            <label className="form-label">Pincode</label>
            <input
              type="text"
              className="form-control"
              value={pincode}
              onChange={(e) =>
                setPincode(numberOnly(e.target.value, 6))
              }
              required
            />
          </div>

          {/* Password */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <small className="text-danger">
                8 chars, 1 uppercase, 1 number, 1 symbol
              </small>
            </div>

            <div className="col-md-6">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary px-5">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
