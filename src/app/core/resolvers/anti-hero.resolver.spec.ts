import { TestBed } from '@angular/core/testing';

import { AntiHeroResolver } from './anti-hero.resolver';

describe('AntiHeroResolver', () => {
  let resolver: AntiHeroResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AntiHeroResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
