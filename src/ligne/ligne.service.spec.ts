import { Test, TestingModule } from '@nestjs/testing';
import { LigneService } from './ligne.service';

describe('LigneService', () => {
  let service: LigneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LigneService],
    }).compile();

    service = module.get<LigneService>(LigneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
