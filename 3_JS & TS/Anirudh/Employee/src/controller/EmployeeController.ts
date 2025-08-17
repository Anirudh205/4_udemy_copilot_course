import e, {Request, Response} from 'express';
import { Employee } from '../model/Employee';
import { EmployeeRepository } from '../repository/EmployeeRepository';

export class EmployeeController {
    private employeeRepository: EmployeeRepository = new EmployeeRepository();

    public async getEmployees(req: Request, res: Response) {
        try {
            const employees = await this.employeeRepository.getEmployees();
            res.send(employees);
        } catch (error) {
            console.error("Error fetching employees:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    public async getEmployeeById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const employee = await this.employeeRepository.getEmployeeById(id);
            if (employee === undefined) {
                return res.status(404).send("Employee not found");
            }
            else {
                res.send(employee);
            }
        } catch (error) {
            console.error("Error fetching employee:", error);
            res.status(500).send("Internal Server Error");
        
        }
    }

    public async addEmployee(req: Request, res: Response) {
        try {
            const employee: Partial<Employee> = req.body;
            const result = await this.employeeRepository.addEmployee(employee);
            res.status(201).send(result);
        } catch (error) {
            console.error("Error adding employee:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    public async updateEmployeePosition(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const position = req.body.position;
            const result = await this.employeeRepository.updateEmployeePosition(id, position);
            res.send(result);
        } catch (error) {
            console.error("Error updating employee position:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    public async deleteEmployee(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const result = await this.employeeRepository.deleteEmployee(id);
            res.send(result);
        } catch (error) {
            console.error("Error deleting employee:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    public async getEmployeesByPosition(req: Request, res: Response) {
        try {
            const position = req.params.position;
            const employees = await this.employeeRepository.getEmployeesByPosition(position);
            res.send(employees);
        } catch (error) {
            console.error("Error fetching employees by position:", error);
            res.status(500).send("Internal Server Error");
        }
    }
}