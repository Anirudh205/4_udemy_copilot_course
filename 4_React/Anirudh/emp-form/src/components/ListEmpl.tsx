import React from 'react';
import { Link } from 'react-router-dom';
import type { Employee } from '../model/Employee';
import { getEmployees } from '../services/DataService';

const ListEmpl: React.FC = () => {
    const [employees, setEmployees] = React.useState<Employee[]>([]);

    React.useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const empList = await getEmployees();
                setEmployees(empList);
            } catch (error) {
                console.error("Failed to fetch employees:", error);
            }
        }
        fetchEmployees();
    }, []);

    return (
        <div>
            <h1>Employee List</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Hire Date</th>
                        <th>Position</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.hireDate}</td>
                            <td>{emp.position}</td>
                            <td>
                                <Link to={`/details/${emp.id}`}>View Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/add">
                <button>Add New Employee</button>
            </Link>
        </div>
    );
};

export default ListEmpl;