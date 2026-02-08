import { Test, TestingModule } from '@nestjs/testing';
import { MenController } from './men.controller';

describe('MenController', () => {
  let controller: MenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenController],
    }).compile();

    controller = module.get<MenController>(MenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
