const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function handleRemoveCartItemPage() {
    const removeBtns = $$('.remove-item')
    removeBtns.forEach(btn => btn.addEventListener('click', handleRemoveCartItem))
}

handleRemoveCartItemPage()

function handleRemoveCartItem(e) {
    const removeBtn = e.target
    const cartItem = removeBtn.closest('.cart-item')
    const index = cartItem.dataset.index
    dispatch('removeCartItem', index)
}


export default function html([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
    )
    .filter(x => x && x !== true || x === 0)
    .join('')
}

export function createStore(reducer) {
    let state = reducer()
    const roots = new Map()

    function render() {
        for (const [root, component] of roots) {
            const output = component()
            root.innerHTML = output
        }
        if (window.initializeEventListeners) {
            window.initializeEventListeners()
        }
        handleRemoveCartItemPage()
        initializeCouponEvents()
    }

    function initializeCouponEvents() {
        const couponBtn = document.querySelector('#applyCoupon')
        if (couponBtn) {
            couponBtn.addEventListener('click', function() {
                const couponInput = document.querySelector('.promo-input')
                if (!couponInput) return;
                
                const code = couponInput.value.trim().toUpperCase()
                const coupons = {
                    'SALE10': 10,
                    'SALE20': 20,
                    'SALE50': 50
                }
                
                if (coupons.hasOwnProperty(code)) {
                    const discountPercent = coupons[code]
                    const couponData = {
                        code: code,
                        discount: discountPercent
                    }
                    dispatch('applyCoupon', couponData)
                    alert(`Đã áp dụng mã giảm giá ${discountPercent}%`)
                } else {
                    alert('Mã giảm giá không hợp lệ!')
                }
            })
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component)
            render()
        },
        connect(selector = state => state) {
            return component => (props, ...args) => 
                component(Object.assign({}, props, selector(state), ...args))
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args)
            render()
        }
    }
}
