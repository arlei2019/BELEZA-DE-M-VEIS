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
        name: "Cama Queen Wood",
        category: "camas",
        price: 1950.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80",
        description: "Estrutura minimalista em madeira de reflorestamento.",
        specs: "Queen Size | Madeira Pinus",
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
// 🧱 RENDERIZADOR DE PRODUTOS
// ============================================

class ProductRenderer {
    constructor() {
        this.productsGrid = document.getElementById('productsGrid');
        this.loadMoreButton = document.getElementById('loadMore');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.productsPerPage = 6;
        this.currentPage = 1;
        this.currentFilter = 'all';
        
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
                ${discountBadge}
                ${newBadge}
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
                    <button class="btn btn-primary btn-add-cart" data-product-id="${product.id}" aria-label="Adicionar ${product.name} ao carrinho">
                        Detalhes
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

    filterProducts(filter) {
        if (this.currentFilter === filter) return; // Não refiltrar se for o mesmo

        this.currentFilter = filter;
        this.currentPage = 1;
        
        // Atualiza a classe 'active' nos botões de filtro
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.filter-btn[data-filter="${filter}"]`).classList.add('active');

        this.renderProducts();
    }
}

// ============================================
// 🧭 NAVEGAÇÃO E RESPONSIVIDADE
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
// 📞 FORMULÁRIO DE CONTATO (WHATSAPP)
// ============================================

function initFormHandlers() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // 1. Coletar dados do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // 2. Montar a mensagem crua para o WhatsApp
            const rawWaMessage = `*Nova Mensagem - Site BELEZA DE MÓVEIS*\n\n*Assunto:* ${subject}\n*Nome:* ${name}\n*E-mail:* ${email}\n*Telefone:* ${phone}\n\n*Mensagem:*\n${message}`;

            // 3. Codificar a mensagem para URL
            const encodedMessage = encodeURIComponent(rawWaMessage);
            
            // 4. Pegar o número de telefone do seu objeto CONFIG
            const whatsappNumber = CONFIG.whatsappNumber; // '5571992714599'

            // 5. Criar a URL final
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // 6. Mudar o botão para "Abrindo WhatsApp..."
            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Abrindo WhatsApp...';
            submitBtn.disabled = true;

            // 7. Abrir o WhatsApp em uma nova aba
            window.open(whatsappURL, '_blank');

            // 8. Resetar o formulário e o botão após 1.5 segundos
            setTimeout(() => {
                alert('Mensagem enviada! Você será redirecionado para o WhatsApp.');
                e.target.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
}

// ============================================
// ✨ ANIMAÇÕES E EFEITOS (FIX DE BUG)
// ============================================

/**
 * Função para inicializar animações de scroll.
 * Esta função corrige o erro de referência na inicialização (bug inicial).
 */
function initScrollAnimations() {
    // 1. Animação de Fade-In para seções
    const elementsToAnimate = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Começa a animar quando 10% do elemento está visível

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // 2. Comportamento da Navbar ao rolar
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}


// ============================================
// 🚀 INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    new ProductRenderer();
    initNavigation();
    initScrollAnimations(); // AGORA CORRIGIDA
    initFormHandlers();
});