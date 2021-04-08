import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { FetchingService } from './fetching.service';

describe('FetchingService', () => {
  let service: FetchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({      
      
      imports: [HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();
    service = TestBed.inject(FetchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
