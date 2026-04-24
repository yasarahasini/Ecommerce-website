import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './signup.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  // ✅ Signup
  async signup(dto: SignupDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = this.userRepo.create({
      fullName: dto.fullName,
      email: dto.email,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      password: hashedPassword,
    });

    await this.userRepo.save(user);

    return { message: 'User created successfully' };
  }

  // ✅ Login (Admin + User)
  async login(dto: LoginDto) {

    // 🔐 Admin login (hardcoded)
    if (dto.email === 'yasara' && dto.password === '1234567') {
      const payload = { sub: 'admin', role: 'admin' };

      return {
        access_token: this.jwtService.sign(payload),
        role: 'admin',
      };
    }

    // 👤 User login
    const user = await this.userRepo.findOne({
      where: { email: dto.email },
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const payload = {
      sub: user.id,
      email: user.email,
      role: 'user',
    };

    return {
      access_token: this.jwtService.sign(payload),
      role: 'user',
    };
  }
}