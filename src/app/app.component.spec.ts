import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { ProducerComponent } from './producer/producer.component';
import { MaterialModule } from './material/mat/mat.module';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, MaterialModule],
    declarations: [AppComponent, ConsumerComponent, ProducerComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
