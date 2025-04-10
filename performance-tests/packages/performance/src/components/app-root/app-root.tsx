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
      { path: '/badLCP', component: 'sy-dle-bad-lcp-image' },
      { path: '/goodLCP', component: 'sy-dle-good-lcp-image' },
    ]);
  }

  render() {
    return (
      <div class={'container'}>
        <nav>
          <a href="/">Home</a>
          <a href="/badLCP">LCP RUIM</a>
          <a href="/goodLCP">LCP BOM</a>
        </nav>
        <main></main>
      </div>
    );
  }
}
