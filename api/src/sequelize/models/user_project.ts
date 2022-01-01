'use strict';
import { Model } from 'sequelize';
import { Iuser_project } from '../../interfaces/interfaces';

module.exports = (sequelize: any, DataTypes: any) => {
  class user_project extends Model<Iuser_project> implements Iuser_project {
    ProjectId!: number;
    UserId!: number;
    static associate(models: any) {
      // define association here
    }
  }
  user_project.init(
    {
      ProjectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Projects',
          key: 'id'
        }
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'user_project'
    }
  );
  return user_project;
};
