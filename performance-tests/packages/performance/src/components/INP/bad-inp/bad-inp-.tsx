import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'sy-dle-bad-inp',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class BadInp {
  @State() message = 'Clique no botão';

  private handleClick = () => {
    // Simula um processamento pesado (bloqueia a main thread)
    const start = performance.now();
    while (performance.now() - start < 2000) {
      // trava por 2 segundos
    }

    this.message = 'Processado!';
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