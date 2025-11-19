// ============================================
// BELEZA DE MÓVEIS - script.js (VERSÃO FINAL CORRIGIDA)
// ============================================

// Configurações
const CONFIG = {
  whatsappNumber: '5571992714599',
  currency: 'BRL',
  locale: 'pt-BR',
  companyName: 'BELEZA DE MÓVEIS'
};

// Dados dos produtos - ESTRUTURA OTIMIZADA SEM DUPLICIDADES
const PRODUCTS_DATA = [
  // ===== PRODUTO 1 =====
  {
    id: 1,
    name: "Sofá Chesterfield 3 Lugares",
    category: "sofas",
    price: 3899.90,
    originalPrice: 4874.88,
    image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&h=600&fit=crop",
    description: "Sofá Chesterfield clássico em couro legítimo marrom. Design atemporal com acabamento impecável.",
    specs: "Largura: 220cm | Profundidade: 95cm | Altura: 85cm | Material: Couro Legítimo",
    isNew: false,
    isPromotion: true,
    discount: 20,
    isTopSeller: true
  },
  // ===== PRODUTO 2 =====
  {
    id: 2,
    name: "Cama Queen Size Diamante",
    category: "camas",
    price: 5299.00,
    originalPrice: 6623.75,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
    description: "Cama queen size com cabeceira diamantada luxuosa. Estrutura em madeira maciça com acabamento premium.",
    specs: "Largura: 198cm | Comprimento: 208cm | Altura: 120cm | Madeira Maciça",
    isNew: false,
    isPromotion: true,
    discount: 20,
    isTopSeller: true
  },
  // ===== PRODUTO 3 =====
  {
    id: 3,
    name: "Mesa de Jantar Oval Premium",
    category: "mesas",
    price: 3199.90,
    originalPrice: 3999.88,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    description: "Mesa de jantar oval em mármore travertino. Design elegante para ambientes sofisticados.",
    specs: "Largura: 220cm | Profundidade: 110cm | Altura: 75cm | Mármore Travertino",
    isNew: true,
    isPromotion: true,
    discount: 20,
    isTopSeller: false
  },
  // ===== PRODUTO 4 =====
  {
    id: 4,
    name: "Poltrona Reclinável Luxo",
    category: "poltronas",
    price: 2499.00,
    originalPrice: 3123.75,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    description: "Poltrona reclinável em couro sintético premium. Conforto e estilo em um só produto.",
    specs: "Largura: 85cm | Profundidade: 90cm | Altura: 105cm | Couro Sintético Premium",
    isNew: false,
    isPromotion: true,
    discount: 20,
    isTopSeller: true
  },
  // ===== PRODUTO 5 =====
  {
    id: 5,
    name: "Sofá Modular Contemporâneo",
    category: "sofas",
    price: 4599.90,
    originalPrice: 5749.88,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=600&fit=crop",
    description: "Sofá modular contemporâneo em tecido suede premium. Versatilidade e elegância para seu living.",
    specs: "Largura: 280cm | Profundidade: 180cm | Altura: 85cm | Tecido Suede Premium",
    isNew: true,
    isPromotion: true,
    discount: 20,
    isTopSeller: true
  },
  // ===== PRODUTO 6 =====
  {
    id: 6,
    name: "Guarda-Roupa 6 Portas Espelhado",
    category: "quarto",
    price: 3899.90,
    originalPrice: 4874.88,
    image: "https://images.unsplash.com/photo-1558990390-517c918c5e60?w=800&h=600&fit=crop",
    description: "Guarda-roupa com 6 portas espelhadas. Amplo espaço interno com organização inteligente.",
    specs: "Largura: 240cm | Altura: 220cm | Profundidade: 60cm | Espelhos de Segurança",
    isNew: true,
    isPromotion: true,
    discount: 20,
    isTopSeller: false
  },
  // ===== PRODUTO 7 =====
  {
    id: 7,
    name: "Cadeira Executiva Premium",
    category: "escritorio",
    price: 1899.90,
    originalPrice: 2374.88,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop",
    description: "Cadeira executiva em couro legítimo. Ergonomia e sofisticação para seu escritório.",
    specs: "Altura: 120cm | Largura: 65cm | Couro Legítimo | Base Giratória",
    isNew: false,
    isPromotion: true,
    discount: 20,
    isTopSeller: true
  },
  // ===== PRODUTO 8 =====
  {
    id: 8,
    name: "Mesa de Centro de Vidro",
    category: "living",
    price: 1599.90,
    originalPrice: 1999.88,
    image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&h=600&fit=crop",
    description: "Mesa de centro com tampo de vidro temperado. Design moderno e elegante.",
    specs: "Largura: 120cm | Profundidade: 60cm | Vidro Temperado 8mm",
    isNew: true,
    isPromotion: true,
    discount: 20,
    isTopSeller: false
  },
  // ===== PRODUTO 9 =====
  {
    id: 9,
    name: "Conjunto de Jantar 6 Cadeiras",
    category: "jantar",
    price: 4499.90,
    originalPrice: 5624.88,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    description: "Conjunto completo com mesa redonda e 6 cadeiras estofadas. Perfeito para receber.",
    specs: "Mesa: 150cm Ø | Cadeira: 45x50x90cm | Madeira Maciça",
    isNew: false,
    isPromotion: true,
    discount: 20,
    isTopSeller: true
  },
  // ===== PRODUTO 10 =====
  {
    id: 10,
    name: "Sofá de Jardim Resinado",
    category: "jardim",
    price: 2899.90,
    originalPrice: 3624.88,
    image: "https://images.unsplash.com/photo-1588991208658-069f5310df04?w=800&h=600&fit=crop",
    description: "Sofá de jardim em resinado com almofadas impermeáveis. Resistência e conforto ao ar livre.",
    specs: "Largura: 200cm | Profundidade: 80cm | Resinado Premium | Almofadas Impermeáveis",
    isNew: true,
    isPromotion: true,
    discount: 20,
    isTopSeller: false
  },
  // ===== PRODUTO 11 =====
  {
    id: 11,
    name: "Estante Modular 5 Prateleiras",
    category: "escritorio",
    price: 1299.90,
    originalPrice: 1624.88,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop",
    description: "Estante modular com 5 prateleiras ajustáveis. Organização versátil para seu espaço.",
    specs: "Largura: 180cm | Altura: 200cm | MDF de Alta Densidade",
    isNew: false,
    isPromotion: true,
    discount: 20,
    isTopSeller: true
  },
  // ===== PRODUTO 12 =====
  {
    id: 12,
    name: "Poltrona de Balanço Vintage",
    category: "poltronas",
    price: 2199.90,
    originalPrice: 2749.88,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    description: "Poltrona de balanço vintage em tecido macio. Conforto acolchoado e estilo retrô.",
    specs: "Largura: 70cm | Profundidade: 85cm | Estrutura em Madeira | Tecido Premium",
    isNew: true,
    isPromotion: true,
    discount: 20,
    isTopSeller: false
  },
  // ===== PRODUTO 13 - NOVO =====
  {
    id: 13,
    name: "Mesa de Jantar Retangular 8 Lugares",
    category: "jantar",
    price: 4399.90,
    originalPrice: 5499.88,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    description: "Mesa retangular em madeira de demolição. Acomoda até 8 pessoas com elegância.",
    specs: "Largura: 240cm | Profundidade: 100cm | Altura: 75cm | Madeira de Demolição",
    isNew: true,
    isPromotion: true,
    discount: 20,
    isTopSeller: true
  },
  // ===== PRODUTO 14 - NOVO =====
  {
    id: 14,
    name: "Mesa de Centro Rústica",
    category: "living",
    price: 1899.90,
    originalPrice: 2374.88,
    image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&h=600&fit=crop",
    description: "Mesa de centro em madeira maciça com design rústico moderno.",
    specs: "Largura: 120cm | Profundidade: 60cm | Altura: 45cm | Madeira Maciça",
    isNew: true,
    isPromotion: true,
    discount: 20,
    isTopSeller: false
  }
  // ↑↑↑↑↑↑↑↑↑↑ NÃO COLOQUE VÍRGULA NO ÚLTIMO PRODUTO ↑↑↑↑↑↑↑↑↑↑
];  // ← Fechamento do array (NÃO MEXA)

// RESTO DO CÓDIGO (não altere nada abaixo)...

// Utilitários
function formatCurrencyBR(value) {
  try {
    return new Intl.NumberFormat(CONFIG.locale, { 
      style: 'currency', 
      currency: CONFIG.currency 
    }).format(value);
  } catch (e) {
    return `R$ ${Number(value).toFixed(2).replace('.', ',')}`;
  }
}

function debounce(fn, wait = 100) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}

// ... (todo o resto do código permanece igual) ...

// Classe para renderizar produtos
class ProductRenderer {
  constructor(options = {}) {
    this.products = PRODUCTS_DATA.slice();
    this.filtered = this.products;
    this.perPage = options.perPage || 6;
    this.page = 1;
    this.productsGrid = document.getElementById('productsGrid');
    this.loadMoreBtn = document.getElementById('loadMoreBtn');
    this.init();
  }

  init() {
    this.renderProducts();
    this.bindFilterButtons();
    this.bindLoadMore();
  }

  bindFilterButtons() {
    const buttons = document.querySelectorAll('.filter-btn');
    if (!buttons || buttons.length === 0) return;
    
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filter = e.currentTarget.dataset.filter || 'all';
        this.applyFilter(filter);
      });
    });
  }

  bindLoadMore() {
    if (!this.loadMoreBtn) return;
    this.loadMoreBtn.addEventListener('click', () => {
      this.page++;
      this.renderProducts();
    });
  }

  applyFilter(filter) {
    // Atualizar botões ativos
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    // Resetar paginação e aplicar filtro
    this.page = 1;
    this.filtered = filter === 'all' 
      ? this.products.slice() 
      : this.products.filter(product => product.category === filter);
    
    this.renderProducts();
    
    // Scroll suave para os produtos
    this.productsGrid.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }

  createCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-badges">
          ${product.isNew ? '<span class="badge badge-new">Novo</span>' : ''}
          ${product.isPromotion ? `<span class="badge badge-promotion">-${discountPercent}%</span>` : ''}
          ${product.isTopSeller ? '<span class="badge badge-top">Mais Vendido</span>' : ''}
        </div>
      </div>
      
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <p class="product-specs">${product.specs}</p>
        
        <div class="product-price">
          <span class="current-price">${formatCurrencyBR(product.price)}</span>
          ${product.isPromotion ? `<span class="original-price">${formatCurrencyBR(product.originalPrice)}</span>` : ''}
        </div>
        
        <div class="product-actions">
          <button class="btn btn-whatsapp btn-small" onclick="openWhatsApp(${product.id})">
            <i class="fab fa-whatsapp"></i>
            <span>Comprar</span>
          </button>
        </div>
      </div>
    `;
    
    return card;
  }

  renderProducts() {
    if (!this.productsGrid) return;

    const startIndex = (this.page - 1) * this.perPage;
    const endIndex = startIndex + this.perPage;
    const productsToShow = this.filtered.slice(0, endIndex);
    
    if (this.page === 1) {
      this.productsGrid.innerHTML = '';
    }
    
    const newProducts = this.filtered.slice(startIndex, endIndex);
    newProducts.forEach(product => {
      this.productsGrid.appendChild(this.createCard(product));
    });
    
    // Mostrar/ocultar botão "Carregar Mais"
    if (this.loadMoreBtn) {
      if (endIndex >= this.filtered.length) {
        this.loadMoreBtn.style.display = 'none';
      } else {
        this.loadMoreBtn.style.display = 'inline-flex';
      }
    }
    
    // Animação de entrada dos novos produtos
    this.animateNewProducts();
  }

  animateNewProducts() {
    const newCards = this.productsGrid.querySelectorAll('.product-card');
    const startIndex = (this.page - 1) * this.perPage;
    
    for (let i = startIndex; i < newCards.length; i++) {
      const card = newCards[i];
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, (i - startIndex) * 100);
    }
  }
}

// Função para filtrar produtos (usada nos links da coleção)
function filterProducts(category) {
  const productRenderer = window.productRenderer;
  if (productRenderer) {
    productRenderer.applyFilter(category);
  }
}

// Função para abrir WhatsApp
function openWhatsApp(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  
  const message = `Olá! Gostaria de saber mais sobre o produto: ${product.name} - ${formatCurrencyBR(product.price)}`;
  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

// Função para compartilhar produto
function shareProduct(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  
  if (navigator.share) {
    navigator.share({
      title: `${product.name} - ${CONFIG.companyName}`,
      text: product.description,
      url: window.location.href
    });
  } else {
    // Fallback para navegadores que não suportam Web Share API
    const shareText = `${product.name} - ${formatCurrencyBR(product.price)}\n${product.description}\n${window.location.href}`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText).then(() => {
        showNotification('Link copiado para a área de transferência!');
      });
    } else {
      // Fallback para navegadores antigos
      const textArea = document.createElement('textarea');
      textArea.value = shareText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showNotification('Link copiado para a área de transferência!');
    }
  }
}

// Função para mostrar notificações
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Estilos da notificação
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    background: type === 'success' ? '#2E7D32' : '#C62828',
    color: 'white',
    padding: '16px 24px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: '10000',
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease'
  });
  
  document.body.appendChild(notification);
  
  // Animação de entrada
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remover notificação após 3 segundos
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Classe para gerenciar a navbar
class NavbarManager {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.navMenu = document.getElementById('navMenu');
    this.mobileToggle = document.getElementById('mobileToggle');
    this.init();
  }

  init() {
    this.bindScrollEvent();
    this.bindMobileMenu();
    this.bindSmoothScroll();
  }

  bindScrollEvent() {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', debounce(() => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
      
      lastScrollY = currentScrollY;
    }, 10));
  }

  bindMobileMenu() {
    if (this.mobileToggle) {
      this.mobileToggle.addEventListener('click', () => {
        this.navMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }
    
    // Fechar menu ao clicar em um link
    const navLinks = this.navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
      if (!this.navMenu.contains(e.target) && !this.mobileToggle.contains(e.target)) {
        this.navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  bindSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Considerar altura da navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Classe para gerenciar animações e efeitos visuais
class AnimationManager {
  constructor() {
    this.init();
  }

  init() {
    this.initScrollAnimations();
    this.initTypingEffect();
    this.initCounters();
  }

  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observar elementos para animação
    const elementsToAnimate = document.querySelectorAll(
      '.section-header, .collection-item, .feature, .contact-item'
    );
    
    elementsToAnimate.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    // Adicionar classe de animação
    const style = document.createElement('style');
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);
  }

  initTypingEffect() {
    // Efeito de digitação para o título principal
    if (typeof Splitting !== 'undefined') {
      Splitting({
        target: '.hero-title',
        by: 'chars'
      });

      const chars = document.querySelectorAll('.hero-title .char');
      chars.forEach((char, index) => {
        char.style.animationDelay = `${index * 0.05}s`;
      });
    }
  }

  initCounters() {
    // Contadores animados (se houver)
    const counters = document.querySelectorAll('[data-counter]');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-counter'));
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

      // Iniciar animação quando visível
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(counter);
    });
  }
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar componentes
  window.productRenderer = new ProductRenderer();
  window.navbarManager = new NavbarManager();
  window.animationManager = new AnimationManager();
  
  // Adicionar classe para indicar que JS está carregado
  document.body.classList.add('js-loaded');
  
  console.log(`${CONFIG.companyName} - Site inicializado com sucesso!`);
});

// Tratamento de erros global
window.addEventListener('error', (e) => {
  console.error('Erro no JavaScript:', e.error);
});

// Tratamento de erros de recursos
window.addEventListener('error', (e) => {
  if (e.target.tagName === 'IMG') {
    console.warn('Imagem não carregada:', e.target.src);
    // Adicionar imagem de fallback se necessário
  }
}, true);