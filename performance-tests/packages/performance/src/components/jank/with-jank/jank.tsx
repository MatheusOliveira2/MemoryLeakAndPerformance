import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'sy-dle-jank',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class Jank {
  @Element() el: HTMLElement;

  private boxEl: HTMLElement;
  private position = 0;
  private direction = 1;
  private intervalId: any;

  componentDidLoad() {
    this.boxEl = this.el.shadowRoot?.querySelector('.box') as HTMLElement;

    this.intervalId = setInterval(() => {
      this.position += 2 * this.direction;
      if (this.position >= 100 || this.position <= 0) {
        this.direction *= -1;
      }
      this.boxEl.style.transform = `translateY(-${this.position}px)`;
    }, 16); // ~60fps
  }

  disconnectedCallback() {
    clearInterval(this.intervalId);
  }


  private onScroll(){
    // Simula trabalho pesado em cada scroll
    const start = performance.now();
    while (performance.now() - start < 50) {
      // trava a thread por 50ms
    }
  };

  render() {
    return (
      <div style={{height:'800px'}}>
        <div onScroll={()=>this.onScroll()} class="scroll-container">
          {[...Array(200)].map((_, i) => (
            <div class="item" key={i}>Item {i + 1}</div>
          ))}
        </div>

        <div class="box"></div>
      </div>
    );
  }
}