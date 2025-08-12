import translate from "./translate.js";

class Title extends HTMLElement {
  static observedAttributes = ["language"];
  #text;

  get text() {
    return this.#text ??= "Oi, meu nome é Cleiton Carlos";
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    document.addEventListener("languageSelected", (e) => {
      this.setAttribute("language", e.detail.language)
    });
  }

  attributeChangedCallback() {
    const language = this.getAttribute("language");
    this.#text = translate[language];

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./style.css" />
      <h2 class="text">${this.text}</h2>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("c-title", Title);
