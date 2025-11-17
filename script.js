// ============================================
// 🚀 BELEZA DE MÓVEIS - JAVASCRIPT PREMIUM
// ============================================

// Configurações Globais
const CONFIG = {
    whatsappNumber: '5571992714599',
    currency: 'BRL',
    locale: 'pt-BR'
};

// Função de formatação de preço profissional usando Intl.NumberFormat
const formatPrice = (price) => {
    return new Intl.NumberFormat(CONFIG.locale, {
        style: 'currency',
        currency: CONFIG.currency,
        minimumFractionDigits: 2,
    }).format(price);
};

// ============================================
// 📦 PRODUTOS - Dados Corrigidos e Completos
// ============================================

const PRODUCTS_DATA = [
    {
        id: 1,
        name: "Sofá Chesterfield 3 Lugares",
        category: "sofas",
        price: 3899.90,
        originalPrice: 4874.88,
        image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=600&q=80",
        description: "Sofá clássico em couro legítimo. Design atemporal e acabamento impecável.",
        specs: "L: 220cm | P: 95cm | Couro Legítimo",
        isNew: false,
        isPromotion: true,
        discount: 20,
        isTopSeller: true
    },
    {
        id: 2,
        name: "Cama King Size Royal",
        category: "camas",
        price: 2599.90,
        originalPrice: 3200.00,
        image: "https://images.unsplash.com/photo-1505693416388-b0346efee749?w=600&q=80",
        description: "Conforto supremo com cabeceira estofada em veludo.",
        specs: "King Size | Veludo Premium",
        isNew: true,
        isPromotion: false,
        discount: 0,
        isTopSeller: true
    },
    {
        id: 3,
        name: "Mesa de Jantar Carvalho",
        category: "mesas",
        price: 1899.90,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1577140917170-285929dfe55c?w=600&q=80",
        description: "Mesa robusta em madeira maciça para 6 lugares.",
        specs: "L: 180cm | Madeira Maciça",
        isNew: false,
        isPromotion: false,
        discount: 0,
        isTopSeller: false
    },
    {
        id: 4,
        name: "Poltrona de Leitura Modern",
        category: "poltronas",
        price: 899.90,
        originalPrice: 1100.00,
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
        description: "Design ergonômico perfeito para seu canto de leitura.",
        specs: "Tecido Linho | Pés Palito",
        isNew: true,
        isPromotion: true,
        discount: 15,
        isTopSeller: false
    },
    {
        id: 5,
        name: "Sofá Retrátil Confort",
        category: "sofas",
        price: 2200.00,
        originalPrice: 2800.00,
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
        description: "Sofá retrátil e reclinável, ideal para home theater.",
        specs: "Aberto: 1.80m | Suede",
        isNew: false,
        isPromotion: true,
        discount: 20,
        isTopSeller: true
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
        isPromotion: false,
        discount: 0,
        isTopSeller: false
    },
    {
        id: 7,
        name: "Mesa Lateral Industrial",
        category: "mesas",
        price: 450.00,
        originalPrice: 550.00,
        image: "https://images.unsplash.com/photo-1533090481720-856c6e7591e0?w=600&q=80",
        description: "Pequena e elegante, com base de metal e tampo de madeira.",
        specs: "A: 60cm | Ferro e MDF",
        isNew: true,
        isPromotion: true,
        discount: 18,
        isTopSeller: false
    },
    {
        id: 8,
        name: "Poltrona Giratória Conforto",
        category: "poltronas",
        price: 1250.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1617300799796-f94689252c1e?w=600&q=80",
        description: "Base giratória para máximo conforto e mobilidade.",
        specs: "Base Cromada | Linho Cinza",
        isNew: false,
        isPromotion: false,
        discount: 0,
        isTopSeller: true
    },
    {
        id: 9,
        name: "Sofá de Canto Modular",
        category: "sofas",
        price: 4500.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=80",
        description: "Versatilidade para grandes salas, módulos ajustáveis.",
        specs: "5 Lugares | Tecido Cinza",
        isNew: true,
        isPromotion: false,
        discount: 0,
        isTopSeller: false
    },
    {
        id: 10,
        name: "Mesa de Centro Vidro",
        category: "mesas",
        price: 780.00,
        originalPrice: 900.00,
        image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=600&q=80",
        description: "Elegância e transparência para ampliar o ambiente.",
        specs: "Vidro Temperado 10mm",
        isNew: false,
        isPromotion: true,
        discount: 13,
        isTopSeller: false
    }
];

// ============================================
// 🎨 RENDERIZAÇÃO DE PRODUTOS
// ============================================

class ProductRenderer {
    constructor() {
        this.productsGrid = document.getElementById('productsGrid');
        this.loadMoreButton = document.getElementById('loadMore');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.productsPerPage = 6;
        this.currentPage = 1;
        this.productsPerPage = 8;
        
        this.bindEvents();
        this.renderProducts();
    }

    bindEvents() {
        this.loadMoreButton.addEventListener('click', () => this.loadMore());
        this.filterButtons.forEach(button => {
            button.addEventListener('click', (e) => this.filterProducts(e.target.dataset.filter));
        });
        // Adiciona evento de clique para links de filtro no footer
        document.querySelectorAll('.filter-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.filterProducts(e.target.dataset.filter);
                document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    getFilteredProducts() {
        if (this.currentFilter === 'all') {
            return PRODUCTS_DATA;
        }
        return PRODUCTS_DATA.filter(p => p.category === this.currentFilter);
    }

    renderProducts(append = false) {
        const products = this.getFilteredProducts();
        const start = append ? (this.currentPage - 1) * this.productsPerPage : 0;
        const end = this.currentPage * this.productsPerPage;
        const productsToRender = products.slice(start, end);

        if (!append) {
            this.productsGrid.innerHTML = '';
        }

        productsToRender.forEach(product => {
            this.productsGrid.appendChild(this.createProductCard(product));
        });

        // Adiciona a animação de fade-in para os novos cards
        const newCards = this.productsGrid.querySelectorAll('.product-card:not(.animate-in)');
        newCards.forEach((card, index) => {
            setTimeout(() => card.classList.add('animate-in'), index * 100);
        });

        this.updateLoadMoreButton();
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.productId = product.id;

        const discountBadge = product.isPromotion 
            ? `<div class="product-badge product-badge-discount">-${product.discount}%</div>` 
            : '';
        
        const newBadge = product.isNew 
            ? `<div class="product-badge product-badge-new">Novo</div>` 
            : '';

        // Uso da função formatPrice para formatação profissional
        const originalPriceHTML = product.originalPrice 
            ? `<span class="product-price-original">${formatPrice(product.originalPrice)}</span>` 
            : '';
        
        const currentPriceHTML = `<span class="product-price-current">${formatPrice(product.price)}</span>`;

        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-badges">
                    ${discountBadge}
                    ${newBadge}
                    ${topSellerBadge}
                </div>
            </div>
            <div class="product-details">
                <div class="product-info">
                    <h4 class="product-name">${product.name}</h4>
                    <p class="product-description">${product.description}</p>
                    <p class="product-specs">${product.specs}</p>
                </div>
                <div class="product-prices">
                    ${originalPriceHTML}
                    ${currentPriceHTML}
                </div>
                <div class="product-actions">
                    <button class="btn-whatsapp" onclick="productRenderer.openWhatsApp(${product.id})">
                        <i class="fab fa-whatsapp"></i>
                        <span>Comprar</span>
                    </button>
                    <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre o produto: ${product.name} (ID: ${product.id}).`)}" target="_blank" class="btn btn-whatsapp btn-small" aria-label="Comprar ${product.name} via WhatsApp">
                        <i class="fab fa-whatsapp"></i> Comprar
                    </a>
                </div>
            </div>
        `;
        return card;
    }

    updateLoadMoreButton() {
        const totalProducts = this.getFilteredProducts().length;
        const productsShown = this.currentPage * this.productsPerPage;
        
        if (productsShown >= totalProducts) {
            this.loadMoreButton.style.display = 'none';
        } else {
            this.loadMoreButton.style.display = 'inline-flex';
        }
    }

    loadMore() {
        this.currentPage++;
        this.renderProducts(true);
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
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileClose = document.getElementById('mobileClose');
    const navMenu = document.getElementById('navMenu');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evita rolagem no fundo
    });

    mobileClose.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
}

// ============================================
// ✨ ANIMAÇÕES E EFEITOS (FIX DE BUG)
// ============================================

/**
 * Função para inicializar animações de scroll.
 * Esta função corrige o erro de referência na inicialização (bug inicial).
 */
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
