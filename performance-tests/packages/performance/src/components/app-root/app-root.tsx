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
      { path: '/badLCPWillLoad', component: 'sy-dle-bad-lcp-willload' },
      { path: '/mediumLCPWillLoad', component: 'sy-dle-medium-lcp-willLoad' },
      { path: '/goodLCPWillLoad', component: 'sy-dle-good-lcp-willLoad' },


    ]);
  }

  render() {
    return (
      <div class={'container'}>
        <nav>
          <a href="/">Home</a>
          <a href="/badLCP">LCP RUIM - IMAGEM</a>
          <a href="/goodLCP">LCP BOM - IMAGEM</a>
          <a href="/badLCPWillLoad">LCP RUIM - WILL LOAD</a>
          <a href="/mediumLCPWillLoad">LCP Médio - WILL LOAD</a>
          <a href="/goodLCPWillLoad">LCP BOM - WILL LOAD</a>
        </nav>
        <main></main>
      </div>
    );
  }
}
