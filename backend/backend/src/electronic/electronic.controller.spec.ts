import { Test, TestingModule } from '@nestjs/testing';
import { ElectronicController } from './electronic.controller';

describe('ElectronicController', () => {
  let controller: ElectronicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElectronicController],
    }).compile();

    controller = module.get<ElectronicController>(ElectronicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
