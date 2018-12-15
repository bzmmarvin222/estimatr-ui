import { TestBed } from '@angular/core/testing';

import { ProjectCreationService } from './project-creation.service';

describe('ProjectCreationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectCreationService = TestBed.get(ProjectCreationService);
    expect(service).toBeTruthy();
  });
});
