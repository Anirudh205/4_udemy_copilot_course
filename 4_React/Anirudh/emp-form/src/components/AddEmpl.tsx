import React from 'react';
import type { Employee } from '../model/Employee';
import { addEmployees } from '../services/DataService';
import { Link } from 'react-router-dom';

const AddEmpl: React.FC = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [position, setPosition] = React.useState('');

    const handleAddEmployee = async () => {
        const newEmployee: Partial<Employee> = {
            firstName,
            lastName,
            position,
            hireDate: new Date().toISOString().split('T')[0], // yyyy-mm-dd
        };
        await addEmployees(newEmployee);
        setFirstName('');
        setLastName('');
        setPosition('');
    };

    return (
        <form onSubmit={handleAddEmployee}>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Position:</label>
                <input
                    type="text"
                    value={position}
                    onChange={e => setPosition(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Employee</button>
            <Link to="/employees">
                <button type="button">Back to Employee List</button>
            </Link>
        </form>
    );
};

export default AddEmpl;
