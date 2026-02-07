import { Test, TestingModule } from '@nestjs/testing';
import { WomenController } from './women.controller';

describe('WomenController', () => {
  let controller: WomenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WomenController],
    }).compile();

    controller = module.get<WomenController>(WomenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
