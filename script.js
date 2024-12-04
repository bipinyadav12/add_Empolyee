let employees = [];
let idCounter = 1;

document.getElementById('add-employee').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const profession = document.getElementById('profession').value.trim();
  const age = document.getElementById('age').value.trim();

  const message = document.getElementById('message');
  message.textContent = '';

  // Validate inputs
  if (!name || !profession || !age) {
    message.textContent = 'Error:Please Make sure All the field are filled before adding in an employee !';
    message.className = 'error';
    return;
  }

  // Add new employee to the array
  const newEmployee = {
    id: idCounter++,
    name,
    profession,
    age: parseInt(age),
  };
  employees.push(newEmployee);

  // Update UI
  updateEmployeeList();

  // Show success message
  message.textContent = 'Success: Employee added!';
  message.className = 'success';

  // Clear inputs
  document.getElementById('name').value = '';
  document.getElementById('profession').value = '';
  document.getElementById('age').value = '';
});

function updateEmployeeList() {
  const employeeList = document.getElementById('employee-list');
  employeeList.innerHTML = '';

  if (employees.length === 0) {
    employeeList.innerHTML = '<p>No employees added yet.</p>';
    return;
  }

  employees.forEach((employee) => {
    const div = document.createElement('div');
    div.className = 'employee';
    div.innerHTML = `
      <span>${employee.id}.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name:${employee.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profession: ${employee.profession} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Age:${employee.age}</span>
      <button class="delete-button" onclick="deleteEmployee(${employee.id})">Delete</button>
    `;
    employeeList.appendChild(div);
  });
}

function deleteEmployee(id) {
  employees = employees.filter((employee) => employee.id !== id);
  updateEmployeeList();
}
