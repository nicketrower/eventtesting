import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../material/mat/mat.module';

import { ConsumerComponent } from './consumer.component';

describe('ConsumerComponent', () => {
  let component: ConsumerComponent;
  let fixture: ComponentFixture<ConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerComponent ],
      imports: [MaterialModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
