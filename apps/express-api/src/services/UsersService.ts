import { User } from '@nx-monorepo-templates/models'

export type UserCreationParams = Pick<User, 'name'>;

export class UsersService {
  private user: User = {
    id: 12345,
    name: 'Jane Doe',
  };

  public get(id: number, name?: string): User {
    if (id) {
      this.user.id = id;
    }
    if (name) {
      this.user.name = name;
    }
    return this.user;
  }

  public create(userCreationParams: UserCreationParams): User {
    if (userCreationParams) {
      this.user.id = Math.floor(Math.random() * 10000);
    }
    return this.user;
  }
}
