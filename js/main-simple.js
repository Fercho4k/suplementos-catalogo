// Versión simplificada sin animaciones para debug
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== VERSIÓN SIMPLE SIN ANIMACIONES ===');
    
    const productsGrid = document.getElementById('products-grid');
    const combosGrid = document.getElementById('combos-grid');
    
    if (!products || !Array.isArray(products)) {
        console.error('ERROR: products no está definido o no es array');
        if (productsGrid) productsGrid.innerHTML = '<div style="color: red; padding: 20px;">ERROR: No se pudieron cargar los productos</div>';
        return;
    }
    
    // Separar productos individuales y combos
    const individualProducts = products.filter(p => p.category !== 'combos');
    const combos = products.filter(p => p.category === 'combos');
    
    console.log(`Total productos: ${products.length}`);
    console.log(`Productos individuales: ${individualProducts.length}`);
    console.log(`Combos: ${combos.length}`);
    
    // Renderizar productos individuales
    if (productsGrid) {
        const htmlProductos = individualProducts.map(product => {
            return `
                <div class="product-card" onclick="viewProductDetails(${product.id})" style="opacity: 1; transform: none;">
                    <div class="product-image has-image" style="background: white;">
                        <img src="${product.image}" alt="${product.name}">
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
        }).join('');
        
        productsGrid.innerHTML = htmlProductos;
        console.log(`✅ ${individualProducts.length} productos individuales renderizados`);
    }
    
    // Renderizar combos
    if (combosGrid) {
        const htmlCombos = combos.map(combo => {
            return `
                <div class="product-card" onclick="viewProductDetails(${combo.id})" style="opacity: 1; transform: none;">
                    <div class="product-image has-image" style="background: white;">
                        <img src="${combo.image}" alt="${combo.name}">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${getCategoryDisplayName(combo.category)}</div>
                        <h3 class="product-name">${combo.name}</h3>
                        <p class="product-description">${combo.shortDescription}</p>
                        <div class="product-features">
                            ${combo.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        combosGrid.innerHTML = htmlCombos;
        console.log(`✅ ${combos.length} combos renderizados`);
    }
});

// Funciones auxiliares necesarias
function getCategoryDisplayName(category) {
    const categories = {
        'quemadores': 'Quemadores',
        'termogenicos': 'Termogénicos',
        'supresores': 'Supresores',
        'detox': 'Detox',
        'topicos': 'Tópicos',
        'combos': 'Combos'
    };
    return categories[category] || category;
}

function viewProductDetails(productId) {
    window.location.href = `product-details.html?id=${productId}`;
}
