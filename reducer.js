import storage from "./util/storage.js";

const init = {
    products: storage.get('PRODUCTS'),
    cart: storage.get('CART'),
    discount: {
        code: null,
        percent: 0
    }
};

console.log('init', init)

localStorage.removeItem('PRODUCTS')

localStorage.setItem('PRODUCTS', JSON.stringify(
    [
        {
            name: 'Rigorer AR1 ‘Hillbilly Bogey’ Z323360104-14',
            price: 1299000,
            image: 'https://sneakerdaily.vn/wp-content/uploads/2024/06/Giay-Rigorer-AR1-Hillbilly-Bogey-Z323360104-14.jpg',
            desc: `
            ### Thiết kế và Chất liệu
            **Màu sắc**: Tông màu chủ đạo của giày là màu nâu đất (hillbilly), kết hợp với các chi tiết màu đen và trắng.
            **Chất liệu**: Giày được làm từ các chất liệu cao cấp, bao gồm da tổng hợp và lưới, giúp giày có độ bền cao và thoáng khí.
            **Kiểu dáng**: Thiết kế mạnh mẽ và hiện đại, phù hợp với nhiều phong cách thời trang.`,
            quantity: 1
        },
        {
            name: 'Li-Ning AGCT015-1',
            price: 1990000,
            image: 'https://sneakerdaily.vn/wp-content/uploads/2023/10/Giay-Li-Ning-thoi-trang-nam-AGCT015-1.jpg.webp',
            desc: `
                Giày Li-Ning thời trang nam AGCT015-1 là một đôi giày nam mang tính chất thời trang và được thiết kế để thể hiện phong cách cá nhân trong cuộc sống hàng ngày. 
                Đôi giày này thuộc vào dòng sản phẩm thời trang của thương hiệu Li-Ning, nổi tiếng với sự kết hợp giữa thiết kế đẹp mắt và chất lượng.`,
            quantity: 1
        },
        {
            name: 'Air Jordan 6 Retro OG ‘Carmine’ 2021 CT8529-106',
            price: 6890000,
            image: 'https://sneakerdaily.vn/wp-content/uploads/2021/03/Giay-nam-Air-Jordan-6-Retro-OG-Carmine-2021-CT8529-106.jpg.webp',
            desc: `Nike Air Jordan 6 Retro OG ‘Carmine’ 2021hiện đã có sẵn tại Sneaker Daily Shop, đừng bỏ lỡ cơ hội của mình nhé!`,
            quantity: 1
        },
        {
            name: 'Air Jordan 1 Low ‘Midnight Navy’ 553558-141',
            price: 2890000,
            image: 'https://sneakerdaily.vn/wp-content/uploads/2024/08/Giay-Air-Jordan-1-Low-Midnight-Navy-553558-141.jpg',
            desc: `
            **Chi tiết về giày:**
            **Màu sắc chủ đạo:** Giày có nền màu trắng, với các chi tiết màu xanh navy đậm, bao gồm phần mũi giày, dây giày, gót giày, và logo Swoosh ở hai bên. Sự kết hợp giữa hai màu này tạo nên vẻ ngoài thanh lịch và sang trọng.
            **Chất liệu:** Phần upper của giày được làm từ da tổng hợp, mang lại sự bền bỉ và cảm giác thoải mái khi mang. Lưỡi gà bằng vải lưới giúp tăng cường độ thoáng khí.
            **Đế giày:** Đế ngoài bằng cao su màu xanh navy, với các rãnh chống trượt và đệm lót bên trong tạo cảm giác êm ái khi di chuyển.`,
            quantity: 1
        },
        {
            name: 'Air Jordan 1 High Golf ‘Patent Gold Toe’ DQ0660-002',
            price: 5590000,
            image: 'https://sneakerdaily.vn/wp-content/uploads/2024/12/Giay-Air-Jordan-1-High-Golf-Patent-Gold-Toe-DQ0660-002.jpg',
            desc: `
            Màu sắc: Phiên bản ‘Patent Gold Toe’ có màu sắc chủ yếu là đen và vàng ánh kim, với chất liệu da bóng (patent leather) trên phần mũi giày (toe). Phần gót và các chi tiết khác của giày được làm từ chất liệu da cao cấp, mang lại vẻ ngoài sang trọng, tinh tế và bắt mắt.
            Upper: Giày sử dụng da bóng (patent leather) với lớp hoàn thiện sáng bóng, đặc biệt ở phần mũi giày, mang lại vẻ ngoài nổi bật và bắt mắt. Phần thân giày vẫn giữ được thiết kế cổ điển của Air Jordan 1 với các đường chỉ may tinh tế và logo “Wings” ở phía bên.`,
            quantity: 1
        },
        {
            name: 'Air Jordan 1 Retro High OG ‘Black White’ 2014 555088-010',
            price: 14690000,
            image: 'https://sneakerdaily.vn/wp-content/uploads/2024/04/Giay-Air-Jordan-1-Retro-High-OG-Black-White-2014-555088-010.jpg',
            desc: `
            Vào năm 2008, giày sneaker Air Jordan 1 Retro High OG ‘Black White’ là một phần của ‘Countdown Pack’ kỷ niệm sự ra mắt của giày sneaker Air Jordan 23. ‘Gói đếm ngược’ bao gồm các mẫu cổ điển của tất cả giày thể thao Air Jordan trước đây trong bao bì phiên bản giới hạn. Giày sneaker Air Jordan 1 Retro High OG ‘Black / White’ 2014 này có nhãn hiệu Nike Air nguyên bản ở lưỡi và gót chân không có logo ở mặt sau, giống như Air Jordan 1 nguyên bản.`,
            quantity: 1
        },
    ]
));



const actions = {
    add({ products }, args) {
        const { name, price, image, desc, quantity } = args;

        // Ki���m tra sản phẩm đã tồn tại
        const existingProduct = products.find(product => product.name === name);

        if (existingProduct) {
            // Nếu sản phẩm đã tồn tại, cộng dồn số lượng
            existingProduct.quantity = parseInt(existingProduct.quantity || 1) + parseInt(quantity || 1);
        } else {
            // Nếu sản phẩm chưa tồn tại, thêm mới
            products.push({
                name,
                price,
                image,
                desc,
                quantity: parseInt(quantity) || 1, // Số lượng mặc định là 1
            });
        }

        // Lưu lại vào localStorage
        storage.set('PRODUCTS', products);
    },
    
    remove({ products }, index) {
        products.splice(index, 1);
        storage.set('PRODUCTS', products);
    },

    updateProduct({ products }, ...first) {
        const [newProduct, index] = first;
        products[index] = newProduct;
        storage.set('PRODUCTS', products);
    },

    showDetails({ products }, index) {
        const product = products[index];
        if (product) {
            const modal = document.querySelector('.modalDetails');
            const imgElement = modal.querySelector('.productImageDetails');
            const nameElement = modal.querySelector('.details h2');
            const priceElement = modal.querySelector('.details h3');
            const descElement = modal.querySelector('.details span');
            const quantityElement = modal.querySelector('.box__quantity .quantity');
    
            nameElement.innerHTML = product.name;
            imgElement.src = product.image;
            priceElement.innerHTML = `${product.price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}`;
            descElement.innerHTML = product.desc;
            quantityElement.innerHTML = product.quantity;
        }
    },

    getDesc({ products }, index) {
        const desc = products[index].desc;
        return desc;
    },

    // Handle cart page
    addCart({cart, products}, index) {
        const product = products[index];
        cart.push(product);
        storage.set('CART', cart);
    },
    
    removeCartItem({cart}, index) {
        cart.splice(index, 1);
        storage.set('CART', cart);
    },

    applyCoupon(state, couponData) {
        state.discount.code = couponData.code;
        state.discount.percent = couponData.discount;
        storage.set('DISCOUNT', state.discount);
    }
};

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}
