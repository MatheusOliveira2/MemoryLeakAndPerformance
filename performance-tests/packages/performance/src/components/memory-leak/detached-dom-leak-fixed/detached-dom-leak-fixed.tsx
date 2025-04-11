import { Component, Element, h, Host, State, Watch } from '@stencil/core';

@Component({
  tag: 'sy-dle-detached-dom-leak-fixed',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class DetachedDomLeakFixed {
  @Element() el: HTMLElement;

  @State() reload = true;
  @Watch('reload')
  reloadWatcher() {
    this.elementReferences = [];
  }

  private elementReferences: any[] = [];

  disconnectedCallback() {
    this.elementReferences = [];
  }

  render() {
    return (
      <Host>
        <button onClick={() => (this.reload = !this.reload)}>Alternar</button>
        {this.reload
          ? [...Array(100)].map((_, i) => (
              <sy-text ref={(el: HTMLElement) => this.elementReferences.push(el)} key={'oi' + i}>
                OI
              </sy-text>
            ))
          : [...Array(100)].map((_, i) => (
              <sy-text ref={(el: HTMLElement) => this.elementReferences.push(el)} key={'tchau ' + i}>
                Tchau
              </sy-text>
            ))}
      </Host>
    );
  }
}
