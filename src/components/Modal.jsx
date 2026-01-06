function Modal({ complaint, onClose }) {
  if (!complaint) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{complaint.subject}</h3>
        <p><strong>Date:</strong> {complaint.date}</p>
        <p><strong>Priority:</strong> {complaint.priority}</p>
        <p><strong>Description:</strong></p>
        <p>{complaint.body}</p>

        {complaint.image && (
          <img src={complaint.image} alt="attachment" />
        )}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;