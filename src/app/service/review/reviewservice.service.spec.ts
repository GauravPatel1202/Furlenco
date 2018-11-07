import { TestBed } from '@angular/core/testing';

import { ReviewserviceService } from './reviewservice.service';

describe('ReviewserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewserviceService = TestBed.get(ReviewserviceService);
    expect(service).toBeTruthy();
  });
});
