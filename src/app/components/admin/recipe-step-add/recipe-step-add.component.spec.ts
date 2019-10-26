import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeStepAddComponent } from './recipe-step-add.component';

describe('RecipeStepAddComponent', () => {
  let component: RecipeStepAddComponent;
  let fixture: ComponentFixture<RecipeStepAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeStepAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeStepAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
