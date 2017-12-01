import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadStoryPageComponent } from './read-story-page.component';

describe('ReadStoryPageComponent', () => {
  let component: ReadStoryPageComponent;
  let fixture: ComponentFixture<ReadStoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadStoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadStoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
