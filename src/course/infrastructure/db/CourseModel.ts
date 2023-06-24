import { Model, DataTypes } from 'sequelize'
import { postgresConnection } from './DBConnection';
import {CourseEntity } from '../../domain/entity/CourseEntity'
export class Course extends Model implements CourseEntity{
    declare id: number;
    declare title: string;
    declare description: string;
    declare imgs: [];
    declare topics_ids:[];
    declare exercises_ids: [];
    declare tests_ids: [];
};

Course.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    imgs: DataTypes.ARRAY(DataTypes.STRING),
    topics_ids:DataTypes.ARRAY(DataTypes.INTEGER),
    exercises_ids: DataTypes.ARRAY(DataTypes.INTEGER),
    tests_ids: DataTypes.ARRAY(DataTypes.INTEGER),
}, { sequelize: postgresConnection, modelName: 'courses' });
