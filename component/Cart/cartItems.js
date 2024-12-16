import html from "../../core.js";
import { connect } from "../../store.js";

const connector = connect()

function cartItem({cartItem, index}) {
    return html `
        <div class="cart-item" data-index="${index}">
            <img src="${cartItem.image}" alt="Product">
            <div class="item-details">
                <h3>${cartItem.name}</h3>
                <p class="price">${cartItem.price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</p>
            </div>
            <button class="remove-item">
                <i class="fa-solid fa-trash remove-item-btn"></i>
            </button>
        </div>
    `
}


    
export default connector(cartItem)
