import { TestBed, inject } from '@angular/core/testing';

import { AddCustomersService } from './add-customers.service';

describe('AddCustomersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddCustomersService]
    });
  });

  it('should be created', inject([AddCustomersService], (service: AddCustomersService) => {
    expect(service).toBeTruthy();
  }));
});
