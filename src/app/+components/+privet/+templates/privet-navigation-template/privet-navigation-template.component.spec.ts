import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivetNavigationTemplateComponent } from './privet-navigation-template.component';

describe('PrivetNavigationTemplateComponent', () => {
  let component: PrivetNavigationTemplateComponent;
  let fixture: ComponentFixture<PrivetNavigationTemplateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PrivetNavigationTemplateComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivetNavigationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
