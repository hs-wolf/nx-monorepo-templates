import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from 'tsoa';
import { UsersService, UserCreationParams, User } from '../services/UsersService';

@Route('users')
export class UsersController extends Controller {
  private userService = new UsersService();

  @Get('{userId}')
  public async getUser(
      @Path() userId: number,
      @Query() name?: string,
  ): Promise<User> {
    return this.userService.get(userId, name);
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(@Body() requestBody: UserCreationParams): Promise<void> {
    this.setStatus(201);
    this.userService.create(requestBody);
  }
}
