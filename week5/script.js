// Utility functions for cart
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(product) {
    const cart = getCart();
    cart.push(product);
    saveCart(cart);
    alert("Product added to cart!");
}

// On Product Page - add to cart
if (document.getElementById('add-to-cart')) {
    document.getElementById('add-to-cart').addEventListener('click', () => {
        const product = {
            id: 1,
            name: "Book Title 1",
            price: 10
        };
        addToCart(product);
    });
}

// On Cart Page - display cart
if (document.getElementById('cart-items')) {
    const cart = getCart();
    const cartItemsContainer = document.getElementById('cart-items');
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            cartItemsContainer.innerHTML += `
                <div>
                    <strong>${item.name}</strong> - $${item.price}
                </div>
            `;
            total += item.price;
        });
        document.getElementById('cart-total').innerHTML = `<p>Total: $${total}</p>`;
    }

    document.getElementById('checkout').addEventListener('click', () => {
        alert("Checkout is not implemented yet.");
    });
}
