import { LitElement, html, css } from 'lit';

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
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }

      .card {
        text-align: center;
        background-color: #CFB93C;
        width: 400px;
        border:2px solid black;
        border-radius: 48px;
        box-shadow: 0px 0px 8px 0px;
        margin: 16px 8px;
      }
      
      .card-image {
        width: 150px;
        padding-top: 20px;
        border-radius: 50px;
      }

      .card-title {
        font-size: 32px;
        font-weight: bold;
        color: var(--my-card-title-text-color, black);
        background-color: var(--my-card-title-background-color, pink);
      }

      .details {
        display: block;
        margin: 8px 142px;
        padding: 8px 32px;
        border-radius: 16px;

      }

      .card.fancy {
        background-color: #9CD1DB;
      }

      button:focus-within,
      button:hover {
        background-color: grey;
        color: white;
      }
    `;
  }

  render() {
    return html`<div class="card">
      <img class="card-image" src="${this.image}">
      <div class="card-title">${this.title}</div>
      <p class="description"><slot></slot></p>
      <a href="${this.link}">
        <button class="details">Details</button>
      </a>
      </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      link: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
