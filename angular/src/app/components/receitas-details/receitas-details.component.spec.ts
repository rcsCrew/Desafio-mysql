import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasDetailsComponent } from './receitas-details.component';

describe('ReceitasDetailsComponent', () => {
  let component: ReceitasDetailsComponent;
  let fixture: ComponentFixture<ReceitasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceitasDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceitasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
