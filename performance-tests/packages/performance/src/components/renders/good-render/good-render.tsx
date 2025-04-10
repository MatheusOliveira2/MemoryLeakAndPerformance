import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'sy-dle-good-render',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class GoodRender {
  @State() dummyTrigger = 0;

  private forceRerender = () => {
    this.dummyTrigger++; // Altera estado sem propósito útil
  };

  private values = [...Array(500)].map((_, i) => ({ id: i }));


  render() {
    console.log('Render do PAI');
    return (
      <div>
        <button onClick={this.forceRerender}>Forçar Re-render</button>
        <div class="list">
          {this.values.map((value, i) => (
            <sy-dle-list-item value={value} key={i} ></sy-dle-list-item>
          ))}
        </div>
      </div>
    );
  }
}