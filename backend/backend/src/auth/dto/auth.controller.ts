import { Controller, Get, UseGuards } from '@nestjs/common';
import { AdminGuard } from './admin.guard';

@Controller('admin')
export class AdminController {

  @UseGuards(AdminGuard)
  @Get('dashboard')
  getDashboard() {
    return {
      message: 'Welcome Admin Dashboard 🚀',
    };
  }
}