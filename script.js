let cartItems = [];

function addToCart(item) {
    cartItems.push(item);
    alert(`Added "${item}" to cart!`);
}

function showCart() {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
    } else {
        const modalContent = document.getElementById("modal-content");
        modalContent.innerHTML = ""; // Clear existing content
        
        // Add title "Items in Your Cart"
        const titleElement = document.createElement("h3");
        titleElement.textContent = "Items in Your Cart";
        modalContent.appendChild(titleElement);

        // Add each item to the cart
        cartItems.forEach(item => {
            const itemElement = document.createElement("p");
            itemElement.textContent = item;
            modalContent.appendChild(itemElement);
        });

        showModal();
    }
}

function showModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function placeOrder() {
    closeModal();
    alert("Order Placed!");
    clearCart();
}

function cancelOrder() {
    closeModal();
    alert("Order Canceled");
    clearCart();
}

function clearCart() {
    cartItems = [];
}

