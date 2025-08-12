class Multi extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./style.css" />
      <h1 class="title">Multi Lang</h1>

      <fieldset class="fieldset">
        <legend class="fieldset__legend">Selecione um indioma</legend>

        <div class="fieldset__container">
          <img src="./brazil.png" /> 
          <label class="fieldset__label">Português</label>
          <input class="fieldset__input" name="language" value="portugues" type="radio" />
        </div>
        <div class="fieldset__container">
          <img src="./english.png" /> 
          <label class="fieldset__label">Inglês</label>
          <input class="fieldset__input" name="language" value="english" type="radio" />
        </div>
        <div class="fieldset__container">
          <img src="./spain.png" /> 
          <label class="fieldset__label">Espanhol</label>
          <input class="fieldset__input" name="language" value="espanhol" type="radio" />
        </div>
      </fieldset>
    `
    this.language();
  }

  language() {
    const inputs = this.shadowRoot.querySelectorAll('input[name="language"]');
    
    inputs.forEach(input => {
      input.addEventListener("change", () => {
        this.dispatchEvent(new CustomEvent("languageSelected", {
          detail: { language: input.value },
          bubbles: true
        }));
      });
    });
  }
}

customElements.define("c-multi", Multi);
