import { TestBed } from '@angular/core/testing';

import { AuthentificationRepository } from './authentification-repository';

describe('AuthentificationRepository', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthentificationRepository = TestBed.get(AuthentificationRepository);
    expect(service).toBeTruthy();
  });
});
