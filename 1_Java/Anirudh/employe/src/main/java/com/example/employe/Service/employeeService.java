package com.example.employe.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.employe.Model.employeeModel;
import com.example.employe.Repository.employeeRepository;

@Service
public class employeeService {

    @Autowired
    private employeeRepository employeeRepo;

    public List<employeeModel> getAllEmployees() {
        return employeeRepo.findAll();
    }

    public employeeModel getEmployeeById(int id) {
        return employeeRepo.findById(id).orElse(null);
    }

    public employeeModel addEmployee(employeeModel employee) {
        return employeeRepo.save(employee);
    }

    public employeeModel updateEmployee(int id, employeeModel employee) {
        if (employeeRepo.existsById(id)) {
            employee.setId(id);
            return employeeRepo.save(employee);
        }
        return null;
    }

    public void deleteEmployee(int id) {
        if (employeeRepo.existsById(id)) {
            employeeRepo.deleteById(id);
        }
    }
}
