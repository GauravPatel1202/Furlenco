import { TestBed } from '@angular/core/testing';

import { LocationserviceService } from './locationservice.service';

describe('LocationserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationserviceService = TestBed.get(LocationserviceService);
    expect(service).toBeTruthy();
  });
});
