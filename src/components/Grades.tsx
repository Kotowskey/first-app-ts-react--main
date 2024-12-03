import React, { useState } from 'react';

interface GradesProps {
  grades: number[];
  addGrade: (grade: number) => void;
  removeGrade: (gradeIndex: number) => void;
}

const Grades: React.FC<GradesProps> = ({ grades, addGrade, removeGrade }) => {
  const [newGrade, setNewGrade] = useState<string>('');

  const handleAddGrade = () => {
    const grade = parseInt(newGrade, 10);
    if (!isNaN(grade) && grade >= 1 && grade <= 6) {
      addGrade(grade);
      setNewGrade('');
    } else {
      alert('Proszę wprowadzić poprawną ocenę (liczba od 1 do 6).');
    }
  };

  return (
    <div>
      <p>Oceny:</p>
      <ul>
        {grades.map((grade, index) => (
          <li key={index}>
            {grade}{' '}
            <button type="button" onClick={() => removeGrade(index)}>
              Usuń
            </button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '10px' }}>
        <input
          type="number"
          placeholder="Nowa ocena (1-6)"
          value={newGrade}
          onChange={(e) => setNewGrade(e.target.value)}
          min="1"
          max="6"
        />
        <button type="button" onClick={handleAddGrade}>
          Dodaj Ocenę
        </button>
      </div>
    </div>
  );
};

export default Grades;
