import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceMakerComponent } from './space-maker.component';

describe('SpaceMakerComponent', () => {
  let component: SpaceMakerComponent;
  let fixture: ComponentFixture<SpaceMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
