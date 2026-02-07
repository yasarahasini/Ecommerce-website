import { Test, TestingModule } from '@nestjs/testing';
import { WomenService } from './women.service';

describe('WomenService', () => {
  let service: WomenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WomenService],
    }).compile();

    service = module.get<WomenService>(WomenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
