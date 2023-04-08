import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
export declare class EmployeeService {
    private employeeRepo;
    constructor(employeeRepo: Repository<Employee>);
    findAll(): Promise<Employee[]>;
    create(newEmployee: Employee): void;
}
