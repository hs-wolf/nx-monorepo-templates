import { Singleton } from 'typescript-ioc';
import { User } from '@nx-monorepo-templates/models'

@Singleton
export class UsersService {
  public getUser(id: number): User {
    const name = 'Jane Doe'
    const newUser: User = { id, name }
    return newUser;
  }
}
