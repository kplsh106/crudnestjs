import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { EmployeeModule } from './employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'kapil',
      password: 'kakump',
      database: 'userdatabase',
      entities: [Employee]
      
    }),    
      EmployeeModule,
  


  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
