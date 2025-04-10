import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'sy-dle-good-lcp-willload',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class GoodLCPWillLoad{
  @State() form: string
  @State() card: string;

   componentWillLoad() {
    this.startForm()
  }


  private startForm(){
    this.loadCard().then(card => this.card = card)
    this.loadForm().then(form => this.form = form)
  }

  private async loadCard(): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Card');
      }, 1000); 
    });
  }

  private async loadForm(): Promise<string>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Formulário');
      }, 2000);
    });
  }

  render() {
    return (
      <Host>
        {this.card? <div style={{display: 'flex', 'align-items': 'center'}}><sy-avatar initials="C"></sy-avatar>
        <span>{this.card}</span>
        </div> : 
        null}

        {this.form? <div>{this.form}</div>: null}
      </Host>
    );
  }
}
