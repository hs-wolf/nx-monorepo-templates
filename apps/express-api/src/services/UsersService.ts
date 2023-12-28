export interface User {
    id: number;
    email: string;
    name: string;
    status?: 'Happy' | 'Sad';
    phoneNumbers: string[];
  }

export type UserCreationParams = Pick<User, 'email' | 'name' | 'phoneNumbers'>;

export class UsersService {
  private user: User = {
    id: 12345,
    email: 'jane@doe.com',
    name: 'Jane Doe',
    status: 'Happy',
    phoneNumbers: [],
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
      this.user.status = 'Happy';
    }
    return this.user;
  }
}
