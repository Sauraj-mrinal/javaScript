
  
  // Example usage:
  let car = {
    make: "Toyota",
    model: "Corolla"
  };

  // Function to add a new property to an object
function addProperty(obj, key, value) {
    obj[key] = value; // Adds a new property 'key' with the specified 'value' to the object 'obj'
  }
  
  addProperty(car, "year", 2020); // Adds a new property 'year' with value 2020 to the 'car' object
  console.log(car);
  addProperty(car, "color", "red")

  console.log(car);
  