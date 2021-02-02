import { TestBed } from '@angular/core/testing';

import { DataAlgoritmosService } from './data-algoritmos.service';

describe('DataAlgoritmosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataAlgoritmosService = TestBed.get(DataAlgoritmosService);
    expect(service).toBeTruthy();
  });
});
