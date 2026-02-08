import { Test, TestingModule } from '@nestjs/testing';
import { MenService } from './men.service';

describe('MenService', () => {
  let service: MenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenService],
    }).compile();

    service = module.get<MenService>(MenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
