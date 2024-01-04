import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Route,
  Tags,
} from 'tsoa';
import {
  User,
  UserCreateParams,
  UserUpdateParams,
} from '@nx-monorepo-templates/models';
import { UsersService } from '../services';

@Tags('Users')
@Route('users')
export class UsersController extends Controller {
  private readonly usersService = new UsersService();

  @Post('/')
  public async createUser(@Body() params: UserCreateParams): Promise<User> {
    return this.usersService.createUser(params);
  }

  @Get('{userId}')
  public async getUser(@Path() userId: string): Promise<User> {
    return this.usersService.getUser(userId);
  }

  @Put('{userId}')
  public async updateUser(
    @Path() userId: string,
    @Body() params: UserUpdateParams,
  ): Promise<void> {
    return this.usersService.updateUser(userId, params);
  }

  @Delete('{userId}')
  public async deleteUser(@Path() userId: string): Promise<void> {
    return this.usersService.deleteUser(userId);
  }
}
