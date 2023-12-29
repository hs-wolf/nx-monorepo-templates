import { Inject } from 'typescript-ioc';
import { User } from '@nx-monorepo-templates/models';
import {
  Controller,
  Get,
  Path,
  Route,
} from 'tsoa';
import { UsersService } from '../services/UsersService';

@Route('users')
export class UsersController extends Controller {
  @Inject
  _userService: UsersService;

  @Get('{userId}')
  public async getUser(@Path() userId: number): Promise<User> {
    try {
      return this._userService.getUser(userId);
    } catch (error) {
     console.log(error) 
    }
  }
}
