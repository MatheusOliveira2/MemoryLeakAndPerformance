import { Component, h, Element, State } from '@stencil/core';
import { Consumer } from '@sydle/ui-utils';

@Component({
  tag: 'sy-dle-leak-consumer-list',
  shadow: true,
})
export class LeakConsumerList {
  @Element() el: HTMLElement;
  @State() number = 1;

  private consumer: Consumer;

  componentDidLoad() {
    this.consumer = new Consumer(this.el);
    this.consumer.subscribe('', () => console.log(''), { suppress: true });
  }

  disconnectedCallback() {
    this.consumer.disconnect();
  }

  render() {
    return (
      <div>
        <button onClick={() => (this.number = Math.ceil(Math.random() * 20))}>random</button>
        {[...Array(this.number)].map((_, i) => (
          <sy-dle-leak-consumer key={i}></sy-dle-leak-consumer>
        ))}
      </div>
    );
  }
}
