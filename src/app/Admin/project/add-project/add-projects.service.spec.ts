import { TestBed, inject } from '@angular/core/testing';

import { AddProjectsService } from './add-projects.service';

describe('AddProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddProjectsService]
    });
  });

  it('should be created', inject([AddProjectsService], (service: AddProjectsService) => {
    expect(service).toBeTruthy();
  }));
});
