import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sy-dle-list-item',
  shadow: true,
})
export class ListItem {
  @Prop() value: {id: number};

  render() {
    console.log(`<list-item ${this.value.id}> renderizou!`);
    return <div>Item #{this.value.id}</div>;
  }
}