import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'sy-dle-good-cls',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class GoodCLS {
  @State() showAd = false;

  componentDidLoad() {
    setTimeout(() => {
      this.showAd = true;
    }, 2000);
  }

  render() {
    return (
      <div>
        <div class="ad-placeholder">
          {this.showAd ? (
            <div class="ad-banner">🔥 Promoção relâmpago!</div>
          ) : null}
        </div>
        <h1>Bem-vindo à página!</h1>
        <p>Esse é o conteúdo principal que o usuário quer ver.</p>
        <button>Clique aqui!</button>

      </div>
    );
  }
}