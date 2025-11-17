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
        // Imagem corrigida (não é mais a mesma da mesa)
        image: "https://images.unsplash.com/photo-1558990390-517c918c5e60?w=800&h=600&fit=crop",
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
// 🎨 RENDERIZAÇÃO DE PRODUTOS
// ============================================

class ProductRenderer {
    constructor() {
        this.products = PRODUCTS_DATA;
        this.filteredProducts = [...this.products];
        this.currentPage = 1;
        this.productsPerPage = 8;
        
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
}

// ============================================
// 🎯 INICIALIZAÇÃO
// ============================================

let productRenderer;

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar renderizador de produtos
    productRenderer = new ProductRenderer();
    
    // Inicializar a animação do título do Hero (Splitting.js)
    if (typeof Splitting === 'function') {
        Splitting();
    }
    
    // Inicializar outras funcionalidades
    initNavigation();
    initScrollAnimations();
    initFormHandlers(); // <- Agora inicializa o formulário do WhatsApp
    
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
}

// ============================================
// ✨ ANIMAÇÕES
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Lógica do contador removida, apenas adiciona a classe
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos
    document.querySelectorAll('.collection-item, .product-card, .feature').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// 📝 FORMULÁRIOS (VERSÃO WHATSAPP)
// ============================================

function initFormHandlers() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

/**
 * *** FUNÇÃO MODIFICADA ***
 * Agora envia os dados do formulário para o WhatsApp.
 */
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // 1. Formata a mensagem que será enviada
    // Usamos .trim() para remover espaços em branco desnecessários
    const message = `
Olá! Gostaria de fazer um contato pelo site.

*Nome:* ${data.name.trim()}
*Email:* ${data.email.trim()}
*Telefone:* ${data.phone ? data.phone.trim() : 'Não preenchido'}
*Assunto:* ${data.subject}

*Mensagem:*
${data.message.trim()}
    `.trim(); // .trim() final para a mensagem inteira
    
    // 2. Pega o número de telefone do seu objeto CONFIG
    const whatsappNumber = CONFIG.whatsappNumber;
    
    // 3. Cria a URL do WhatsApp, codificando a mensagem
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // 4. Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
    
    // 5. Limpa o formulário após o envio
    e.target.reset();
}

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