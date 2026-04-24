function StudentCard({ student, onEdit, onDelete }) {
  return (
    <div className="student-card">
      <div className="student-info">
        <h3 className="student-name">{student.name}</h3>
        <p className="student-email">{student.email}</p>
        <p className="student-course">{student.course}</p>
      </div>
      <div className="student-actions">
        <button
          type="button"
          className="btn btn-edit"
          onClick={() => onEdit(student)}
          aria-label={`Edit ${student.name}`}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-delete"
          onClick={() => onDelete(student.id)}
          aria-label={`Delete ${student.name}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
