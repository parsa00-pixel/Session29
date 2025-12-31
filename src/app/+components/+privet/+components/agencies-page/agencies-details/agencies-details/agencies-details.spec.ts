import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesDetails } from './agencies-details';

describe('AgenciesDetails', () => {
  let component: AgenciesDetails;
  let fixture: ComponentFixture<AgenciesDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenciesDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenciesDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
