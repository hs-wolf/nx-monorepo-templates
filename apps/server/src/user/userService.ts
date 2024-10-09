import { User, UserCreationParams } from '@nx-monorepo-templates/models';

export class UserService {
  public get(id: number, name?: string): User {
    return {
      id,
      name: name ?? 'Jane Doe',
    };
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000),
      ...userCreationParams,
    };
  }
}
