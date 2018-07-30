import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridviewComponent } from './datagridview.component';

describe('DatagridviewComponent', () => {
  let component: DatagridviewComponent;
  let fixture: ComponentFixture<DatagridviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagridviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
