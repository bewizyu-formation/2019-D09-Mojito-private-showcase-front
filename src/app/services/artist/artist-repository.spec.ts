import { TestBed } from '@angular/core/testing';

import { ArtistRepository } from './artist-repository';

describe('ArtistRepository', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistRepository = TestBed.get(ArtistRepository);
    expect(service).toBeTruthy();
  });
});
