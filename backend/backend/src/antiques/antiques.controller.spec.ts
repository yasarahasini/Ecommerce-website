import { Test, TestingModule } from '@nestjs/testing';
import { AntiquesController } from './antiques.controller';

describe('AntiquesController', () => {
  let controller: AntiquesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AntiquesController],
    }).compile();

    controller = module.get<AntiquesController>(AntiquesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
