import { EmployeeRepository } from "../src/repository/EmployeeRepository";

export async function main(){

    const employeeRepository = new EmployeeRepository();

    const addResult = await employeeRepository.addEmployee({
        firstName: "John",
        lastName: "Doe",
        hireDate: new Date(),
        position: "Software Engineer"
    });
    console.log("Added Employee:", addResult);

    const employees = await employeeRepository.getEmployees();
    console.log("All Employees:", employees);
}

main();