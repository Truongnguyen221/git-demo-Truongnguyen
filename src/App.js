import React from 'react';
import './App.css';
import {
  Button,
  Table,
  Container,
  InputGroup,
  InputGroupText,
  Input,
} from 'reactstrap';
import RowInfo from './RowInfo';
import { useState } from 'react';

function App() {
  const [listStudent, setListStudent] = useState([
    {
      id: 1,
      name: 'Nguyễn Văn A',
      age: 16,
      gender: 'Boy',
    },
    {
      id: 2,
      name: 'Lung Thị Linh',
      age: 15,
      gender: 'Girl',
    },
  ]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSetName = (event) => {
    setName(event.target.value);
  };
  const handleSetAge = (event) => {
    setAge(event.target.value);
  };
  const handleSetGender = (event) => {
    setGender(event.target.value);
  };

  const handleAddNewStudent = () => {
    const newStudent = {
      id: listStudent.length + 1,
      name: name,
      age: age,
      gender: gender,
    };

    setListStudent([...listStudent, newStudent]);
  };

  const deleteStudent = (id) => {
    console.log(id);
    const newListStudent = listStudent.filter((student, key) => {
      return student.id !== id;
    });
    setListStudent(newListStudent);
  };

  return (
    <Container className="mt-5">
      <InputGroup className="mt-3">
        <InputGroupText>Name</InputGroupText>
        <Input
          value={name}
          placeholder="Enter your name..."
          onChange={handleSetName}
        />
      </InputGroup>
      <InputGroup className="mt-3">
        <InputGroupText>Age</InputGroupText>
        <Input
          value={age}
          type="number"
          placeholder="Enter your age..."
          onChange={handleSetAge}
        />
      </InputGroup>
      <InputGroup className="mt-3">
        <InputGroupText>Gender</InputGroupText>
        <Input
          value={gender}
          placeholder="Enter your gender..."
          onChange={handleSetGender}
        />
      </InputGroup>
      <Button className="mt-3" color="primary" onClick={handleAddNewStudent}>
        Add new student
      </Button>
      <Table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listStudent.map((student, key) => {
            return (
              <RowInfo
                id={student.id}
                name={student.name}
                age={student.age}
                gender={student.gender}
                onDelete={deleteStudent}
              />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;