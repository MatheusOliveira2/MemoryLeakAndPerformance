import { Component, h, State } from '@stencil/core';
import { expensiveTask } from '../../../test.worker';

@Component({
  tag: 'sy-dle-ideal-inp',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class IdealInp {
  @State() message = 'Clique no botão';

  private handleClick = async () => {

    this.message = 'Processando...';
    await expensiveTask();
    this.message = "Processado!"
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