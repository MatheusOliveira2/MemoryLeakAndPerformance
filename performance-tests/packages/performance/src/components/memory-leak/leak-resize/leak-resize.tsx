import { Component, h, Element, State } from '@stencil/core';
import { Consumer } from '@sydle/ui-utils';

@Component({
  tag: 'sy-dle-leak-consumer',
  shadow: true,
})
export class LeakConsumer {
  @Element() el: HTMLElement;
  @State() count = 0;

  private consumer: Consumer;

  componentDidLoad() {
    this.consumer = new Consumer(this.el);

    this.consumer.subscribe('', () => console.log(''), { suppress: true });
  }

  render() {
    return (
      <div>
        <div>item</div>
      </div>
    );
  }
}
