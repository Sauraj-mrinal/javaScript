// Function to delete a property from an object
function deleteProperty(obj, key) {
    delete obj[key]; // Removes the property 'key' from the object 'obj'
  }
  
  // Example usage:
  let user = {
    username: "john_doe",
    password: "secure123",
    email: "john@example.com"
  };
  
  deleteProperty(user, "password"); // Deletes the 'password' property from the 'user' object
  console.log(user);
  