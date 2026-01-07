function Modal({ complaint, onClose }) {
  if (!complaint) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Complaint Details</h3>

        <p><strong>Subject:</strong> {complaint.subject}</p>
        <p><strong>Date:</strong> {complaint.date}</p>
        <p><strong>Priority:</strong> {complaint.priority}</p>

        <p><strong>Description:</strong></p>
        <p>{complaint.body}</p>

        {complaint.image && (
          <img src={complaint.image} alt="Complaint" />
        )}

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
