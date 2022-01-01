'use strict';
const { Model } = require('sequelize');
import { IProject } from '../../interfaces/interfaces';

module.exports = (sequelize: any, DataTypes: any) => {
  class Project extends Model<IProject> implements IProject {
    id!: number;
    title!: string;
    status!: string;
    static associate(models: any) {
      Project.belongsToMany(models.User, {
        through: 'user_project'
      });
    }
  }
  Project.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titles: { type: DataTypes.STRING, allowNull: false },
      status: { type: DataTypes.STRING, allowNull: false }
    },
    {
      sequelize,
      modelName: 'Project'
    }
  );
  return Project;
};
