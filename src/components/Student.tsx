import React, { useState } from 'react';
import { Student as StudentType } from '../types/Student';
import AddNewStudent from './AddNewStudent';
import FirstName from './FirstName';
import LastName from './LastName';
import DateOfBirth from './DateOfBirth';
import Address from './Address';
import Group from './Group';
import Scholarship from './Scholarship';
import Grades from './Grades';

const Student: React.FC = () => {
  const [students, setStudents] = useState<StudentType[]>([
    {
      id: 1,
      firstName: 'Jan',
      lastName: 'Kowalski',
      dateOfBirth: '1995-05-15',
      address: 'ul. Kwiatowa 10, Warszawa',
      group: 'Informatyka',
      scholarship: true,
      grades: [5, 4, 5, 3],
    },
  ]);

  const addGrade = (studentId: number, grade: number) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId
          ? { ...student, grades: [...student.grades, grade] }
          : student
      )
    );
  };

  const removeGrade = (studentId: number, gradeIndex: number) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId
          ? {
              ...student,
              grades: student.grades.filter((_, index) => index !== gradeIndex),
            }
          : student
      )
    );
  };

  const addStudent = (student: StudentType) => {
    setStudents([...students, student]);
  };

  return (
    <div>
      <h1>Lista Studentów</h1>
      <AddNewStudent addStudent={addStudent} />
      {students.map((student) => (
        <div
          key={student.id}
          style={{
            border: '1px solid black',
            margin: '10px',
            padding: '10px',
          }}
        >
          <FirstName firstName={student.firstName} />
          <LastName lastName={student.lastName} />
          <DateOfBirth dateOfBirth={student.dateOfBirth} />
          <Address address={student.address} />
          <Group group={student.group} />
          <Scholarship scholarship={student.scholarship} />
          <Grades
            grades={student.grades}
            addGrade={(grade: number) => addGrade(student.id, grade)}
            removeGrade={(gradeIndex: number) =>
              removeGrade(student.id, gradeIndex)
            }
          />
        </div>
      ))}
    </div>
  );
};

export default Student;
