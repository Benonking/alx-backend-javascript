export interface DirectorInteface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInteface{
  workFromHome() : string{
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  getTowork(): string{
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }

}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from Home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work'
  }
}

export function createEmployee(salary: number | string) :Director | Teacher {
  if (typeof(salary) === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

//creating functions specfic to employees
export function isDirector(employee: Teacher |Director): boolean {
  return employee instanceof Director;
}

export function executeWork(employee: Teacher | Director): void{
  if (employee instanceof Director) {
    employee.workDirectorTasks();
  }else {
    employee.workTeacherTasks();
  }
}
//string literals
export type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}
