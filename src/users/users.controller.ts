import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':bot_user_id')
  findOne(@Param('bot_user_id') id: string) {
    return this.usersService.findOne(id);
  }
}
