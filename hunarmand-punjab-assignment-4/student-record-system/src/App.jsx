import { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './styles/style.css';

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const generateId = () => {
    return students.length > 0
      ? Math.max(...students.map((s) => s.id), 0) + 1
      : 1;
  };

  const handleAddStudent = (studentData) => {
    const newStudent = {
      id: generateId(),
      name: studentData.name,
      email: studentData.email,
      course: studentData.course,
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  const handleUpdateStudent = (updatedStudent) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === updatedStudent.id ? updatedStudent : s))
    );
    setEditingStudent(null);
  };

  const handleDeleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
    if (editingStudent?.id === id) {
      setEditingStudent(null);
    }
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
  };

  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Student Record Management System</h1>

      <div className="card">
        <h2 className="card-title">
          {editingStudent ? 'Edit Student' : 'Add New Student'}
        </h2>
        <StudentForm
          onAddStudent={handleAddStudent}
          onUpdateStudent={handleUpdateStudent}
          editingStudent={editingStudent}
          onCancelEdit={handleCancelEdit}
        />
      </div>

      <h2 className="section-title">Students</h2>
      <StudentList
        students={students}
        onEditStudent={handleEditStudent}
        onDeleteStudent={handleDeleteStudent}
      />
    </div>
  );
}

export default App;
