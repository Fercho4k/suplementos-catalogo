// Product Detail JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el ID del producto de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (productId) {
        loadProductDetail(productId);
    } else {
        // Redirigir al catálogo si no hay ID
        window.location.href = 'index.html';
    }
    
    // Inicializar tabs
    initializeTabs();
    
    // Evento para agregar al carrito
    document.getElementById('add-to-cart').addEventListener('click', function() {
        const quantity = parseInt(document.getElementById('quantity').value);
        addToCart(productId, quantity);
    });
});

function loadProductDetail(productId) {
    // Buscar el producto en la base de datos
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        alert('Producto no encontrado');
        window.location.href = 'index.html';
        return;
    }
    
    // Actualizar el título de la página
    document.title = `${product.name} - Importadora Esbelt`;
    
    // Llenar la información del producto
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-image').alt = product.name;
    document.getElementById('product-price').textContent = `$${product.price}`;
    
    if (product.originalPrice > product.price) {
        document.getElementById('original-price').textContent = `$${product.originalPrice}`;
    } else {
        document.getElementById('original-price').style.display = 'none';
    }
    
    // Rating
    const ratingContainer = document.getElementById('product-rating');
    ratingContainer.innerHTML = generateStars(product.rating);
    
    // Descripción
    document.getElementById('product-description').textContent = product.description;
    
    // Beneficios
    const benefitsContainer = document.getElementById('product-benefits');
    benefitsContainer.innerHTML = '';
    product.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsContainer.appendChild(li);
    });
    
    // Ingredientes
    const ingredientsContainer = document.getElementById('product-ingredients');
    ingredientsContainer.innerHTML = '';
    product.ingredients.forEach(ingredient => {
        const span = document.createElement('span');
        span.className = 'ingredient-tag';
        span.textContent = ingredient;
        ingredientsContainer.appendChild(span);
    });
    
    // Modo de uso
    document.getElementById('product-usage').textContent = product.usage;
    
    // Advertencias
    document.getElementById('product-warnings').textContent = product.warnings;
    
    // Especificaciones
    const specificationsContainer = document.getElementById('product-specifications');
    specificationsContainer.innerHTML = '';
    
    Object.entries(product.specifications).forEach(([key, value]) => {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `
            <span class="spec-label">${key}:</span>
            <span class="spec-value">${value}</span>
        `;
        specificationsContainer.appendChild(specItem);
    });
}

function generateStars(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remover clase active de todos los botones y paneles
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Agregar clase active al botón clickeado y su panel correspondiente
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

function addToCart(productId, quantity) {
    // Obtener carrito actual del localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Buscar si el producto ya está en el carrito
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex > -1) {
        // Si ya existe, aumentar la cantidad
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Si no existe, agregarlo
        const product = products.find(p => p.id === productId);
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    // Guardar carrito actualizado
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Actualizar contador del carrito
    updateCartCount();
    
    // Mostrar mensaje de confirmación
    showNotification('Producto agregado al carrito exitosamente!', 'success');
    
    // Animar el botón
    const button = document.getElementById('add-to-cart');
    button.style.transform = 'scale(0.95)';
    button.textContent = '¡Agregado!';
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.innerHTML = '<i class="fas fa-shopping-cart"></i> Agregar al Carrito';
    }, 1000);
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Cargar contador del carrito al cargar la página
document.addEventListener('DOMContentLoaded', updateCartCount);
