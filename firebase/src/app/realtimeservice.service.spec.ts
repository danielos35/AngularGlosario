import { TestBed } from '@angular/core/testing';

import { RealtimeserviceService } from './realtimeservice.service';

describe('RealtimeserviceService', () => {
  let service: RealtimeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealtimeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
