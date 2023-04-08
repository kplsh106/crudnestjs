import {Controller,Get, HttpCode, Post, Body, Logger} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';


@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}
 
    @Get('all')
    async getAll():Promise<Employee[]>{
        return await this.employeeService.findAll();
    }

    @Post("add") 
    @HttpCode(201)
    createEmployee(@Body() newEmployee:any)  {
        this.employeeService.create(newEmployee);
        Logger.log("creating a new row");

    }


}