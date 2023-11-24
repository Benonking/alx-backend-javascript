const fs = require('fs');

function countStudents(path) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the file content into lines
    const lines = data.split('\n');

    // Initialize counters
    let totalStudents = 0;
    let firstNameCount = 0;
    let fieldCount = {};

    // Start iterating from the second line (index 1)
    for (let i = 1; i < lines.length; i++) {
      // Skip empty lines
      if (lines[i].trim() === '') {
        continue;
      }

      // Parse the CSV line
      const [firstName, lastName, age, field] = lines[i].split(',');

      // Check if all fields are present
      if (firstName && lastName && age && field) {
        // Increment total students count
        totalStudents++;

        // Increment field-specific count
        if (fieldCount[field]) {
          fieldCount[field]++;
        } else {
          fieldCount[field] = 1;
        }

        // Increment firstName count
        firstNameCount++;
      }
    }

    // Log the results
    console.log(`Number of students: ${totalStudents}`);

    // Log the counts for each field
    for (const [field, count] of Object.entries(fieldCount)) {
      console.log(`Number of students in ${field}: ${count}. List: ${getFirstNamesList(lines, field)}`);
    }
  } catch {
    throw new Error('Cannot load the database');
  }
}

// Helper function to get a list of first names for a specific field
function getFirstNamesList(lines, field) {
  const firstNames = [];
  for (let i = 1; i < lines.length; i++) {
    const [firstName, lastName, age, currentField] = lines[i].split(',');
    if (firstName && lastName && age && currentField === field) {
      firstNames.push(firstName);
    }
  }
  return firstNames.join(', ');
}
module.exports = countStudents, getFirstNamesList
