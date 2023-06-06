import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import { PublishedEvent } from './eventmessage';
import { EventBusService } from './eventservice.service';


describe('EventbusService', () => {
  let service: EventBusService;
  let fixture: ComponentFixture<EventBusService>;
  const publishedEvent: PublishedEvent = new PublishedEvent('','','');


  beforeEach(() => {

    TestBed.configureTestingModule({});
    service = TestBed.inject(EventBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('On init users should be loaded', fakeAsync(() => {
    spyOn(service, 'subscribe').and.returnValue(of(publishedEvent).pipe(delay(1)));

    // Trigger ngOnInit()
    fixture.detectChanges();
    expect(service.subscribe('event1')).toHaveBeenCalledWith();

    // Simulates the asynchronous passage of time
    tick(1);
}));
});
