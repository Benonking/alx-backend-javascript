interface Teacher {
  readonly firstName: string;
  readonly lastName:string;
  fullTimeEmployee: boolean;
  yearsOfExpereince?: number;
  location:string;
  [property: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

function printTeacher(firstName: string, lastName: string): string{
  return `${firstName[0]}. ${lastName}`;
}
interface printTeacherFunction{
  (firstName:string, lastName:string): void
}

interface StudentClassInterface {
  firstName: string;
  lastName:string;
  workonHomeWork(): string;
  displayName(): string
};
//constructor interface
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}
//student class
class StudentClass {
  fn:string;
  ln:string;
  constructor (firstName: string, lastName: string) {
    this.fn = firstName;
    this.ln = lastName;

  }
  workOnHomeWork(): string {
    return 'Currently working';
  }
  displayName (): string{
    return this.fn;
  }
}