import { Test, TestingModule } from '@nestjs/testing';
import { LigneController } from './ligne.controller';

describe('LigneController', () => {
  let controller: LigneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LigneController],
    }).compile();

    controller = module.get<LigneController>(LigneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
