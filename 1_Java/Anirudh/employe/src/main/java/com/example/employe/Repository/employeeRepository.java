package com.example.employe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.employe.Model.employeeModel;

@Repository
public interface employeeRepository extends JpaRepository<employeeModel, Integer> {
    
}
