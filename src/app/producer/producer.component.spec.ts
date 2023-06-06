import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ProducerComponent } from './producer.component';
import { MatInputHarness } from '@angular/material/input/testing'
import { MatButtonHarness } from '@angular/material/button/testing';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/mat/mat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

let loader: HarnessLoader;

describe('ProducerComponent', () => {
  let component: ProducerComponent;
  let fixture: ComponentFixture<ProducerComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducerComponent ],
      imports: [ReactiveFormsModule , FormsModule, MaterialModule, BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render evnet form field one', async () => {
    const matFormField = await loader.getAllHarnesses(MatInputHarness.with({selector: '#eventOne'}));
    expect(matFormField.length).toBe(1);
  });

  it('should render material form field two', async () => {
    const matFormField = await loader.getAllHarnesses(MatInputHarness.with({selector: '#eventTwo'}));
    expect(matFormField.length).toBe(1);
  });

  it('should render material form field three', async () => {
    const matFormField = await loader.getAllHarnesses(MatInputHarness.with({selector: '#eventThree'}));
    expect(matFormField.length).toBe(1);
  });

  it('should render material button for submit', async () => {
    const matBtnField = await loader.getAllHarnesses(MatButtonHarness.with({selector: '#eventSubmit'}));
    expect(matBtnField.length).toBe(1);
  });

});
