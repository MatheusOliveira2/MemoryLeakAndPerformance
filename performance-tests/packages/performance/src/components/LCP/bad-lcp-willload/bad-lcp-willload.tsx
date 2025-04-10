import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sy-dle-bad-lcp-willload',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class BadLCPWillLOad{
  private form: string
  private card: string;

  async componentWillLoad() {
    this.card = await this.loadCard();
    this.form = await this.loadForm();
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
