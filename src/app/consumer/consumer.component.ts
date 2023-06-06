import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../eventservice.service';
import { PublishedEvent } from '../eventmessage';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.sass']
})
export class ConsumerComponent implements OnInit {
  receivedDataEvent1: PublishedEvent = new PublishedEvent('','','');
  receivedDataEvent2: PublishedEvent  = new PublishedEvent('','','');
  receivedDataEvent3: PublishedEvent = new PublishedEvent('','','');

  constructor(private eventBusService: EventBusService) {}

  ngOnInit(): void {
    this.eventBusService.subscribe('event2').subscribe((eventData: PublishedEvent) => {
      this.receivedDataEvent2 = eventData;
    });

    this.eventBusService.subscribe('event1').subscribe((eventData: PublishedEvent) => {
      this.receivedDataEvent1 = eventData;
      console.log(this.receivedDataEvent1);
    });

    this.eventBusService.subscribe('event3').subscribe((eventData: PublishedEvent) => {
      this.receivedDataEvent3 = eventData;
    });
  }
}
