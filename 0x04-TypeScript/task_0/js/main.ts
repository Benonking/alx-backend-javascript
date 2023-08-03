//** render table and fill in array data */
interface Student {
  firstName: string;
  lastName:string;
  age: number;
  location: string;
};
const student1: Student = {
  firstName: 'Benon',
  lastName: 'Masereka',
  age: 12,
  location: 'Miami', 
};
const student2: Student = {
  firstName: 'Kimenke',
  lastName: 'Alien',
  age: 20,
  location: 'Kampala',
};
const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
const headerRow  = document.createElement('tr');
const body = document.createElement('tbody')

// create table header
const keys = Object.keys(studentsList[0]);
for (const key of keys ) {
  const headerCell = document.createElement('th');
  headerCell.textContent = key;
  headerRow.appendChild(headerCell);
}
table.appendChild(headerRow);

// create table data tows
for (const student of studentsList) {
  const dataRow = document.createElement('tr');
  const dataName = document.createElement('td');
  const dataLoc = document.createElement('td');
    dataName.textContent = student.firstName;
    dataLoc.textContent = student.location;

    dataRow.appendChild(dataName);
    dataRow.appendChild(dataLoc);
    table.appendChild(dataRow); 
}
table.appendChild(body);
document.body.appendChild(table);

