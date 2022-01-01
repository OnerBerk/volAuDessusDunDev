export interface IUser {
  id?: number;
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IProject {
  id?: number;
  title: string;
  status: string;
}

export interface Iuser_project {
  ProjectId: number;
  UserId: number;
}
