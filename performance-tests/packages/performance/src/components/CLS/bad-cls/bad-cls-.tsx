import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'sy-dle-bad-cls',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class BadCLS {
  @State() showAd = false;
  @State() hover = false

  componentDidLoad() {
    // Simula carregamento tardio de um banner (como um ad ou aviso)
    setTimeout(() => {
      this.showAd = true;
    }, 2000);
  }

  render() {
    return (
      <div>
        {this.showAd && (
          <div class="ad-banner">🔥 Promoção relâmpago!</div>
        )}
        <h1>Bem-vindo à página!</h1>
        <p>Esse é o conteúdo principal que o usuário quer ver.</p>
        {this.hover && (
          <div class="ad-banner">🔥 Promoção relâmpago!</div>
        )}
        <button onMouseEnter={()=> this.hover = true}>Clique aqui!</button>
      </div>
    );
  }
}