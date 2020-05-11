import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdrivePreviewComponent } from './testdrive-preview.component';

describe('TestdrivePreviewComponent', () => {
  let component: TestdrivePreviewComponent;
  let fixture: ComponentFixture<TestdrivePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdrivePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdrivePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
