import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'sy-dle-bad-render',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class BadRender {
  @State() dummyTrigger = 0;

  private forceRerender = () => {
    this.dummyTrigger++; // Altera estado sem propósito útil
  };

  render() {
    console.log('Render do PAI');

    const values = [...Array(500)].map((_, i) => ({ id: i }));

    return (
      <div>
        <button onClick={this.forceRerender}>Forçar Re-render</button>
        <div class="list">
          {values.map((value, i) => (
            <sy-dle-list-item value={value} key={i} ></sy-dle-list-item>
          ))}
        </div>
      </div>
    );
  }
}