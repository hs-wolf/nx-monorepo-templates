import { User, UserCreateParams, UserUpdateParams } from '@nx-monorepo-templates/models';
import { UsersRepositoryPlaceholderDB } from '../repos';
import { apiErrorHandler } from '../util';

export class UsersService {
  private readonly usersRepo = new UsersRepositoryPlaceholderDB();

  async createUser(params: UserCreateParams): Promise<User | null> {
    try {
      return this.usersRepo.createUser(params);
    } catch (error) {
      apiErrorHandler(error);
      return null;
    }
  }

  async getUser(userId: string): Promise<User | null> {
    try {
      return this.usersRepo.getUser(userId);
    } catch (error) {
      apiErrorHandler(error);
      return null;
    }
  }

  async updateUser(userId: string, params: UserUpdateParams): Promise<void> {
    try {
      return this.usersRepo.updateUser(userId, params);
    } catch (error) {
      return apiErrorHandler(error);
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      return this.usersRepo.deleteUser(userId);
    } catch (error) {
      return apiErrorHandler(error);
    }
  }
}
