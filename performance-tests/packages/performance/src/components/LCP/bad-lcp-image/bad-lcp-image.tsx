import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sy-dle-bad-lcp-image',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class BadLCPImage {
  render() {
    return (
      <Host>
        <img src="https://picsum.photos/id/237/5000" alt=""/>

        <sy-text>
          Bad LCP
        </sy-text>

        <sy-text>
          Conteudo de texto aqui
        </sy-text>

      </Host>
    );
  }
}
