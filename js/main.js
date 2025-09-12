// Variables globales
let currentProducts = [];
let filteredProducts = [];
let currentCombos = [];
let isAnimating = false;

// Elementos del DOM
const productsGrid = document.getElementById('products-grid');
const combosGrid = document.getElementById('combos-grid');
const noResults = document.getElementById('no-results');
const noCombos = document.getElementById('no-combos');

// Función para obtener todos los productos
function getAllProducts() {
    return products || [];
}

// Función para obtener solo productos individuales (no combos)
function getIndividualProducts() {
    const allProducts = getAllProducts();
    return allProducts.filter(product => product.category !== 'combos');
}

// Función para obtener solo combos
function getCombos() {
    const allProducts = getAllProducts();
    return allProducts.filter(product => product.category === 'combos');
}

// Inicializar la aplicación con animaciones suaves
document.addEventListener('DOMContentLoaded', function() {
    console.clear();
    console.log('🚀 INICIANDO CATÁLOGO ESBELT');
    
    const allProducts = getAllProducts();
    currentProducts = getIndividualProducts();
    currentCombos = getCombos();
    filteredProducts = [...currentProducts];
    
    console.log(`📦 Total de productos: ${allProducts.length}`);
    console.log(`📦 Productos individuales: ${currentProducts.length}`);
    console.log(`� Combos: ${currentCombos.length}`);
    
    console.log('📋 Productos individuales:');
    currentProducts.forEach((product, index) => {
        console.log(`  ${index + 1}. ID:${product.id} - ${product.name} (${product.category})`);
    });
    
    console.log('📋 Combos:');
    currentCombos.forEach((combo, index) => {
        console.log(`  ${index + 1}. ID:${combo.id} - ${combo.name}`);
    });
    
    if (allProducts.length === 0) {
        console.error('❌ ERROR: No se cargaron productos');
        return;
    }
    
    // Cargar productos con delay para animación
    setTimeout(() => {
        renderProducts();
        renderCombos();
        initializeAnimations();
    }, 300);
    
    initializeScrollEffects();
});

// Renderizar productos con animaciones escalonadas
function renderProducts() {
    console.log(`Renderizando ${filteredProducts.length} productos`);
    console.log('Productos a renderizar:', filteredProducts.map(p => `${p.id}: ${p.name}`));
    
    if (filteredProducts.length === 0) {
        productsGrid.style.display = 'none';
        noResults.style.display = 'block';
        
        // Animar aparición del mensaje "no results"
        noResults.style.opacity = '0';
        noResults.style.transform = 'translateY(20px)';
        setTimeout(() => {
            noResults.style.opacity = '1';
            noResults.style.transform = 'translateY(0)';
        }, 100);
        return;
    }
    
    productsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    
    console.log(`Grid HTML generado, tarjetas creadas: ${document.querySelectorAll('.product-card').length}`);
    
    // Animar entrada de nuevos productos
    const newCards = document.querySelectorAll('.product-card');
    newCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.9)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, index * 100 + 200);
    });
    
    // Reinicializar observadores para las nuevas tarjetas
    setTimeout(initializeCardAnimations, 300);
}

// Renderizar combos con animaciones escalonadas
function renderCombos() {
    console.log(`Renderizando ${currentCombos.length} combos`);
    console.log('Combos a renderizar:', currentCombos.map(c => `${c.id}: ${c.name}`));
    
    if (currentCombos.length === 0) {
        combosGrid.style.display = 'none';
        noCombos.style.display = 'block';
        
        // Animar aparición del mensaje "no combos"
        noCombos.style.opacity = '0';
        noCombos.style.transform = 'translateY(20px)';
        setTimeout(() => {
            noCombos.style.opacity = '1';
            noCombos.style.transform = 'translateY(0)';
        }, 100);
        return;
    }
    
    combosGrid.style.display = 'grid';
    noCombos.style.display = 'none';
    
    combosGrid.innerHTML = currentCombos.map(combo => createProductCard(combo)).join('');
    
    console.log(`✅ ${currentCombos.length} combos renderizados`);
    
    // Animar entrada de nuevos combos con delay diferente
    const newComboCards = document.querySelectorAll('#combos-grid .product-card');
    newComboCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.9)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, index * 100 + 400);  // Delay mayor para que se muestren después de los productos
    });
    
    // Reinicializar observadores para las nuevas tarjetas de combos
    setTimeout(() => {
        initializeCardAnimations();
    }, 600);
}

// Crear tarjeta de producto con efectos mejorados
function createProductCard(product) {
    // Determinar si es una imagen o emoji
    const isImage = product.image.includes('.') || product.image.includes('/');
    
    return `
        <div class="product-card" onclick="viewProductDetails(${product.id})" data-product-id="${product.id}">
            <div class="product-image ${isImage ? 'has-image no-transparency' : ''}" style="background: ${isImage ? '#ffffff !important' : getRandomGradient()}">
                ${isImage ? 
                    `<img src="${product.image}" alt="${product.name}" style="background: #ffffff !important;">` : 
                    product.image
                }
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryDisplayName(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.shortDescription}</p>
                <div class="product-features">
                    ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Generar gradiente aleatorio para variedad visual
function getRandomGradient() {
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        'linear-gradient(135deg, #ff8a80 0%, #ea80fc 100%)'
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
}

// Inicializar animaciones de scroll
function initializeScrollEffects() {
    // Efecto parallax en el header
    window.addEventListener('scroll', throttle(handleHeaderScroll, 16));
    
    // Efecto de aparición de elementos al scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observar elementos que deben animarse
    document.querySelectorAll('.filters-section, .products-section, .footer').forEach(el => {
        observer.observe(el);
    });
}

// Manejar scroll del header con transiciones suaves
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    const scrolled = window.pageYOffset;
    const scrollThreshold = 100;
    
    if (scrolled > scrollThreshold) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
        header.style.backdropFilter = 'blur(10px)';
    }
}

// Manejar intersección para animaciones de scroll
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animar elementos hijos con delay
            const children = entry.target.querySelectorAll('.filter-group, .product-card, .footer-section');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}

// Inicializar animaciones de tarjetas
function initializeCardAnimations() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        // Efecto de hover mejorado
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Efecto de click
        card.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-5px) scale(0.98)';
        });
        
        card.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
    });
}

// Función throttle para optimizar performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Smooth scroll mejorado
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Inicializar animaciones generales
function initializeAnimations() {
    // Precargar elementos para animaciones iniciales
    const elementsToAnimate = document.querySelectorAll('.filters-section, .products-section');
    
    elementsToAnimate.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 500 + (index * 200));
    });
}

// Ver detalles del producto con transición
function viewProductDetails(productId) {
    // Efecto de loading
    const card = document.querySelector(`[data-product-id="${productId}"]`);
    if (card) {
        card.style.transform = 'scale(0.95)';
        card.style.opacity = '0.7';
        
        setTimeout(() => {
            localStorage.setItem('selectedProductId', productId);
            window.location.href = 'product-details.html';
        }, 200);
    }
}

// Funciones auxiliares
function getCategoryDisplayName(category) {
    const categoryNames = {
        'quemadores': 'Quemador de Grasa',
        'bloqueadores': 'Bloqueador',
        'supresores': 'Supresor de Apetito',
        'termogenicos': 'Termogénico',
        'naturales': 'Natural'
    };
    return categoryNames[category] || category;
}

// Notificaciones mejoradas
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.25);
            z-index: 9999;
            transform: translateX(400px) scale(0.9);
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            backdrop-filter: blur(10px);
        ">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.firstElementChild.style.transform = 'translateX(0) scale(1)';
    }, 100);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        notification.firstElementChild.style.transform = 'translateX(400px) scale(0.9)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 400);
    }, 4000);
}

// Carrito mejorado con animaciones
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId, quantity = 1) {
    const product = getProductById(productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: productId,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification(`${product.name} agregado al carrito`, 'success');
    }
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cartCount) {
        // Animar cambio de número
        cartCount.style.transform = 'scale(1.3)';
        cartCount.textContent = totalItems;
        
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);
    }
}

// Inicializar contador del carrito al cargar
updateCartCount();

// Inicializar navegación suave
initializeSmoothNavigation();

// Función para manejar navegación suave
function initializeSmoothNavigation() {
    // Seleccionar todos los enlaces de navegación que empiecen con #
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Calcular la posición considerando el header fijo
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                // Scroll suave
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Agregar clase activa temporal para highlight
                targetElement.classList.add('section-highlight');
                setTimeout(() => {
                    targetElement.classList.remove('section-highlight');
                }, 2000);
            }
        });
    });
}
