import { Component, Element, h, Host } from '@stencil/core';

@Component({
  tag: 'sy-dle-window-leak',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class WindowLeak {
  @Element() el: HTMLElement;

  componentDidLoad() {
    (window as any).leak = this.el;
  }

  render() {
    return <Host>Elemento no window</Host>;
  }
}
