import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sy-dle-medium-lcp-willload',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class MediumLCPWillLOad{
  private form: string
  private card: string;

  async componentWillLoad() {
    const [card, form] = await Promise.all([this.loadCard(), this.loadForm()]);

    this.card = card;
    this.form = form;
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
