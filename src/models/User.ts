import { UserType } from './UserType';

export type User = {
  firstName: string;
  surname: string;
  email: string;
  type: UserType;
  password: string;
};
