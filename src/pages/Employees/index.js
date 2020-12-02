import React from "react";



function Employees() {
  const employees =
    [
      {
        id: 1,
        firstName: "Hem",
        lastName: "The Cat",
        role: "Bodega Cat"
      },
      {
        id: 2,
        firstName: "Kyle",
        lastName: "The Cat",
        role: "Bodega Cat"
      },
      {
        id: 3,
        firstName: "Colonel",
        lastName: "The Dog",
        role: "Loud Borker"
      },
      {
        id: 4,
        firstName: "Cheif",
        lastName: "The Dog",
        role: "Food Scavenger"
      }
    ];

  let sortedEmployees = [...employees];

  sortedEmployees.sort((eOne, eTwo) => {
    if (eOne.firstName < eTwo.firstName) {
      return -1;
    }
  });

  return (
    <table id="myTable" class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  )
};

export default Employees;
