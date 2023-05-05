import React from "react";
import Table from "react-bootstrap/Table";

const MyTable = ({ items }) => {
  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>Nombre del cliente</th>
          <th>Valor del proyecto</th>
          <th>Departamento del proyecto</th>
          <th>Ciudad del proyecto</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.projectValue}</td>
              <td>{item.projectDepartment}</td>
              <td>{item.city}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default MyTable;
