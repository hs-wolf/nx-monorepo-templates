import type { User, UserCreateParams, UserUpdateParams } from '@nx-monorepo-templates/models';

export interface IUsersRepository {
  createUser(params: UserCreateParams): Promise<User | null>

  getUser(userId: string): Promise<User | null>

  updateUser(userId: string, params: UserUpdateParams): Promise<void>

  deleteUser(userId: string): Promise<void>
}
