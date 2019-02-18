import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBasicExampleComponent } from './simple-basic-example.component';

describe('SimpleBasicExampleComponent', () => {
  let component: SimpleBasicExampleComponent;
  let fixture: ComponentFixture<SimpleBasicExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleBasicExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBasicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
