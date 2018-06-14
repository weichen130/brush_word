import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DouyuComponent } from './douyu.component';

describe('DouyuComponent', () => {
  let component: DouyuComponent;
  let fixture: ComponentFixture<DouyuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DouyuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DouyuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
