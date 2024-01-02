/* eslint-disable class-methods-use-this */
import { User, UserCreateParams, UserUpdateParams } from '@nx-monorepo-templates/models';
import type { IUsersRepository } from './IUsersRepository';

export class UsersRepositoryPlaceholderDB implements IUsersRepository {
  async createUser(params: UserCreateParams) {
    const newUser = User.fromMap(params);
    newUser.id = `${Math.random() * 100}`;
    return newUser;
  }

  async getUser(userId: string) {
    const newUser = User.fromMap({ id: userId });
    newUser.username = 'Jon Doe';
    return newUser;
  }

  async updateUser(userId:string, params: UserUpdateParams) {
    // eslint-disable-next-line no-console
    console.log(`Updated ${userId} with params ${params}`);
  }

  async deleteUser(userId: string) {
    // eslint-disable-next-line no-console
    console.log(`Deleted ${userId}`);
  }
}
