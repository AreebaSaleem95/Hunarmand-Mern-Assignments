import StudentCard from './StudentCard';

function StudentList({ students, onEditStudent, onDeleteStudent }) {
  if (students.length === 0) {
    return (
      <div className="empty-state">
        <p>No students added yet. Use the form above to add your first student.</p>
      </div>
    );
  }

  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onEdit={onEditStudent}
          onDelete={onDeleteStudent}
        />
      ))}
    </div>
  );
}

export default StudentList;
