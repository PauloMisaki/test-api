import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Res() res: Response, @Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const newUser = await this.usersService.create(createUserDto);
    res.status(HttpStatus.CREATED).json(newUser);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const users = await this.usersService.findAll();
    res.status(HttpStatus.OK).json(users);
  }

  @Get('/:name')
  async findByName(@Res() res: Response, @Param('name') name: string) {
    const user = await this.usersService.findByName(name);
    res.status(HttpStatus.OK).json(user);
  }

  @Patch(':id')
  async update(
    @Res() res: Response,
    @Body() body: UpdateUserDto,
    @Param('id') id: string,
  ) {
    const updatedUser = this.usersService.update(id, body);
    res.status(HttpStatus.OK).json(updatedUser);
  }
}
