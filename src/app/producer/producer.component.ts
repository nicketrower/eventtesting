import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventBusService } from '../eventservice.service';
import { PublishedEvent } from '../eventmessage';


@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.sass']

})
export class ProducerComponent {
  myForm : FormGroup;

  constructor(private eventBusService: EventBusService) {
    this.myForm = new FormGroup({
      EventOne: new FormControl('EventOne'),
      EventTwo: new FormControl('EventTwo'),
      EventThree: new FormControl('EventThree')
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('EventOne', form.value.EventOne);
    console.log('EventTwo', form.value.EventTwo);
    console.log('EventThree', form.value.EventThree);
    console.log(new PublishedEvent( 'event1', 'producerComponent', form.value.EventOne));
    this.eventBusService.publish(new PublishedEvent( 'producerComponent', 'event1', form.value.EventOne));
    this.eventBusService.publish(new PublishedEvent( 'producerComponent', 'event2', form.value.EventTwo));
    this.eventBusService.publish(new PublishedEvent( 'producerComponent', 'event3', form.value.EventThree));
  }
}
