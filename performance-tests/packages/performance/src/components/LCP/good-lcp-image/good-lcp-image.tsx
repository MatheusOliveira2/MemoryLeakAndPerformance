import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sy-dle-good-lcp-image',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class GoodLCPImage {
  render() {
    return (
      <Host>
        <img src="https://picsum.photos/id/237/600" alt="" height={400} width={400}/>

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
