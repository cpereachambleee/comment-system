class ReusableComment extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById('template-form');

    const node = document.importNode(template.content, true);

    document.body.appendChild(node);
  }
}
window.customElements.define('reusable-comment', ReusableComment);
