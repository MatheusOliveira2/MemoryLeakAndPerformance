import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sy-dle-example',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class Example {
  render() {
    return (
      <Host>
        <sy-text>
          Performance & Memory Leak
        </sy-text>
      </Host>
    );
  }
}
