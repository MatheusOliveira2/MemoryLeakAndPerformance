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
