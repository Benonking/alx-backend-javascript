interface DirectorInteface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInteface{
  workFromHome() :string{
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from Home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Get to work'
  }
}

function createEmployee(salary: number) :Director| Teacher {
  if (isNaN(salary) && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

//creating functions specfic to employees
function isDirector(employee) {


}
function executeWork(employee) {
  if (employee == Director) {
    Director.workDirector();
  }
  Teacher.workTEacherTasks();
}