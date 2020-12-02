import React from "react";



function Employees() {
  // First we create an array of employees to use in our table
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
  // Create an array to hold the employees array, which we can then use to adjust the order
  let sortedEmployees = [...employees];
  // We call on the array and pass two employees into the sorting function. This compares two employees and sorts them based the firstName prop.
  sortedEmployees.sort((eOne, eTwo) => {
    if (eOne.firstName < eTwo.firstName) {
      return -1;
    } else if (eOne.firstName > eTwo.firstName) {
      return 1;
    } else return 0
  });

  return (
    <table id="myTable" class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
      <tbody>

        {employees.map((employee => (
          // Map through our employees array and create a tr/td for each employees in the array.
          // Establish unique key, display id number, first name, last name and role.
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.role}</td>
          </tr>
        )))}
      </tbody>
    </table>
  )
};

export default Employees;
