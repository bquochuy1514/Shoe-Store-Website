import html from "../../core.js";
import { connect } from "../../store.js";

import cartItems from "./cartItems.js";
import cartSummary from "./cartSummary.js";

const connector = connect()

function cartWrapper({cart}) {
    return html `
        <section class="cart" id="cart">
            <h1 class="heading"><span>shopping</span> cart</h1>
            <div class="cart-container">
                <div class="cart-items">
                    ${cart.map((cartItem, index) => cartItems({cartItem, index}))}
                </div>

                ${cartSummary({cart})}
            </div>
        </section>
    `
}


    
export default connector(cartWrapper)
