import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const authHeader = request.headers.authorization;
    if (!authHeader) throw new UnauthorizedException('No token');

    const token = authHeader.split(' ')[1];

    try {
      const decoded = this.jwtService.verify(token);

      if (decoded.role !== 'admin') {
        throw new UnauthorizedException('Admins only');
      }

      return true;
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}