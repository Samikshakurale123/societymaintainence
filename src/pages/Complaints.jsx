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

    if (name === "image") {
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
    if (!complaint.subject || !complaint.body) {
      alert("Subject and Description required");
      return;
    }

    const updated = [...complaints, complaint];
    setComplaints(updated);
    localStorage.setItem("complaints", JSON.stringify(updated));

    setComplaint({});
  };

  return (
    <div className="container">
      <h2>Raise a Complaint</h2>

      <input
        name="subject"
        placeholder="Subject"
        onChange={handleChange}
      />

      <textarea
        name="body"
        placeholder="Complaint Description"
        onChange={handleChange}
      ></textarea>

      <input
        type="date"
        name="date"
        onChange={handleChange}
      />

      <select name="priority" onChange={handleChange}>
        <option value="">Select Priority</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <input type="file" name="image" onChange={handleChange} />

      <button onClick={handleSubmit}>Submit Complaint</button>

      <h3>My Complaints</h3>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c, index) => (
            <tr key={index} onClick={() => setSelected(c)}>
              <td>{c.subject}</td>
              <td>{c.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal complaint={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default Complaints;