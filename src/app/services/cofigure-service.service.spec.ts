import { TestBed } from '@angular/core/testing';

import { CofigureServiceService } from './cofigure-service.service';

describe('CofigureServiceService', () => {
  let service: CofigureServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CofigureServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
