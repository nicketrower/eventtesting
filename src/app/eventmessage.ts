export interface PublishedEvent {
  producer: string;
  name: string;
  payload: string;
}

export class PublishedEvent {
  constructor(producer: string, name:string , payload:string) {
   this. producer = producer,
    this.name = name,
    this.payload = payload
  }
}
