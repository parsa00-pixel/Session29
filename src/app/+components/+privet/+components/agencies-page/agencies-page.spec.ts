import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesPage } from './agencies-page';

describe('AgenciesPage', () => {
  let component: AgenciesPage;
  let fixture: ComponentFixture<AgenciesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenciesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
