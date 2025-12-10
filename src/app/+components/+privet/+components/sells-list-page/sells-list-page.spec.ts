import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellsListPage } from './sells-list-page';

describe('SellsListPage', () => {
  let component: SellsListPage;
  let fixture: ComponentFixture<SellsListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellsListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
