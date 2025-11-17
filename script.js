// ============================================
// 🚀 BELEZA DE MÓVEIS - JAVASCRIPT PREMIUM v2.1
// ============================================

// Configurações Globais
const CONFIG = {
    whatsappNumber: '5571992714599',
    currency: 'BRL',
    locale: 'pt-BR',
    animations: {
        duration: 0.3,
        ease: 'power2.out'
    }
};

// ============================================
// 📦 PRODUTOS - Dados Realistas
// ============================================

const PRODUCTS_DATA = [
    {
        id: 1,
        name: "Sofá Chesterfield 3 Lugares",
        category: "sofas",
        price: 3899.90,
        originalPrice: 4874.88,
        image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&h=600&fit=crop",
        description: "Sofá Chesterfield clássico em couro legítimo marrom. Design atemporal com acabamento impecável. Perfeito para ambientes sofisticados.",
        specs: "Largura: 220cm | Profundidade: 95cm | Altura: 85cm | Material: Couro Legítimo",
        isNew: false,
        isPromotion: true,
        discount: 20,
        isTopSeller: true,
        colors: ["Marrom", "Preto", "Caramelo"]
    },
    {
        id: 2,
        name: "Cama Queen Size Diamante",
        category: "camas",
        price: 5299.00,
        originalPrice: 6623.75,
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
        description: "Cama queen size com cabeceira diamantada luxuosa. Estrutura em madeira maciça com acabamento em verniz fosco. Design moderno e elegante.",
        specs: "Largura: 198cm | Comprimento: 208cm | Altura: 120cm | Madeira Maciça",
        isNew: false,
        isPromotion: true,
        discount: 20,
        isTopSeller: true,
        colors: ["Branco", "Preto", "Madeira Natural"]
    },
    {
        id: 3,
        name: "Mesa de Jantar Oval Premium",
        category: "mesas",
        price: 3199.90,
        originalPrice: 3999.88,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        description: "Mesa de jantar oval em mármore travertino com base em aço inox dourado. Suporta até 8 pessoas. Peça única de design italiano.",
        specs: "Largura: 220cm | Profundidade: 110cm | Altura: 75cm | Mármore + Aço Inox",
        isNew: true,
        isPromotion: true,
        discount: 20,
        isTopSeller: false,
        colors: ["Mármore Bege", "Mármore Preto"]
    },
    {
        id: 4,
        name: "Poltrona Reclinável Luxo",
        category: "poltronas",
        price: 2499.00,
        originalPrice: 3123.75,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        description: "Poltrona reclinável em couro sintético premium com sistema de relaxamento automático. Conforto e sofisticação em um único produto.",
        specs: "Largura: 85cm | Profundidade: 90cm | Altura: 105cm | Couro Sintético Premium",
        isNew: false,
        isPromotion: true,
        discount: 20,
        isTopSeller: true,
        colors: ["Caramelo", "Preto", "Cinza"]
    },
    {
        id: 5,
        name: "Sofá Modular Contemporâneo",
        category: "sofas",
        price: 4599.90,
        originalPrice: 5749.88,
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=600&fit=crop",
        description: "Sofá modular contemporâneo em tecido suede premium. Configuração flexível para diferentes ambientes. Almofadas inclusas.",
        specs: "Largura: 280cm | Profundidade: 180cm | Altura: 85cm | Tecido Suede Premium",
        isNew: true,
        isPromotion: true,
        discount: 20,
        isTopSeller: true,
        colors: ["Bege", "Cinza Claro", "Verde Musgo"]
    },
    {
        id: 6,
        name: "Guarda-Roupa 6 Portas Espelhado",
        category: "quarto",
        price: 3899.90,
        originalPrice: 4874.88,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        description: "Guarda-roupa com 6 portas espelhadas e interior em madeira maciça. Amplo espaço interno com organizadores. Design moderno e funcional.",
        specs: "Largura: 240cm | Altura: 220cm | Profundidade: 60cm | Madeira + Espelho",
        isNew: true,
        isPromotion: true,
        discount: 20,
        isTopSeller: false,
        colors: ["Branco", "Preto", "Madeira"]
    },
    {
        id: 7,
        name: "Cadeira Executiva Premium",
        category: "escritorio",
        price: 1899.90,
        originalPrice: 2374.88,
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop",
        description: "Cadeira executiva em couro legítimo com ajuste de altura e reclinação. Base em alumínio polido com rodízios silenciosos.",
        specs: "Altura: 120cm | Largura: 65cm | Profundidade: 65cm | Couro Legítimo",
        isNew: false,
        isPromotion: true,
        discount: 20,
        isTopSeller: true,
        colors: ["Preto", "Marrom", "Cinza"]
    },
    {
        id: 8,
        name: "Mesa de Centro de Vidro",
        category: "living",
        price: 1599.90,
        originalPrice: 1999.88,
        image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&h=600&fit=crop",
        description: "Mesa de centro com tampo de vidro temperado e base em aço inox. Design minimalista e elegante para salas modernas.",
        specs: "Largura: 120cm | Profundidade: 60cm | Altura: 45cm | Vidro + Aço Inox",
        isNew: true,
        isPromotion: true,
        discount: 20,
        isTopSeller: false,
        colors: ["Vidro Transparente", "Vidro Fumê"]
    },
    {
        id: 9,
        name: "Conjunto de Jantar 6 Cadeiras",
        category: "cozinha",
        price: 4499.90,
        originalPrice: 5624.88,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        description: "Conjunto completo com mesa redonda e 6 cadeiras estofadas. Estrutura em madeira maciça com acabamento em laca branca.",
        specs: "Mesa: 150cm Ø | Cadeira: 45x50x90cm | Madeira Maciça",
        isNew: false,
        isPromotion: true,
        discount: 20,
        isTopSeller: true,
        colors: ["Branco", "Preto", "Madeira Natural"]
    },
    {
        id: 10,
        name: "Sofá de Jardim Resinado",
        category: "jardim",
        price: 2899.90,
        originalPrice: 3624.88,
        image: "https://images.unsplash.com/photo-1588991208658-069f5310df04?w=800&h=600&fit=crop",
        description: "Sofá de jardim em resinado de alta qualidade com almofadas impermeáveis. Resiste às intempéries e mantém a beleza.",
        specs: "Largura: 200cm | Profundidade: 80cm | Altura: 85cm | Resinado + Almofadas",
        isNew: true,
        isPromotion: true,
        discount: 20,
        isTopSeller: false,
        colors: ["Branco", "Caramelo", "Verde"]
    },
    {
        id: 11,
        name: "Estante Modular 5 Prateleiras",
        category: "escritorio",
        price: 1299.90,
        originalPrice: 1624.88,
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop",
        description: "Estante modular com 5 prateleiras ajustáveis. Sistema de montagem fácil e design moderno. Perfeita para escritórios e salas.",
        specs: "Largura: 180cm | Altura: 200cm | Profundidade: 30cm | MDP Premium",
        isNew: false,
        isPromotion: true,
        discount: 20,
        isTopSeller: true,
        colors: ["Branco", "Preto", "Madeira"]
    },
    {
        id: 12,
        name: "Poltrona de Balanço Vintage",
        category: "poltronas",
        price: 2199.90,
        originalPrice: 2749.88,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        description: "Poltrona de balanço vintage em tecido macio com estrutura em madeira. Conforto e estilo retrô para momentos de relaxamento.",
        specs: "Largura: 70cm | Profundidade: 85cm | Altura: 100cm | Tecido + Madeira",
        isNew: true,
        isPromotion: true,
        discount: 20,
        isTopSeller: false,
        colors: ["Bege", "Verde", "Rosa"]
    }
];

// ============================================
// 🛒 CARRINHO DE COMPRAS
// ============================================

class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cartItems')) || [];
        this.updateCartUI();
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }
        
        this.saveCart();
        this.updateCartUI();
        this.showNotification('Produto adicionado ao carrinho!', 'success');
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartUI();
        this.showNotification('Produto removido do carrinho!', 'info');
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(0, quantity);
            if (item.quantity === 0) {
                this.removeItem(productId);
            } else {
                this.saveCart();
                this.updateCartUI();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    saveCart() {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
    }

    updateCartUI() {
        const cartBadge = document.querySelector('#cartBtn .badge');
        const itemCount = this.getItemCount();
        
        if (cartBadge) {
            cartBadge.textContent = itemCount;
            cartBadge.style.display = itemCount > 0 ? 'block' : 'none';
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// ============================================
// ❤️ FAVORITOS
// ============================================

class Favorites {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('favoriteItems')) || [];
        this.updateFavoritesUI();
    }

    toggle(product) {
        const existingIndex = this.items.findIndex(item => item.id === product.id);
        
        if (existingIndex > -1) {
            this.items.splice(existingIndex, 1);
            this.showNotification('Produto removido dos favoritos!', 'info');
        } else {
            this.items.push(product);
            this.showNotification('Produto adicionado aos favoritos!', 'success');
        }
        
        this.saveFavorites();
        this.updateFavoritesUI();
    }

    isFavorite(productId) {
        return this.items.some(item => item.id === productId);
    }

    saveFavorites() {
        localStorage.setItem('favoriteItems', JSON.stringify(this.items));
    }

    updateFavoritesUI() {
        const favoritesBadge = document.querySelector('#favoritesBtn .badge');
        const itemCount = this.items.length;
        
        if (favoritesBadge) {
            favoritesBadge.textContent = itemCount;
            favoritesBadge.style.display = itemCount > 0 ? 'block' : 'none';
        }

        // Atualizar ícones de favoritos nos produtos
        document.querySelectorAll('.product-card').forEach(card => {
            const productId = parseInt(card.dataset.productId);
            const favoriteBtn = card.querySelector('.favorite-btn');
            if (favoriteBtn) {
                favoriteBtn.classList.toggle('active', this.isFavorite(productId));
            }
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// ============================================
// 🎨 RENDERIZAÇÃO DE PRODUTOS
// ============================================

class ProductRenderer {
    constructor() {
        this.products = PRODUCTS_DATA;
        this.filteredProducts = [...this.products];
        this.currentPage = 1;
        this.productsPerPage = 8;
        this.cart = new ShoppingCart();
        this.favorites = new Favorites();
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderProducts();
        this.setupFilters();
    }

    setupEventListeners() {
        // Filtros
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleFilter(e.target.dataset.filter);
            });
        });

        // Load more
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMoreProducts();
            });
        }
    }

    setupFilters() {
        // Inicializar com "Todos" ativo
        this.handleFilter('all');
    }

    handleFilter(filter) {
        // Atualizar botões ativos
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');

        // Filtrar produtos
        if (filter === 'all') {
            this.filteredProducts = [...this.products];
        } else {
            this.filteredProducts = this.products.filter(product => 
                product.category === filter
            );
        }

        // Resetar paginação e renderizar
        this.currentPage = 1;
        this.renderProducts();
    }

    renderProducts() {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;

        const startIndex = 0;
        const endIndex = this.currentPage * this.productsPerPage;
        const productsToShow = this.filteredProducts.slice(startIndex, endIndex);

        // Limpar grid
        productsGrid.innerHTML = '';

        // Renderizar produtos
        productsToShow.forEach(product => {
            const productCard = this.createProductCard(product);
            productsGrid.appendChild(productCard);
        });

        // Atualizar botão load more
        this.updateLoadMoreButton();

        // Atualizar favoritos UI
        this.favorites.updateFavoritesUI();
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.productId = product.id;

        const discountBadge = product.isPromotion ? `
            <div class="product-badge product-badge-discount">-${product.discount}%</div>
        ` : '';

        const newBadge = product.isNew ? `
            <div class="product-badge product-badge-new">Novo</div>
        ` : '';

        const topSellerBadge = product.isTopSeller ? `
            <div class="product-badge product-badge-top">Mais Vendido</div>
        ` : '';

        const originalPrice = product.originalPrice ? `
            <span class="product-price-original">R$ ${product.originalPrice.toFixed(2).replace('.', ',')}</span>
        ` : '';

        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-badges">
                    ${discountBadge}
                    ${newBadge}
                    ${topSellerBadge}
                </div>
                <div class="product-overlay">
                    <button class="favorite-btn" onclick="productRenderer.favorites.toggle(productRenderer.products.find(p => p.id === ${product.id}))">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-specs">${product.specs}</div>
                <div class="product-price">
                    <span class="product-price-current">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                    ${originalPrice}
                </div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="productRenderer.cart.addItem(productRenderer.products.find(p => p.id === ${product.id}))">
                        <i class="fas fa-shopping-bag"></i>
                        <span>Adicionar</span>
                    </button>
                    <button class="btn-whatsapp" onclick="productRenderer.openWhatsApp(${product.id})">
                        <i class="fab fa-whatsapp"></i>
                        <span>Comprar</span>
                    </button>
                </div>
            </div>
        `;

        return card;
    }

    loadMoreProducts() {
        this.currentPage++;
        this.renderProducts();
    }

    updateLoadMoreButton() {
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (!loadMoreBtn) return;

        const totalProducts = this.filteredProducts.length;
        const showingProducts = this.currentPage * this.productsPerPage;

        if (showingProducts >= totalProducts) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'flex';
        }
    }

    openWhatsApp(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const message = `Olá! Tenho interesse no produto: ${product.name} - R$ ${product.price.toFixed(2).replace('.', ',')}`;
        const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
    }

    openWhatsAppForCart() {
        const cart = this.cart;
        if (cart.items.length === 0) return;

        let message = 'Olá! Gostaria de finalizar a compra dos seguintes produtos:\n\n';
        
        cart.items.forEach(item => {
            message += `• ${item.name} - ${item.quantity}x R$ ${item.price.toFixed(2).replace('.', ',')} = R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
        });
        
        message += `\nTotal: R$ ${cart.getTotal().toFixed(2).replace('.', ',')}\n\n`;
        message += 'Endereço para entrega: [INFORMAR ENDEREÇO]\n';
        message += 'Forma de pagamento: [INFORMAR FORMA DE PAGAMENTO]';

        const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// ============================================
// 🎯 INICIALIZAÇÃO
// ============================================

let productRenderer;

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar renderizador de produtos
    productRenderer = new ProductRenderer();
    
    // Inicializar outras funcionalidades
    initNavigation();
    initScrollAnimations();
    initFormHandlers();
    initMobileMenu();
    
    // Event listener para botão de catálogo no rodapé
    document.querySelectorAll('#catalogBtn').forEach(btn => {
        btn.addEventListener('click', handleCatalogRequest);
    });
    
    console.log('Beleza de Móveis - Sistema inicializado com sucesso!');
});

// ============================================
// 📱 NAVEGAÇÃO E UI
// ============================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileClose = document.getElementById('mobileClose');
    const navMenu = document.getElementById('navMenu');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.add('active');
        });
    }

    if (mobileClose && navMenu) {
        mobileClose.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            showCartModal();
        });
    }

    // Favorites button
    const favoritesBtn = document.getElementById('favoritesBtn');
    if (favoritesBtn) {
        favoritesBtn.addEventListener('click', () => {
            showFavoritesModal();
        });
    }
}

function initMobileMenu() {
    // Mobile menu já foi inicializado em initNavigation
}

// ============================================
// ✨ ANIMAÇÕES
// ============================================

function initScrollAnimations() {
    // Animação de contadores
    const counters = document.querySelectorAll('[data-count]');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.dataset.count);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };

    // Intersection Observer para animações
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.hasAttribute('data-count')) {
                    animateCounter(entry.target);
                } else {
                    entry.target.classList.add('animate-in');
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos
    document.querySelectorAll('[data-count], .collection-item, .product-card, .feature').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// 📝 FORMULÁRIOS
// ============================================

function initFormHandlers() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simular envio
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function handleCatalogRequest() {
    const message = 'Olá! Gostaria de receber o catálogo completo de móveis.';
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// ============================================
// 🛍️ MODAIS
// ============================================

function showCartModal() {
    const cart = productRenderer?.cart || new ShoppingCart();
    
    if (cart.items.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Meu Carrinho</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                ${cart.items.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>R$ ${item.price.toFixed(2).replace('.', ',')}</p>
                            <div class="quantity-controls">
                                <button onclick="productRenderer.cart.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                                <span>${item.quantity}</span>
                                <button onclick="productRenderer.cart.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                            </div>
                        </div>
                        <button class="remove-item" onclick="productRenderer.cart.removeItem(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
            <div class="modal-footer">
                <div class="cart-total">
                    <strong>Total: R$ ${cart.getTotal().toFixed(2).replace('.', ',')}</strong>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-outline" onclick="this.closest('.modal-overlay').remove()">Continuar Comprando</button>
                    <button class="btn btn-primary" onclick="productRenderer.openWhatsAppForCart()">Finalizar no WhatsApp</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function showFavoritesModal() {
    const favorites = productRenderer?.favorites || new Favorites();
    
    if (favorites.items.length === 0) {
        alert('Você ainda não tem favoritos!');
        return;
    }

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Meus Favoritos</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                ${favorites.items.map(item => `
                    <div class="favorite-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="favorite-item-info">
                            <h4>${item.name}</h4>
                            <p>R$ ${item.price.toFixed(2).replace('.', ',')}</p>
                            <div class="favorite-actions">
                                <button class="btn btn-primary" onclick="productRenderer.cart.addItem(productRenderer.products.find(p => p.id === ${item.id})); productRenderer.favorites.toggle(productRenderer.products.find(p => p.id === ${item.id})); this.closest('.favorite-item').remove();">
                                    Adicionar ao Carrinho
                                </button>
                                <button class="btn btn-whatsapp" onclick="productRenderer.openWhatsApp(${item.id})">
                                    <i class="fab fa-whatsapp"></i>
                                </button>
                            </div>
                        </div>
                        <button class="remove-item" onclick="productRenderer.favorites.toggle(productRenderer.products.find(p => p.id === ${item.id})); this.closest('.favorite-item').remove(); if (productRenderer.favorites.items.length === 0) this.closest('.modal-overlay').remove();">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// ============================================
// 📱 WHATSAPP INTEGRATION
// ============================================

// Função já está na classe ProductRenderer

// ============================================
// 🎯 UTILITÁRIOS
// ============================================

// Format currency
function formatCurrency(value) {
    return new Intl.NumberFormat(CONFIG.locale, {
        style: 'currency',
        currency: CONFIG.currency
    }).format(value);
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// 🚀 DEBUG E INICIALIZAÇÃO FINAL
// ============================================

// Garantir que tudo seja inicializado corretamente
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Beleza de Móveis - Sistema inicializado com sucesso!');
    });
} else {
    console.log('Beleza de Móveis - Sistema já carregado!');
}