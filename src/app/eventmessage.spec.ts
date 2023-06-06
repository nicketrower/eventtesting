import { PublishedEvent } from './eventmessage';

describe('Eventmessage', () => {
  it('should create an instance', () => {
    expect(new PublishedEvent('','','')).toBeTruthy();
  });
});
