import { TestBed } from '@angular/core/testing';

import { AutenticService } from './autentic.service';

describe('AutenticService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenticService = TestBed.get(AutenticService);
    expect(service).toBeTruthy();
  });
});
