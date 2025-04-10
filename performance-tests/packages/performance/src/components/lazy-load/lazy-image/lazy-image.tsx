import { Component, Element, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'sy-dle-lazy-image',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class LazyImage {
  @Element() el: HTMLElement;
  @Prop() src: string;
  @Prop() alt: string;
  @Prop() disableLazy = false
  @State () isVisible = false;
  

  private observer: IntersectionObserver;

  componentDidLoad() {
    if(this.disableLazy) return;

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.isVisible = true;
        this.observer.disconnect(); // Para de observar após carregar
      }
    }, {
      rootMargin: '100px', // carrega um pouco antes de entrar
    });

    this.observer.observe(this.el);
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    return (
      <div class="image-wrapper">
        {this.isVisible || this.disableLazy ? (
          <img src={this.src} alt={this.alt} />
        ) : (
          <div class="placeholder">Carregando...</div>
        )}
      </div>
    );
  }
}