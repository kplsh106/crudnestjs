import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'username' })
export class Employee {
    @PrimaryColumn({name: 'id'})
    id: number;

    @Column({name: 'active'})
    active: boolean;

    @Column({name: 'password'}) 
    password: string;

    @Column({name : 'roles'}) 
    roles: string;

    @Column({name: 'user_name'}) 
    user_name : string;

    

}

/*
  Column   |          Type          | Collation | Nullable | Default 
-----------+------------------------+-----------+----------+---------
 id        | integer                |           | not null | 
 active    | boolean                |           | not null | 
 password  | character varying(100) |           | not null | 
 roles     | character varying(255) |           | not null | 
 user_name | character varying(255) |           | not null | 
Indexes:
 

*/