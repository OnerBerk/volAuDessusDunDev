'use strict';
import { IUser } from '../../interfaces/interfaces';

const { Model } = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<IUser> implements IUser {
    id!: number;
    firstname!: string;
    lastname!: string;
    email!: string;
    password!: string;

    static associate(models: any) {
      User.belongsToMany(models.Project, {
        through: 'user_project'
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      lastname: { type: DataTypes.STRING, allowNull: false },
      firstname: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};
//  npx sequelize-cli model:generate --name user_project --attributes ProjectId:integer
