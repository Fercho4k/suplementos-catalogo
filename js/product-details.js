// JavaScript para la página de detalles del producto con animaciones suaves

let currentProduct = null;
let quantity = 1;
let isLoading = false;

// Inicializar la página de detalles con efectos suaves
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar loader inicial
    showPageLoader();
    
    const productId = localStorage.getItem('selectedProductId');
    
    if (productId) {
        currentProduct = getProductById(parseInt(productId));
        if (currentProduct) {
            // Cargar inmediatamente
            setTimeout(() => {
                loadProductDetails();
                loadRelatedProducts();
                initializeAnimations();
                hidePageLoader();
            }, 200);
        } else {
            hidePageLoader();
            showError('Producto no encontrado');
        }
    } else {
        hidePageLoader();
        showError('No se ha seleccionado ningún producto');
    }
    
    setupEventListeners();
    initializeScrollEffects();
});

// Función para obtener producto por ID
function getProductById(id) {
    if (!products || !Array.isArray(products)) {
        return null;
    }
    return products.find(product => product.id === id);
}

// Mostrar loader de página
function showPageLoader() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    loader.innerHTML = `
        <div style="text-align: center; color: white;">
            <div style="
                width: 50px;
                height: 50px;
                border: 3px solid rgba(255,255,255,0.3);
                border-top: 3px solid white;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 1rem;
            "></div>
            <p style="font-size: 1.2rem; margin: 0;">Cargando producto...</p>
        </div>
    `;
    
    document.body.appendChild(loader);
}

// Ocultar loader de página
function hidePageLoader() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(loader)) {
                document.body.removeChild(loader);
            }
        }, 500);
    }
}

// Configurar event listeners con efectos mejorados
function setupEventListeners() {
    // Los botones de carrito ya no existen, se reemplazaron por WhatsApp
    /* 
    const addToCartBtn = document.getElementById('add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            if (!isLoading) {
                addToCartWithAnimation();
            }
        });
        
        // Efectos de hover mejorados
        addToCartBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
            this.style.boxShadow = '0 8px 25px -5px rgba(59, 130, 246, 0.5)';
        });
        
        addToCartBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        });
    }
    */
    
    // Mejorar controles de cantidad (mantenemos por si se necesita en el futuro)
    setupQuantityControls();
    
    // Configurar tabs con transiciones
    setupTabsWithTransitions();
}

// Configurar controles de cantidad mejorados
function setupQuantityControls() {
    const decreaseBtn = document.querySelector('.quantity-btn[onclick*="changeQuantity(-1)"]');
    const increaseBtn = document.querySelector('.quantity-btn[onclick*="changeQuantity(1)"]');
    const quantityInput = document.getElementById('quantity');
    
    if (decreaseBtn) {
        decreaseBtn.onclick = () => changeQuantitySmooth(-1);
    }
    if (increaseBtn) {
        increaseBtn.onclick = () => changeQuantitySmooth(1);
    }
    
    if (quantityInput) {
        quantityInput.addEventListener('change', function() {
            const value = parseInt(this.value);
            if (value >= 1 && value <= 10) {
                quantity = value;
                animateQuantityChange();
            } else {
                this.value = quantity;
            }
        });
    }
}

// Cambiar cantidad con animación suave
function changeQuantitySmooth(change) {
    const quantityInput = document.getElementById('quantity');
    const currentValue = parseInt(quantityInput.value);
    const newValue = currentValue + change;
    
    if (newValue >= 1 && newValue <= 10) {
        quantityInput.value = newValue;
        quantity = newValue;
        animateQuantityChange();
    }
}

// Animar cambio de cantidad
function animateQuantityChange() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.style.transform = 'scale(1.1)';
    quantityInput.style.background = 'var(--primary-light)';
    
    setTimeout(() => {
        quantityInput.style.transform = 'scale(1)';
        quantityInput.style.background = '#f8fafc';
    }, 200);
}

// Cargar detalles del producto con animaciones
function loadProductDetails() {
    if (!currentProduct) return;
    
    // Actualizar breadcrumb con animación
    const breadcrumbCategory = document.getElementById('breadcrumb-category');
    const breadcrumbProduct = document.getElementById('breadcrumb-product');
    
    if (breadcrumbCategory) {
        breadcrumbCategory.style.opacity = '0';
        breadcrumbCategory.textContent = getCategoryDisplayName(currentProduct.category);
        setTimeout(() => breadcrumbCategory.style.opacity = '1', 200);
    }
    
    if (breadcrumbProduct) {
        breadcrumbProduct.style.opacity = '0';
        breadcrumbProduct.textContent = currentProduct.name;
        setTimeout(() => breadcrumbProduct.style.opacity = '1', 400);
    }
    
    // Actualizar imagen con gradiente aleatorio
    const mainImage = document.querySelector('.product-emoji');
    if (mainImage) {
        mainImage.style.background = getRandomGradient();
        mainImage.style.transform = 'scale(0.8)';
        
        // Verificar si es una imagen o emoji
        const isImage = currentProduct.image.includes('.') || currentProduct.image.includes('/');
        
        if (isImage) {
            // Si es una imagen, crear elemento img
            mainImage.innerHTML = `<img src="${currentProduct.image}" alt="${currentProduct.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">`;
        } else {
            // Si es emoji, mostrar como texto
            mainImage.textContent = currentProduct.image;
        }
        
        setTimeout(() => {
            mainImage.style.transform = 'scale(1)';
        }, 300);
    }
    
    // Actualizar información básica con delays escalonados
    updateElementWithAnimation('product-category', getCategoryDisplayName(currentProduct.category), 600);
    updateElementWithAnimation('product-title', currentProduct.name, 700);
    updateElementWithAnimation('product-short-desc', currentProduct.shortDescription, 800);
    
    // Actualizar características con animación escalonada
    const featuresContainer = document.getElementById('product-features');
    if (featuresContainer) {
        featuresContainer.style.opacity = '0';
        featuresContainer.innerHTML = currentProduct.features.map((feature, index) => 
            `<span class="feature-tag" style="animation-delay: ${index * 0.1}s">${feature}</span>`
        ).join('');
        setTimeout(() => {
            featuresContainer.style.opacity = '1';
        }, 1000);
    }
    
    // Actualizar tabs con contenido animado
    loadTabsContent();
    
    // Actualizar título de la página
    document.title = `${currentProduct.name} - Importadora Esbelt`;
}

// Actualizar elemento con animación
function updateElementWithAnimation(elementId, content, delay) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.textContent = content;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    }
}

// Cargar contenido de tabs con animaciones
function loadTabsContent() {
    // Tab de descripción
    const fullDescription = document.getElementById('full-description');
    if (fullDescription) {
        fullDescription.textContent = currentProduct.fullDescription;
    }
    
    // Tab de ingredientes
    const ingredientsList = document.getElementById('ingredients-list');
    if (ingredientsList) {
        ingredientsList.innerHTML = currentProduct.ingredients.map((ingredient, index) => 
            `<li style="animation-delay: ${index * 0.05}s">${ingredient}</li>`
        ).join('');
    }
    
    // Tab de beneficios
    const benefitsList = document.getElementById('benefits-list');
    if (benefitsList) {
        benefitsList.innerHTML = currentProduct.benefits.map((benefit, index) => 
            `<div class="benefit-item" style="animation-delay: ${index * 0.1}s">
                <i class="fas fa-check-circle"></i>
                <h4>${benefit}</h4>
            </div>`
        ).join('');
    }
    
    // Tab de instrucciones
    const usageInstructions = document.getElementById('usage-instructions');
    if (usageInstructions) {
        usageInstructions.innerHTML = `
            <h4><i class="fas fa-pills"></i> Instrucciones de Uso:</h4>
            <p>${currentProduct.usage}</p>
        `;
    }
    
    // Tab de advertencias
    const productWarnings = document.getElementById('product-warnings');
    if (productWarnings) {
        productWarnings.innerHTML = `
            <h4><i class="fas fa-exclamation-triangle"></i> Advertencias:</h4>
            <p>${currentProduct.warnings}</p>
        `;
    }
}

// Cargar productos relacionados con animaciones
function loadRelatedProducts() {
    if (!currentProduct) return;
    
    // Obtener productos de la misma categoría, excluyendo el actual
    const relatedProducts = products
        .filter(product => 
            product.category === currentProduct.category && 
            product.id !== currentProduct.id
        )
        .slice(0, 3);
    
    const relatedGrid = document.getElementById('related-products-grid');
    if (relatedGrid && relatedProducts.length > 0) {
        relatedGrid.style.opacity = '0';
        relatedGrid.innerHTML = relatedProducts.map(product => createRelatedProductCard(product)).join('');
        
        setTimeout(() => {
            relatedGrid.style.opacity = '1';
            initializeRelatedProductsAnimations();
        }, 1200);
    }
}

// Crear tarjeta de producto relacionado con gradiente aleatorio
function createRelatedProductCard(product) {
    // Determinar si es una imagen o emoji
    const isImage = product.image.includes('.') || product.image.includes('/');
    
    return `
        <div class="product-card" onclick="viewRelatedProduct(${product.id})" data-product-id="${product.id}">
            <div class="product-image ${isImage ? 'has-image' : ''}" style="background: ${isImage ? 'white' : getRandomGradient()}">
                ${isImage ? 
                    `<img src="${product.image}" alt="${product.name}">` : 
                    product.image
                }
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryDisplayName(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.shortDescription}</p>
            </div>
        </div>
    `;
}

// Inicializar animaciones de productos relacionados
function initializeRelatedProductsAnimations() {
    const cards = document.querySelectorAll('#related-products-grid .product-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.9)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, index * 150);
        
        // Efectos de hover mejorados
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Ver producto relacionado con transición
function viewRelatedProduct(productId) {
    const card = document.querySelector(`[data-product-id="${productId}"]`);
    if (card) {
        card.style.transform = 'scale(0.95)';
        card.style.opacity = '0.7';
        
        setTimeout(() => {
            localStorage.setItem('selectedProductId', productId);
            showPageLoader();
            setTimeout(() => {
                window.location.reload();
            }, 500);
        }, 200);
    }
}

// Configurar tabs con transiciones suaves
function setupTabsWithTransitions() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        const originalOnclick = button.getAttribute('onclick');
        if (originalOnclick) {
            const tabName = originalOnclick.match(/'([^']+)'/)[1];
            button.addEventListener('click', function(event) {
                event.preventDefault();
                showTabWithTransition(tabName);
            });
            button.removeAttribute('onclick');
        }
    });
}

// Mostrar tab con transición suave
function showTabWithTransition(tabName) {
    const allButtons = document.querySelectorAll('.tab-btn');
    const allContents = document.querySelectorAll('.tab-content');
    const targetButton = Array.from(allButtons).find(btn => 
        btn.textContent.toLowerCase().includes(tabName.toLowerCase()) ||
        btn.getAttribute('data-tab') === tabName
    );
    const targetContent = document.getElementById(tabName + '-tab');
    
    if (!targetContent) return;
    
    // Animar salida del contenido actual
    const currentActive = document.querySelector('.tab-content.active');
    if (currentActive && currentActive !== targetContent) {
        currentActive.style.opacity = '0';
        currentActive.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            currentActive.classList.remove('active');
        }, 200);
    }
    
    // Actualizar botones activos con efecto
    allButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.style.transform = 'scale(1)';
    });
    
    if (targetButton) {
        targetButton.classList.add('active');
        targetButton.style.transform = 'scale(1.05)';
        setTimeout(() => {
            targetButton.style.transform = 'scale(1)';
        }, 150);
    }
    
    // Mostrar nuevo contenido con animación
    setTimeout(() => {
        targetContent.classList.add('active');
        targetContent.style.opacity = '0';
        targetContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            targetContent.style.opacity = '1';
            targetContent.style.transform = 'translateY(0)';
            
            // Animar elementos hijos si existen
            const childElements = targetContent.querySelectorAll('li, .benefit-item, .spec-item');
            childElements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateX(-20px)';
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateX(0)';
                }, index * 50);
            });
        }, 50);
    }, 200);
}

// Agregar al carrito con animaciones avanzadas
function addToCartWithAnimation() {
    if (!currentProduct || isLoading) return;
    
    isLoading = true;
    const addButton = document.getElementById('add-to-cart');
    
    // Animar botón
    addButton.style.transform = 'scale(0.95)';
    addButton.style.background = 'var(--success-color)';
    addButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Agregando...';
    
    // Crear efecto de partículas
    createCartAnimationEffect();
    
    setTimeout(() => {
        // Simular agregado al carrito
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        const existingItemIndex = cart.findIndex(item => item.id === currentProduct.id);
        
        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            cart.push({
                id: currentProduct.id,
                name: currentProduct.name,
                image: currentProduct.image,
                quantity: quantity
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Actualizar botón con éxito
        addButton.innerHTML = '<i class="fas fa-check"></i> ¡Agregado!';
        addButton.style.background = 'var(--success-color)';
        
        // Mostrar notificación mejorada
        showEnhancedCartNotification();
        updateCartCount();
        
        // Restaurar botón después de 3 segundos
        setTimeout(() => {
            addButton.style.transform = 'scale(1)';
            addButton.style.background = 'var(--primary-color)';
            addButton.innerHTML = '<i class="fas fa-shopping-cart"></i> Agregar al Carrito';
            isLoading = false;
        }, 3000);
    }, 1000);
}

// Crear efecto de animación para el carrito
function createCartAnimationEffect() {
    const button = document.getElementById('add-to-cart');
    const rect = button.getBoundingClientRect();
    
    // Crear múltiples partículas con diferentes colores
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width/2}px;
            top: ${rect.top + rect.height/2}px;
            width: 6px;
            height: 6px;
            background: ${colors[i % colors.length]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: particle-burst 1.2s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
        }, 1200);
    }
}

// Mostrar notificación mejorada del carrito
function showEnhancedCartNotification() {
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 1.5rem 2rem;
            border-radius: 15px;
            box-shadow: 0 20px 40px -10px rgba(16, 185, 129, 0.3);
            z-index: 9999;
            transform: translateX(400px) scale(0.8) rotate(5deg);
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            display: flex;
            align-items: center;
            gap: 1rem;
            backdrop-filter: blur(15px);
            max-width: 380px;
            border: 1px solid rgba(255, 255, 255, 0.2);
        ">
            <div style="
                width: 40px;
                height: 40px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
            ">
                <i class="fas fa-check"></i>
            </div>
            <div>
                <div style="font-weight: 600; margin-bottom: 0.25rem;">¡Producto agregado!</div>
                <div style="font-size: 0.9rem; opacity: 0.9;">
                    ${currentProduct.name} (${quantity} ${quantity === 1 ? 'unidad' : 'unidades'})
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.firstElementChild.style.transform = 'translateX(0) scale(1) rotate(0deg)';
    }, 100);
    
    // Animar salida después de 5 segundos
    setTimeout(() => {
        notification.firstElementChild.style.transform = 'translateX(400px) scale(0.8) rotate(-5deg)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 500);
    }, 5000);
}

// Actualizar contador del carrito con animación
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        // Animar cambio de número
        cartCount.style.transform = 'scale(1.5) rotate(10deg)';
        cartCount.style.background = 'var(--success-color)';
        cartCount.textContent = totalItems;
        
        setTimeout(() => {
            cartCount.style.transform = 'scale(1) rotate(0deg)';
            cartCount.style.background = 'var(--primary-color)';
        }, 300);
    }
}

// Inicializar animaciones de página
function initializeAnimations() {
    const sections = [
        '.product-section',
        '.product-tabs',
        '.related-products-section'
    ];
    
    sections.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(40px)';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 1300 + (index * 200));
        }
    });
}

// Configurar efectos de scroll
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animar elementos hijos
                const childElements = entry.target.querySelectorAll('.benefit-item, .spec-item, li');
                childElements.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateX(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observar secciones
    document.querySelectorAll('.tab-content, .related-products-section').forEach(el => {
        observer.observe(el);
    });
}

// Mostrar error con redirección suave
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        color: white;
        padding: 2rem;
        border-radius: 20px;
        text-align: center;
        z-index: 9999;
        box-shadow: 0 25px 50px -12px rgba(239, 68, 68, 0.25);
        transition: all 0.3s ease;
        backdrop-filter: blur(15px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    `;
    
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
        <h3 style="margin: 0 0 1rem 0;">${message}</h3>
        <p style="margin: 0 0 1.5rem 0; opacity: 0.9;">Serás redirigido al catálogo en unos segundos...</p>
        <div style="
            width: 200px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 2px;
            margin: 0 auto;
            overflow: hidden;
        ">
            <div style="
                width: 0%;
                height: 100%;
                background: white;
                border-radius: 2px;
                animation: progress-bar 3s linear forwards;
            "></div>
        </div>
    `;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);
    
    setTimeout(() => {
        errorDiv.style.transform = 'translate(-50%, -50%) scale(0.8)';
        errorDiv.style.opacity = '0';
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 300);
    }, 3000);
}

// Funciones auxiliares
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

// Volver a la página principal con transición suave
function goBack() {
    document.body.style.transition = 'all 0.5s ease';
    document.body.style.opacity = '0';
    document.body.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
}

// Función para contactar por WhatsApp
function contactWhatsApp(tipo, numeroVendedor = '595973559418') {
    if (!currentProduct) {
        showNotification('Error: No se ha cargado la información del producto', 'error');
        return;
    }

    // Usar el número del vendedor seleccionado
    const whatsappNumber = numeroVendedor; // Formato internacional sin el +
    
    // Identificar vendedor
    const vendedor = numeroVendedor === '595973559418' ? 'Vendedor 1' : 'Vendedor 2';
    
    let mensaje = '';
    
    if (tipo === 'consulta') {
        mensaje = `Hola ${vendedor}! Tengo una consulta sobre el producto *${currentProduct.name}*. 
        
¿Podrían brindarme más información sobre:
- Disponibilidad
- Formas de pago
- Tiempo de entrega

¡Gracias!`;
    } else if (tipo === 'comprar') {
        mensaje = `Hola ${vendedor}! Estoy interesado/a en comprar el producto *${currentProduct.name}*.

Información del producto:
- Nombre: ${currentProduct.name}
- Categoría: ${currentProduct.category}

¿Podrían ayudarme con:
- Precio actual
- Disponibilidad
- Formas de pago
- Proceso de compra

¡Gracias!`;
    }
    
    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Crear URL de WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappURL, '_blank');
    
    // Mostrar notificación
    showNotification('Redirigiendo a WhatsApp...', 'success');
}

// Inicializar contador del carrito al cargar (ya no se usa pero mantenemos por compatibilidad)
// updateCartCount();
