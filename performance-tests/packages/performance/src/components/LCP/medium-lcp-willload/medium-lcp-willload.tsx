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
