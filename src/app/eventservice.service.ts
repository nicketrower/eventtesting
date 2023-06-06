import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter } from "rxjs/operators";
import { PublishedEvent } from './eventmessage';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private eventBus: Subject<PublishedEvent> = new Subject<PublishedEvent>();

  publish(event: PublishedEvent): void {
    console.log(event);
    this.eventBus.next(event);
  }

  subscribe(eventName: string): Observable<PublishedEvent> {
    return this.eventBus.asObservable().pipe(
      filter((event: PublishedEvent) => event.name === eventName));
  }
}
