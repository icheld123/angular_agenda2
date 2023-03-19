import { TestBed } from '@angular/core/testing';

import { AnimalesService } from './httpgeneral.service';

describe('HttpgeneralService', () => {
  let service: AnimalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
