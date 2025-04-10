import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sy-dle-lazy',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class Lazy {
  render() {
    return <Host>
      {[...Array(200)].map((_, i)=> <sy-dle-lazy-image  key={i} src={`https://picsum.photos/id/${i}/1000`}  alt="Image"></sy-dle-lazy-image>)}
    </Host>
  }
}