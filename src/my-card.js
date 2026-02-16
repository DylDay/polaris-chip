import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://example.com/image.png";
    this.description = "This is my custom card component.";
    this.link = "https://www.example.com";
    this.detailsLabel = "Details";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      :host([fancy]) .card {
        background-color: #9CD1DB;
        border: 2px solid violet;
        box-shadow: 0px 0px 6px 0px  #4A90E2;
      }

      .card {
        text-align: center;
        background-color: #CFB93C;
        width: 400px;
        height: 350px;
        border:2px solid black;
        border-radius: 24px;
        box-shadow: 0px 0px 8px 0px;
        margin: 16px 8px;
        overflow: auto;
      }
      
      .card-image {
        width: 150px;
        padding-top: 20px;
        border-radius: 50px;
        aspect-ratio: 1 / 1;
      }

      .card-title {
        font-size: 32px;
        font-weight: bold;
        color: var(--my-card-title-text-color, black);
        background-color: var(--my-card-title-background-color, pink);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .details-button {
        display: block;
        margin: 8px 142px;
        padding: 8px 32px;
        border-radius: 16px;

      }

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }
      
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }

      button:focus-within,
      button:hover {
        background-color: grey;
        color: white;
      }
    `;
  }

  openChanged(e) {
    console.log(e);
    if (e.target.getAttribute('open') !== null) {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`<div class="card">
      <meme-maker
        alt="${this.title}"
        image-url="${this.image}"
        bottom-text="${this.description}"
        top-text="${this.title}">
      </meme-maker>
      <div class="card-title">${this.title}</div>
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot>${this.description}</slot>
        </div>
      </details>
      <a href="${this.link}">
        <button class="details-button" alt="${this.detailsLabel}">${this.detailsLabel}</button>
      </a>
      </div>`;
  }

  static get properties() {
    return {
      title: { type: String, reflect: true },
      image: { type: String },
      description: { type: String },
      link: { type: String },
      detailsLabel: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);