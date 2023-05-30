import { dispatch } from "../../store";
import { saveProduct } from "../../store/actions";
import { Product } from "../../types/products";

const userInputs: Product = {
    name: "",
    price: "0",
}

class Form extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const lName = this.ownerDocument.createElement('label');
        lName.textContent = "Name";
        const name = this.ownerDocument.createElement('input');
        name.addEventListener("change", (e: any) => {
            console.log(e.target.value)
            userInputs.name = e.target.value
        })

        const lPrice = this.ownerDocument.createElement('label');
        lPrice.textContent = "Price";
        const price = this.ownerDocument.createElement('input');
        price.type = "number";
        price.addEventListener("change", (e: any) => {
            console.log(e.target.value)
            userInputs.price = e.target.value
        })

        const btn = this.ownerDocument.createElement('button');
        btn.textContent = "save"
        btn.addEventListener("click", async () =>{
            console.log(userInputs)
            dispatch(await saveProduct(userInputs))
        })

        this.shadowRoot?.appendChild(lName);
        this.shadowRoot?.appendChild(name);
        this.shadowRoot?.appendChild(lPrice);
        this.shadowRoot?.appendChild(price);
        this.shadowRoot?.appendChild(btn);
    }
}

customElements.define('app-form', Form)
export default Form