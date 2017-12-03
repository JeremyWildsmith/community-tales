import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteNextPageComponent } from './write-next-page.component';

describe('WriteNextPageComponent', () => {
  let component: WriteNextPageComponent;
  let fixture: ComponentFixture<WriteNextPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteNextPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteNextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
