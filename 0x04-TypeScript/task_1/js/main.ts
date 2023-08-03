interface Teacher {
  readonly firstName: string;
  readonly lastName:string;
  fullTimeEmployee: boolean;
  yearsOfExpereince?: number;
  location:string;
  [property: string]: any;
}
interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string{
  return firstName.charAt(0) + '.'+' '+ lastName;
}