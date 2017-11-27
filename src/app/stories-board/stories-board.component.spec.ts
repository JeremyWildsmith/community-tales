import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesBoardComponent } from './stories-board.component';

describe('StoriesBoardComponent', () => {
  let component: StoriesBoardComponent;
  let fixture: ComponentFixture<StoriesBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
