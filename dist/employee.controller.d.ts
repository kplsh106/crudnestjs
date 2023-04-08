import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    getAll(): Promise<Employee[]>;
    createEmployee(newEmployee: any): void;
}
