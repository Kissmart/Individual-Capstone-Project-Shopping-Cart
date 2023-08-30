<script src="scripts.js"></script>

const addToCartButton = document.getElementById('add-to-cart');
const clearCartButton = document.getElementById('clear-cart');
const quantityInput = document.getElementById('quantity');
const cartItemsContainer = document.getElementById('cart-items');
const totalSpan = document.getElementById('total');


let cart = [];
let totalCost = 0;


function updateTotalCost() {
    totalSpan.textContent = totalCost.toFixed(2);
}


function addToCart(productName, price, quantity) {
    const itemTotal = price * quantity;
    totalCost += itemTotal;

    cart.push({ productName, price, quantity, itemTotal });
    updateCartUI();
    updateTotalCost();
}


function clearCart() {
    cart = [];
    totalCost = 0;
    updateCartUI();
    updateTotalCost();
}


function updateCartUI() {
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');

        itemDiv.innerHTML = `
            <p>${item.productName} x ${item.quantity}</p>
            <p>$${item.itemTotal.toFixed(2)}</p>
        `;

        cartItemsContainer.appendChild(itemDiv);
    });
}


addToCartButton.addEventListener('click', () => {
    const productName = 'T-Shirt'; 
    const price = 220; 
    const quantity = parseInt(quantityInput.value);

    if (!isNaN(quantity) && quantity > 0) {
        addToCart(productName, price, quantity);
    }
});

clearCartButton.addEventListener('click', () => {
    clearCart();
});

updateCartUI();
updateTotalCost();
