import React, { useState } from "react";

function Employees() {
  // First we create an array of employees to use in our table
  const employees =
    [
      {
        id: 1,
        firstName: "Hem",
        lastName: "Cat",
        role: "Bodega Cat"
      },
      {
        id: 2,
        firstName: "Kyle",
        lastName: "Cat",
        role: "Bodega Cat"
      },
      {
        id: 3,
        firstName: "Colonel",
        lastName: "Dog",
        role: "Loud Borker"
      },
      {
        id: 4,
        firstName: "Cheif",
        lastName: "Dog",
        role: "Food Scavenger"
      }
    ];
  // Create an array to hold the employees array, which we can then use to adjust the order
  let sortedEmployees = [...employees];
  // Establish useState
  const [sortedRow, setSortedRow] = useState();
  // We call on the array and pass two employees into the sorting function. This compares two employees and sorts them based the firstName prop.
  if (sortedRow) {
    sortedEmployees.sort((eOne, eTwo) => {
      if (eOne[sortedRow] < eTwo[sortedRow]) {
        return -1;
      } else if (eOne[sortedRow] > eTwo[sortedRow]) {
        return 1;
      } else return 0
    });
  };

  return (
    <table id="myTable" className="table">
      <thead>
        <tr>
          {/* onClick, pass the name of the row selected to sortedEmployees.sort() */}
          <th scope="col"><button onClick={() => setSortedRow('id')}>#</button></th>
          <th scope="col"><button onClick={() => setSortedRow('firstName')}>First Name</button></th>
          <th scope="col" onClick={() => setSortedRow('lastName')}><button>Last Name</button></th>
          <th scope="col" onClick={() => setSortedRow('role')}><button>Role</button></th>
        </tr>
      </thead>
      <tbody>
        {sortedEmployees.map((employee => (
          // Map through our employees array and create a tr/td for each employees in the array.
          // Establish unique key, display id number, first name, last name and role.
          <tr key={employee.id}>
            <td key={employee.id}>{employee.id}</td>
            <td key={employee.firstName}>{employee.firstName}</td>
            <td key={employee.lastName}>{employee.lastName}</td>
            <td key={employee.role}>{employee.role}</td>
          </tr>
        )))}
      </tbody>
    </table>
  )
};

export default Employees;
