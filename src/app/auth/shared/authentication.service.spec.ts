import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

xdescribe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('Firebase Authentication', () => {
    expect(service).toBeTruthy();
  });
});
