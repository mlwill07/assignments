var employees = [];
function Employee(firstName, lastName, jobTitle, salary, status) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = (status === undefined) ? 'Full Time': status;
    this.printEmployeeForm = function() {
        console.log(this.firstName, this.lastName, this.jobTitle, this.salary, this.status);
    };
}

var bob = new Employee("Bob", "Smith", "Mechanic", "$15/hour");
var jill = new Employee("Jill", "Taylor", "Secretary", "$12/hour", "Part time");
var jim = new Employee("Jim", "Jones", "CEO", "$40/hour");

//employees.push(jim.printEmployeeForm());

jim.printEmployeeForm();
bob.printEmployeeForm();
jill.printEmployeeForm();

employees.push(jim);
employees.push(bob);
employees.push(jill);

console.log(employees);