export interface User {
  id: number;
  name: string;
}

export type UserCreationParams = Pick<User, 'name'>;

export type UserCreationParamsRequest = Pick<UserCreationParams, 'name'>;
