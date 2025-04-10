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
      { path: '/badINP', component: 'sy-dle-bad-inp' },
      { path: '/goodINP', component: 'sy-dle-good-inp' },
      { path: '/badCLS', component: 'sy-dle-bad-cls' },
      { path: '/goodCLS', component: 'sy-dle-good-cls' },
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
          <a href="/badINP">INP RUIM</a>
          <a href="/goodINP">INP BOM</a>
          <a href="/badCLS">CLS RUIM</a>
          <a href="/goodCLS">CLS BOM</a>
        </nav>
        <main></main>
      </div>
    );
  }
}
