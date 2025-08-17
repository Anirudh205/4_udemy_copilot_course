package com.practice;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class EmployeeList {

    private List<Employee> employees = new ArrayList<>();

    public List<Employee> getEmployees() {
        return employees;
    }

    public void addEmployee(Employee employee) {
        employees.add(employee);
    }

    public void removeEmployee(Employee employee){
        employees.remove(employee);
    }

    public String getEmployeesNames(){
        StringBuilder names = new StringBuilder();
        for (Employee employee : employees) {
            if (names.length() > 0) {
                names.append(", ");
            }
            names.append(employee.getName());
        }
        return names.toString();
    }

    public String getEmployeesNamesWithStream() {
        return employees.stream()
                .map(Employee::getName)
                .collect(Collectors.joining(", "));
    }

    public List<Employee> getEmployeesSortedByAge(int age) {
        employees.sort((e1, e2) -> Integer.compare(e1.getAge(), e2.getAge()));
        return employees;
    }

    public List<Employee> getEmployeesWithSalaryGreaterThan(int salary) {
        return employees.stream()
                .filter(employee -> employee.getSalary() > salary)
                .sorted(Comparator.comparingInt(Employee::getSalary))
                .collect(Collectors.toList());
    }
}
