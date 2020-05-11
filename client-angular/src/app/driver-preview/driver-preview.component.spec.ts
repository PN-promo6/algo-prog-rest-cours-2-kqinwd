import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPreviewComponent } from './driver-preview.component';

describe('DriverPreviewComponent', () => {
  let component: DriverPreviewComponent;
  let fixture: ComponentFixture<DriverPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
