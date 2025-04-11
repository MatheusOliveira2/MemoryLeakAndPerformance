import { Component, Element, h, Host } from '@stencil/core';

@Component({
  tag: 'sy-dle-listener-leak-list',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class ListenerLeakList {
  @Element() el: HTMLElement;

  render() {
    return (
      <Host>
        {[...Array(200)].map((_, i) => (
          <sy-dle-listener-leak key={i}></sy-dle-listener-leak>
        ))}
      </Host>
    );
  }
}
