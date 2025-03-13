// Initialize an employee object using literal syntax
const employee = {
    name: "Alice",
    streetAddress: "123 Main Street"
  };
  
  // Non-destructively updates the employee object.
  // Returns a new object with the given key updated to the new value.
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Destructively updates the employee object.
  // Directly changes the passed-in object and returns it.
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Non-destructively deletes a key from the employee object.
  // Returns a new object without the specified key.
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Destructively deletes a key from the employee object.
  // Directly removes the property from the passed-in object and returns it.
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  