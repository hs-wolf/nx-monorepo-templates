export interface User {
  id: number;
  name: string;
}

export type UserCreationParams = Pick<User, 'name'>;