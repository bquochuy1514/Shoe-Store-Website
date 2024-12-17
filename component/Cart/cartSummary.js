import html from "../../core.js";
import { connect } from "../../store.js";

const connector = connect()

function cartSummary({cart, discount}) {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountAmount = (subtotal * discount.percent) / 100;
    const total = subtotal - discountAmount;

    return html`
        <div class="cart-summary">
            <h3>Order Summary</h3>
            <div class="summary-item">
                <span>Subtotal</span>
                <span class="subtotal-amount">
                    ${subtotal.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}
                </span>
            </div>
            
            <!-- Phần mã giảm giá -->
            <div class="promo-code">
                <input type="text" placeholder="Enter promo code" class="promo-input">
                <button id="applyCoupon" class="btn apply-promo">Apply</button>
            </div>

            <div class = "showCoupon"> Coupon code: <span style ="color: red"> Sale10, Sale20, Sale50 </span> </div>
            
            <!-- Hiển thị chi tiết giảm giá -->
            ${discount.code ? `
                <div class="summary-item discount">
                    <span>Discount (${discount.code})</span>
                    <span class="discount-amount">
                        -${discountAmount.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}
                    </span>
                </div>
            ` : ''}
            
            <div class="summary-item">
                <span>Shipping</span>
                <span>Free</span>
            </div>
            <div class="summary-item total">
                <span>Total</span>
                <span class="total-amount">
                    ${total.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}
                </span>
            </div>
            <button class="btn checkout-btn">
                Proceed to Checkout
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `
}


    
export default connector(cartSummary)
