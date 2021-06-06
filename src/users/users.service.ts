import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        cpf: createUserDto.cpf,
        email: createUserDto.email,
        name: createUserDto.name,
        phone: createUserDto.phone,
        skills: createUserDto.skills,
      },
    });
  }

  async findByName(name: string) {
    const users = await this.prisma.user.findMany({});

    return users.find((u) => u.name === name);
  }

  async findAll() {
    return await this.prisma.user.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  async update(id: string, body: UpdateUserDto) {
    return await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...body,
      },
    });
  }
}
