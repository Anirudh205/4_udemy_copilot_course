import React from 'react';
import type { Employee } from '../model/Employee';
import { getEmployeeById, getEmployeeBio } from '../services/DataService';
import { Link, useParams } from 'react-router-dom';

const EmplDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [employee, setEmployee] = React.useState<Employee | null>(null);
    const [bio, setBio] = React.useState<string>('');

    React.useEffect(() => {
        const fetchEmployeeDetails = async () => {
            if (id) {
                const employeeId = parseInt(id);
                const employeeData = await getEmployeeById(employeeId);
                const employeeBio = await getEmployeeBio(employeeId);
                if(employeeData && employeeBio) {
                    setEmployee(employeeData);
                    setBio(employeeBio);
                }
            }
        }
        fetchEmployeeDetails();
    }, [id]);

    if (!employee) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Employee Details</h2>
            <p><strong>First Name:</strong> {employee.firstName}</p>
            <p><strong>Last Name:</strong> {employee.lastName}</p>
            <p><strong>Hire Date:</strong> {employee.hireDate}</p>
            <p><strong>Position:</strong> {employee.position}</p>
            <br />
            <p><strong>Bio:</strong> {bio}</p>
            <br />
            <Link to="/employees">Back to Employee List</Link>
        </div>
    );
};

export default EmplDetails;