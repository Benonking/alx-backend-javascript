
var student1 = {
    firstName: 'Benon',
    lastName: 'Masereka',
    age: 12,
    location: 'Miami',
};
var student2 = {
    firstName: 'Kimenke',
    lastName: 'Alien',
    age: 20,
    location: 'Kampala',
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var headerRow = document.createElement('tr');
var body = document.createElement('tbody');
// create table header
var keys = Object.keys(studentsList[0]);
for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
    var key = keys_1[_i];
    var headerCell = document.createElement('th');
    headerCell.textContent = key;
    headerRow.appendChild(headerCell);
}
table.appendChild(headerRow);
// create table data tows
for (var _a = 0, studentsList_1 = studentsList; _a < studentsList_1.length; _a++) {
    var student = studentsList_1[_a];
    var dataRow = document.createElement('tr');
    var dataName = document.createElement('td');
    var dataLoc = document.createElement('td');
    dataName.textContent = student.firstName;
    dataLoc.textContent = student.location;
    dataRow.appendChild(dataName);
    dataRow.appendChild(dataLoc);
    table.appendChild(dataRow);
}
table.appendChild(body);
document.body.appendChild(table);
