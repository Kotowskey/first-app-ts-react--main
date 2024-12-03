import React, { useState } from 'react';
import { Student } from '../types/Student';

interface AddNewStudentProps {
  addStudent: (student: Student) => void;
}

const AddNewStudent: React.FC<AddNewStudentProps> = ({ addStudent }) => {
  const [student, setStudent] = useState<Student>({
    id: Date.now(),
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    group: '',
    scholarship: false,
    grades: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setStudent({
      ...student,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addStudent(student);
    setStudent({
      id: Date.now(),
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      address: '',
      group: '',
      scholarship: false,
      grades: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dodaj Nowego Studenta</h2>
      <input
        type="text"
        name="firstName"
        placeholder="Imię"
        value={student.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Nazwisko"
        value={student.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dateOfBirth"
        value={student.dateOfBirth}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Adres"
        value={student.address}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="group"
        placeholder="Grupa"
        value={student.group}
        onChange={handleChange}
        required
      />
      <label>
        Stypendium:
        <input
          type="checkbox"
          name="scholarship"
          checked={student.scholarship}
          onChange={handleChange}
        />
      </label>
      {}
      <button type="submit">Dodaj Studenta</button>
    </form>
  );
};

export default AddNewStudent;
