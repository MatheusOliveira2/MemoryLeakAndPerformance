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

    await fetch('https://httpstat.us/200?sleep=1000')
    return 'Card'
  }

  private async loadForm(): Promise<string>{
    await fetch('https://httpstat.us/200?sleep=2000')
    return "Formulário";

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
