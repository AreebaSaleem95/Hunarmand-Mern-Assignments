import { useState, useEffect } from 'react';

function StudentForm({ onAddStudent, onUpdateStudent, editingStudent, onCancelEdit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setEmail(editingStudent.email);
      setCourse(editingStudent.course);
    } else {
      setName('');
      setEmail('');
      setCourse('');
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedCourse = course.trim();

    if (!trimmedName || !trimmedEmail || !trimmedCourse) {
      alert('All fields are required');
      return;
    }

    if (editingStudent) {
      onUpdateStudent({
        id: editingStudent.id,
        name: trimmedName,
        email: trimmedEmail,
        course: trimmedCourse,
      });
      onCancelEdit();
    } else {
      onAddStudent({
        name: trimmedName,
        email: trimmedEmail,
        course: trimmedCourse,
      });
    }

    setName('');
    setEmail('');
    setCourse('');
  };

  const handleCancel = () => {
    onCancelEdit();
    setName('');
    setEmail('');
    setCourse('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="course">Course</label>
        <input
          id="course"
          type="text"
          placeholder="Enter course name"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>
      <div className="form-actions">
        {editingStudent ? (
          <>
            <button type="submit" className="btn btn-update">
              Update Student
            </button>
            <button type="button" className="btn btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <button type="submit" className="btn btn-add">
            Add Student
          </button>
        )}
      </div>
    </form>
  );
}

export default StudentForm;
