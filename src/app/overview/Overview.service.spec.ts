import { TestBed, inject } from '@angular/core/testing';

import { OverviewService } from './Overview.service';

describe('OverviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OverviewService]
    });
  });

  it('should be created', inject([OverviewService], (service: OverviewService) => {
    expect(service).toBeTruthy();
  }));
});
