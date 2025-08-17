import express from 'express';
import { EmployeeRoutes } from './routes/EmployeeRoutes';

export class Server {

    private app = express();

    private routes = new EmployeeRoutes(this.app);

    public startServer(){
        this.routes.loadRoutes();
        this.app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
        this.app.on('error', (err) => {
            console.error("Server error:", err);
        });
    }
}