import { CSSResultArray, LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './cgm-button.styles.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('cgm-button')
export class CGMButton extends LitElement {
    @property({ type: String })
    label = 'Click'

    static override get styles(): CSSResultArray{
        return [styles]
    }
    
    render() {
        return html`
      <button>${this.label}</button> 
    `
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'cgm-button': CGMButton
    }
}
