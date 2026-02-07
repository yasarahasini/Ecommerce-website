import { Test, TestingModule } from '@nestjs/testing';
import { ElectronicService } from './electronic.service';

describe('ElectronicService', () => {
  let service: ElectronicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElectronicService],
    }).compile();

    service = module.get<ElectronicService>(ElectronicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
