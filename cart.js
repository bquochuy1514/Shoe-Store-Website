import { attach } from "./store.js"
import cartWrapper from "./component/Cart/cartWrapper.js"

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

attach(cartWrapper, document.querySelector('.cart'))

const removeBtns = $$('.remove-item')
removeBtns.forEach(btn => btn.addEventListener('click', handleRemoveCartItem))

function handleRemoveCartItem(e) {
    console.log(123)
    const removeBtn = e.target
    const cartItem = removeBtn.closest('.cart-item')
    const index = cartItem.dataset.index
    window.dispatch('removeCartItem', index)
}

// Định nghĩa coupons để có thể dùng ở nhiều nơi
window.VALID_COUPONS = {
    'SALE10': 10,
    'SALE20': 20,
    'SALE50': 50
}