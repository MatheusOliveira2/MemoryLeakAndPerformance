import { Component, Element, h, Host } from '@stencil/core';

@Component({
  tag: 'sy-dle-listener-leak',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class ListenerLeak {
  @Element() el: HTMLElement;

  componentDidLoad() {
    window.addEventListener('resize', this.onResize);

    // window.addEventListener('resize', () => {console.log('resize...')})
  }

  // disconnectedCallback() {
  //   window.removeEventListener('resize', this.onResize);
  // }

  onResize = () => {
    console.log('resize...');
  };

  render() {
    return <Host>Elemento com listener</Host>;
  }
}
