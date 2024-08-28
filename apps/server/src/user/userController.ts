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
import { User, UserCreationParamsRequest } from '@nx-monorepo-templates/models';
import { UserService } from './userService';

@Route('user')
export class UserController extends Controller {
  @Get('{userId}')
  public async getUser(
    @Path() userId: number,
    @Query() name?: string
  ): Promise<User> {
    return new UserService().get(userId, name);
  }

  @SuccessResponse('201', 'Created')
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParamsRequest
  ): Promise<void> {
    this.setStatus(201);
    new UserService().create(requestBody);
    return;
  }
}
