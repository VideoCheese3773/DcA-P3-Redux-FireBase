import { addObserver, appState } from "../../store";

class ProductsList extends HTMLElement {
    constructor() {
        console.log("constructor")
        super();
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {

        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        console.log(appState.products)
        appState.products.forEach((p) => {
            const pContainer = this.ownerDocument.createElement('article');
            const pTitle = this.ownerDocument.createElement('h3')
            pTitle.textContent = p.name;

            const pPrice = this.ownerDocument.createElement('h3')
            pPrice.textContent = p.price;

            pContainer?.appendChild(pTitle);
            pContainer?.appendChild(pPrice);
            this.shadowRoot?.appendChild(pContainer);
        })
    }
}

customElements.define('product-list', ProductsList)
export default ProductsList