import React from 'react';
import { Button } from 'reactstrap';

const RowInfo = (props) => {
  const handleDeleteStudent = () => {
    props.onDelete(props.id);
    // console.log(props.id);
  };

  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>{props.gender}</td>
      <td>
        <Button color="danger" onClick={handleDeleteStudent}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default RowInfo;