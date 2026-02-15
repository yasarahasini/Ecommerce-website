import { Test, TestingModule } from '@nestjs/testing';
import { AntiquesService } from './antiques.service';

describe('AntiquesService', () => {
  let service: AntiquesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AntiquesService],
    }).compile();

    service = module.get<AntiquesService>(AntiquesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
