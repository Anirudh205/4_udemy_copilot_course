import express, { Application, Router } from 'express';
import { EmployeeController } from '../controller/EmployeeController';

export class EmployeeRoutes {
    private app: Application;
    private router: Router = Router();
    private employeeController = new EmployeeController

    constructor(app: Application) {
        this.app = app;
        this.router.use(express.json());
        this.app.use('/empl', this.router);
    }

    public loadRoutes(){
        this.router.get('/hello', (req, res) => {
            res.send("Hello World");
        });
        this.router.get('/', (req, res) => {
            this.employeeController.getEmployees(req, res);
        });
        this.router.get('/get/:id', (req, res) => {
            this.employeeController.getEmployeeById(req, res);
        });
        this.router.post('/add', (req, res) => {
            this.employeeController.addEmployee(req, res);
        });
        this.router.put('/update/:id', (req, res) => {
            this.employeeController.updateEmployeePosition(req, res);
        });
        this.router.delete('/delete/:id', (req, res) => {
            this.employeeController.deleteEmployee(req, res);
        });
        this.router.get('/position/:position', (req, res) => {
            this.employeeController.getEmployeesByPosition(req, res);
        });
    }
}