function NotificationModal({ message, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="modal-box bg-white shadow-lg rounded-lg p-6">
        <p className="text-black">{message}</p>
        <button className="btn btn-outline btn-error mt-4" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default NotificationModal;
