import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'sy-dle-good-inp',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class GoodInp {
  @State() message = 'Clique no botão';

  private handleClick = () => {
    // 🔥 Fornece feedback imediato
    this.message = 'Processando...';

    // 🧠 Adia o trabalho pesado pro próximo ciclo da event loop
    setTimeout(() => {
      const start = performance.now();
      while (performance.now() - start < 2000) {
        // simula tarefa pesada (mas agora não bloqueia o clique)
      }

      this.message = 'Processado!';
    }, 0);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Clique aqui</button>
        <p>{this.message}</p>
      </div>
    );
  }
}