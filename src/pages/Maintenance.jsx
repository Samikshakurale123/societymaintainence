import { useState } from "react";
import { generateMaintenancePDF } from "../utils/pdfGenerator";

function Maintenance() {
  const RATE = 2200; // per month rate

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [months, setMonths] = useState(1);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  // Dynamic total calculation
  const TOTAL = months * RATE;

  const handleDownload = () => {
    if (!month || !year) {
      setError("Please select month and year");
      return;
    }

    if (comment.length < 5) {
      setError("Comment must be at least 5 characters");
      return;
    }

    setError("");
    generateMaintenancePDF(month, year, months, TOTAL);
  };

  return (
    <div className="container">
      <h2>Maintenance Details</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Month */}
      <label>Month</label>
      <select onChange={(e) => setMonth(e.target.value)}>
        <option value="">Select Month</option>
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
      </select>

      {/* Year */}
      <label>Year</label>
      <input
        type="number"
        placeholder="Enter Year"
        onChange={(e) => setYear(e.target.value)}
      />

      {/* Number of Months */}
      <label>Number of Months</label>
      <select onChange={(e) => setMonths(Number(e.target.value))}>
        <option value="1">1 Month</option>
        <option value="2">2 Months</option>
        <option value="3">3 Months</option>
        <option value="4">4 Months</option>
        <option value="5">5 Months</option>
        <option value="6">6 Month</option>
        <option value="7">7 Months</option>
        <option value="8">8 Months</option>
        <option value="9">9 Months</option>
        <option value="10">10 Months</option>
        <option value="11">11 Months</option>
        <option value="12">12 Months</option>
      </select>

      {/* Total Maintenance */}
      <label>Total Maintenance</label>
      <input value={`₹ ${TOTAL}`} readOnly />

      {/* Comment */}
      <label>Comment</label>
      <textarea
        placeholder="Enter comment"
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      {/* Download Button */}
      <button onClick={handleDownload}>
        Download Receipt
      </button>
    </div>
  );
}

export default Maintenance;
