import { Component, Element, h } from '@stencil/core';
import { Router } from '@vaadin/router';

@Component({
  tag: 'sy-dle-app-root',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class AppRoot {
  @Element() el: HTMLElement;

  componentDidLoad() {
    const outlet = this.el.shadowRoot?.querySelector('main');
    const router = new Router(outlet);
    router.setRoutes([
      { path: '/', component: 'sy-dle-example' },
      { path: '/about', component: 'page-about' },
    ]);
  }

  render() {
    return (
      <div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
        <main></main>
      </div>
    );
  }
}
