import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdrivesListComponent } from './testdrives-list.component';

describe('TestdrivesListComponent', () => {
  let component: TestdrivesListComponent;
  let fixture: ComponentFixture<TestdrivesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdrivesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdrivesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
