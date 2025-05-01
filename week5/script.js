const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const productId = event.target.getAttribute('data-id');
        addToCart(productId);
    });
});

function addToCart(productId) {
    cart.push(productId);
    updateCartModal();
}

function updateCartModal() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = cart.map(item => {
        return `<div>Product ID: ${item}</div>`;
    }).join('');
    document.getElementById('cart-modal').style.display = 'flex';
}

document.getElementById('checkout').addEventListener('click', () => {
    alert('Checkout is not implemented.');
});
