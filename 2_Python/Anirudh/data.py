class Employee:
    def __init__(self, name: str, age: int, salary: float):
        self.name = name
        self.age = age
        self.salary = salary

employee_list = []

employee_list.append(Employee("Alice", 30, 50000.0))
employee_list.append(Employee("Bob", 25, 60000.0))
employee_list.append(Employee("Charlie", 35, 70000.0))
employee_list.append(Employee("David", 28, 55000.0))
employee_list.append(Employee("Eve", 40, 80000.0))
employee_list.append(Employee("Frank", 32, 65000.0))

def get_all_employees_names():
    return [employee.name for employee in employee_list]

def get_maximum_salary():
    return max(employee.salary for employee in employee_list)

def get_employee_with_salary_above(threshold: float):
    return [employee.name for employee in employee_list if employee.salary > threshold]

print("Employee Names:", get_all_employees_names())
print("Maximum Salary:", get_maximum_salary())
print("Employees with Salary Above 60000:", get_employee_with_salary_above(60000))
