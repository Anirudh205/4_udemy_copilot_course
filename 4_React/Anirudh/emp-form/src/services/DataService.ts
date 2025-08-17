import type { Employee } from "../model/Employee"

const base_url = "http://localhost:3000/empl/"

export async function addEmployees(employee: Partial<Employee>): Promise<void> {
    const response = await fetch(base_url + 'add', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    });
    if (!response.ok) {
        throw new Error("Failed to add employee");
    }
}

export async function getEmployees(): Promise<Employee[]> {
    const response = await fetch(base_url, {
        method: "GET",  
    });
    if (!response.ok) {
        throw new Error("Failed to fetch employees");
    }
    return response.json();
}

export async function getEmployeeById(id: number): Promise<Employee | undefined> {
    const response = await fetch(base_url + 'get/' +id, {
        method: "GET",
    });
    if (response.status === 404) {
        return undefined;
    }
    const employee = await response.json();
    return employee;
}

export async function getEmployeeBio(id: number): Promise<string | undefined> {
    const employee = await getEmployeeById(id);
    if (!employee) {
        return "No Bio available for this employee.";
    }
    return `Bio of ${employee.firstName} ${employee.lastName}:\n${employee.firstName} is a valued member of our team, contributing with dedication and skill. ${employee.firstName} brings expertise and a positive attitude to every project.`;
}
