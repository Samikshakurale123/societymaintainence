import { useEffect, useState } from "react";
import Modal from "../components/Modal";

function Complaints() {
  const [complaint, setComplaint] = useState({});
  const [complaints, setComplaints] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("complaints")) || [];
    setComplaints(saved);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setComplaint({ ...complaint, image: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setComplaint({ ...complaint, [name]: value });
    }
  };

  const handleSubmit = () => {
    if (!complaint.subject || !complaint.body || !complaint.date) {
      alert("Please fill all required fields");
      return;
    }

    const updated = [...complaints, complaint];
    setComplaints(updated);
    localStorage.setItem("complaints", JSON.stringify(updated));

    setComplaint({});
  };

  return (
    <div className="container">
      <h2 className="page-title">Raise a Complaint</h2>

      {/* Complaint Form */}
      <div className="card">
        <label>Subject</label>
        <input
          name="subject"
          placeholder="Enter complaint subject"
          onChange={handleChange}
        />

        <label>Description</label>
        <textarea
          name="body"
          placeholder="Describe your issue"
          rows="4"
          onChange={handleChange}
        ></textarea>

        <label>Date of Issue</label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
        />

        <label>Priority</label>
        <select name="priority" onChange={handleChange}>
          <option value="">Select Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <label>Upload Photo (optional)</label>
        <input type="file" name="image" onChange={handleChange} />

        <button className="primary-btn" onClick={handleSubmit}>
          Submit Complaint
        </button>
      </div>

      {/* Complaints Table */}
      <h3 className="section-title">My Complaints</h3>

      <div className="table-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {complaints.length === 0 ? (
              <tr>
                <td colSpan="2" style={{ textAlign: "center" }}>
                  No complaints raised yet
                </td>
              </tr>
            ) : (
              complaints.map((c, index) => (
                <tr key={index} onClick={() => setSelected(c)}>
                  <td>{c.subject}</td>
                  <td>{c.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Modal complaint={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default Complaints;
