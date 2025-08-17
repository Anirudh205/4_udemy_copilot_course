package com.practice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;



public class EmployeeListTest {

    private EmployeeList employeeList;
    private Employee emp1;
    private Employee emp2;
    private Employee emp3;

    
    @BeforeEach
    public void setUp() {
        employeeList = new EmployeeList();
        emp1 = new Employee("Alice", 30, 5000);
        emp2 = new Employee("Bob", 25, 7000);
        emp3 = new Employee("Charlie", 35, 6000);
        employeeList.addEmployee(emp1);
        employeeList.addEmployee(emp2);
        employeeList.addEmployee(emp3);
    }

    @Test
    public void testAddEmployee() {
        Employee emp4 = new Employee("David", 28, 5500);
        employeeList.addEmployee(emp4);
        assertTrue(employeeList.getEmployees().contains(emp4));
    }

    @Test
    public void testRemoveEmployee() {
        employeeList.removeEmployee(emp2);
        assertFalse(employeeList.getEmployees().contains(emp2));
    }

    @Test
    public void testGetEmployeesNames() {
        String names = employeeList.getEmployeesNames();
        assertEquals("Alice, Bob, Charlie", names);
    }

    @Test
    public void testGetEmployeesNamesWithStream() {
        String names = employeeList.getEmployeesNamesWithStream();
        assertEquals("Alice, Bob, Charlie", names);
    }

    @Test
    public void testGetEmployeesSortedByAge() {
        List<Employee> sorted = employeeList.getEmployeesSortedByAge(0);
        assertEquals("Bob", sorted.get(0).getName());
        assertEquals("Alice", sorted.get(1).getName());
        assertEquals("Charlie", sorted.get(2).getName());
    }

    @Test
    public void testGetEmployeesWithSalaryGreaterThan() {
        List<Employee> result = employeeList.getEmployeesWithSalaryGreaterThan(5500);
        assertEquals(2, result.size());
        assertEquals("Charlie", result.get(0).getName());
        assertEquals("Bob", result.get(1).getName());
    }

    @Test
    public void testGetEmployeesWithSalaryGreaterThan_NoMatch() {
        List<Employee> result = employeeList.getEmployeesWithSalaryGreaterThan(10000);
        assertTrue(result.isEmpty());
    }

    @Test
    public void testGetEmployeesNames_EmptyList() {
        EmployeeList emptyList = new EmployeeList();
        assertEquals("", emptyList.getEmployeesNames());
    }

    @Test
    public void testGetEmployeesNamesWithStream_EmptyList() {
        EmployeeList emptyList = new EmployeeList();
        assertEquals("", emptyList.getEmployeesNamesWithStream());
    }
}