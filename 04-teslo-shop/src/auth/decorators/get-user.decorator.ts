import {
  ExecutionContext,
  InternalServerErrorException,
  createParamDecorator,
} from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const user = req.user;

    if (data === 'email') return user.email;
    if (!user)
      throw new InternalServerErrorException(`User not found  (request)`);

    return user;
  },
);
