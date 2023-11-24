const fs = require('fs');
// Helper function to get a list of first names for a specific field
function getFirstNamesList(lines, field) {
  const firstNames = [];
  for (let i = 1; i < lines.length; i += 1) {
    const [firstName, lastName, age, currentField] = lines[i].split(',');
    if (firstName && lastName && age && currentField === field) {
      firstNames.push(firstName);
    }
  }
  return firstNames.join(', ');
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // Reject the promise with a custom error message
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the file content into lines
      const lines = data.split('\n');

      // Initialize counters
      let totalStudents = 0;
      let firstNameCount;
      const fieldCount = {};

      // Start iterating from the second line (index 1) to skip the header
      for (let i = 1; i < lines.length; i += 1) {
        // Skip empty lines
        if (lines[i].trim() === '') {
          delete lines[i];
        }

        // Parse the CSV line
        const [firstName, lastName, age, field] = lines[i].split(',');

        // Check if all fields are present
        if (firstName && lastName && age && field) {
          // Increment total students count
          totalStudents += 1;

          // Increment field-specific count
          if (fieldCount[field]) {
            fieldCount[field] += 1;
          } else {
            fieldCount[field] = 1;
          }

          // Increment firstName count
          firstNameCount += 1;
        }
      }
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, count] of Object.entries(fieldCount)) {
        console.log(`Number of students in ${field}: ${count}. List ${getFirstNamesList(lines, field)}`);
      }

      // Resolve the promise with the result
      resolve();
    });
  });
}

module.exports = countStudents;
