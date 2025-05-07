
// Mock Product Data
const productsData = [
  {
    id: 1,
    name: "Premium Portland Cement",
    description: "High-quality, general-purpose Portland cement ideal for concrete, mortar, and grout applications.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "building-materials",
    subcategory: "cement",
    brand: "BuildRight",
    inStock: true,
    rating: 4.8,
    reviews: 156,
    featured: true
  },
  {
    id: 2,
    name: "Professional Cordless Drill Set",
    description: "20V lithium-ion cordless drill with variable speed settings, LED light, and a complete set of drill bits.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "tools-equipment",
    subcategory: "power-tools",
    brand: "PowerPro",
    inStock: true,
    rating: 4.7,
    reviews: 203,
    featured: true,
    isNew: true
  },
  {
    id: 3,
    name: "PVC Schedule 40 Pipe - 10ft",
    description: "Schedule 40 PVC pipe for residential and commercial plumbing systems.",
    price: 12.49,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "plumbing",
    subcategory: "pipes",
    brand: "FlowMaster",
    inStock: true,
    rating: 4.5,
    reviews: 89
  },
  {
    id: 4,
    name: "Heavy-Duty Extension Cord - 50ft",
    description: "12-gauge, weather-resistant extension cord perfect for powering tools and equipment.",
    price: 34.95,
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "electrical",
    subcategory: "cords",
    brand: "PowerFlex",
    inStock: true,
    rating: 4.6,
    reviews: 112
  },
  {
    id: 5,
    name: "Premium Exterior Paint - 1 Gallon",
    description: "Weather-resistant exterior paint with excellent coverage and color retention.",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "paint-supplies",
    subcategory: "exterior-paint",
    brand: "ColorMaster",
    inStock: true,
    rating: 4.4,
    reviews: 67,
    featured: true
  },
  {
    id: 6,
    name: "Construction Safety Helmet",
    description: "ANSI-certified hard hat with adjustable ratchet suspension.",
    price: 19.95,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "safety-equipment",
    subcategory: "head-protection",
    brand: "SafeGuard",
    inStock: true,
    rating: 4.9,
    reviews: 43
  },
  {
    id: 7,
    name: "Stone Veneer Panels - 8 sq ft",
    description: "Lightweight, easy-to-install stone veneer panels for interior and exterior walls.",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1502021680532-838cfc650323?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "building-materials",
    subcategory: "stone",
    brand: "StoneCraft",
    inStock: false,
    rating: 4.7,
    reviews: 28,
    featured: true
  },
  {
    id: 8,
    name: "LED Shop Light Fixture - 4ft",
    description: "Energy-efficient LED shop light that provides bright, even illumination.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "electrical",
    subcategory: "lighting",
    brand: "BrightTech",
    inStock: true,
    rating: 4.8,
    reviews: 156,
    discount: 15
  }
];

// Mock Category Data
const categoriesData = [
  {
    id: 1,
    name: "Building Materials",
    slug: "building-materials",
    description: "Foundation materials, structural components, and finishing products.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    name: "Tools & Equipment",
    slug: "tools-equipment",
    description: "Hand tools, power tools, and specialized equipment for construction.",
    image: "https://images.unsplash.com/photo-1445883470719-4ec390fc0da3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    name: "Plumbing",
    slug: "plumbing",
    description: "Pipes, fittings, fixtures, and supplies for water distribution systems.",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 4,
    name: "Electrical",
    slug: "electrical",
    description: "Wiring, outlets, switches, fixtures, and components for electrical systems.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 5,
    name: "Paint & Supplies",
    slug: "paint",
    description: "Interior and exterior paints, primers, stains, and application tools.",
    image: "https://images.unsplash.com/photo-1508838438215-c0d7ece5dfef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 6,
    name: "Hardware",
    slug: "hardware",
    description: "Fasteners, hinges, brackets, and other small components.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

// Shopping Cart Functionality
let cart = [];

// DOM Elements
const featuredProductsContainer = document.getElementById('featured-products');
const specialOffersContainer = document.getElementById('special-offers');
const categoriesContainer = document.getElementById('categories-container');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.querySelector('.close-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const navLinks = document.getElementById('nav-links');
const checkoutBtn = document.getElementById('checkout-btn');
const continueShopping = document.getElementById('continue-shopping');
const cartIcon = document.querySelector('.cart-icon');
const newsLetterForm = document.getElementById('newsletter-form');
const searchForm = document.getElementById('search-form');

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderFeaturedProducts();
  renderSpecialOffers();
  initEventListeners();
});

// Event Listeners
function initEventListeners() {
  // Mobile menu toggle
  mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Cart modal
  cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    openCartModal();
  });

  closeModal.addEventListener('click', () => {
    closeCartModal();
  });

  continueShopping.addEventListener('click', () => {
    closeCartModal();
  });

  window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
      closeCartModal();
    }
  });

  // Checkout button
  checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
      alert('Thank you for your order! This is a demo, so no actual purchase will be made.');
      cart = [];
      updateCart();
      closeCartModal();
    } else {
      alert('Your cart is empty. Please add some products before checking out.');
    }
  });

  // Newsletter form
  if (newsLetterForm) {
    newsLetterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = e.target.querySelector('input[type="email"]').value;
      alert(`Thank you for subscribing with ${email}! You'll receive our newsletter soon.`);
      e.target.reset();
    });
  }

  // Search form
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchInput = e.target.querySelector('input').value;
      alert(`Searching for "${searchInput}"... This is a demo, so no actual search will be performed.`);
    });
  }
}

// Render Functions
function renderCategories() {
  if (!categoriesContainer) return;

  let categoriesHTML = '';
  
  categoriesData.forEach(category => {
    categoriesHTML += `
      <a href="#${category.slug}" class="category-card">
        <div class="category-image">
          <img src="${category.image}" alt="${category.name}">
        </div>
        <div class="category-content">
          <h3>${category.name}</h3>
          <p>${category.description}</p>
          <span class="btn btn-primary">Shop Now</span>
        </div>
      </a>
    `;
  });
  
  categoriesContainer.innerHTML = categoriesHTML;
}

function renderFeaturedProducts() {
  if (!featuredProductsContainer) return;
  
  const featuredProducts = productsData.filter(product => product.featured);
  let productsHTML = '';
  
  featuredProducts.forEach(product => {
    productsHTML += createProductCardHTML(product);
  });
  
  featuredProductsContainer.innerHTML = productsHTML;

  // Add event listeners to "Add to Cart" buttons
  addToCartButtonListeners();
}

function renderSpecialOffers() {
  if (!specialOffersContainer) return;
  
  const discountedProducts = productsData.filter(product => product.discount);
  let productsHTML = '';
  
  discountedProducts.forEach(product => {
    productsHTML += createProductCardHTML(product);
  });
  
  specialOffersContainer.innerHTML = productsHTML || '<p class="text-center">No special offers available at the moment. Check back soon!</p>';

  // Add event listeners to "Add to Cart" buttons
  addToCartButtonListeners();
}

function createProductCardHTML(product) {
  const discountedPrice = product.discount 
    ? (product.price - (product.price * product.discount / 100)).toFixed(2)
    : null;
  
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        ${product.isNew ? '<span class="product-badge">New</span>' : ''}
        ${product.discount ? `<span class="product-badge discount">${product.discount}% OFF</span>` : ''}
        ${!product.inStock ? '<div class="out-of-stock"><span>Out of Stock</span></div>' : ''}
      </div>
      <div class="product-content">
        <h3 class="product-title">${product.name}</h3>
        <div class="product-rating">
          <span class="rating">${product.rating}</span>
          <span>★★★★★</span>
          <span class="reviews">(${product.reviews} reviews)</span>
        </div>
        <div class="product-price">
          <span class="price">$${discountedPrice || product.price.toFixed(2)}</span>
          ${discountedPrice ? `<span class="original-price">$${product.price.toFixed(2)}</span>` : ''}
        </div>
        <button class="btn btn-primary add-to-cart" ${!product.inStock ? 'disabled' : ''}>
          ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  `;
}

// Cart Functions
function addToCartButtonListeners() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const productCard = e.target.closest('.product-card');
      const productId = parseInt(productCard.dataset.id);
      const product = productsData.find(p => p.id === productId);
      
      if (product && product.inStock) {
        addToCart(product);
        
        // Show confirmation
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
          <div class="toast-content">
            <p>${product.name} added to cart!</p>
          </div>
        `;
        document.body.appendChild(toast);
        
        setTimeout(() => {
          toast.remove();
        }, 3000);
      }
    });
  });
}

function addToCart(product) {
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  
  updateCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

function updateQuantity(productId, newQuantity) {
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = newQuantity;
      updateCart();
    }
  }
}

function updateCart() {
  // Update cart count
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCountElement.textContent = totalItems;
  
  // Update cart items display
  renderCartItems();
  
  // Update cart total
  const total = cart.reduce((sum, item) => {
    const price = item.discount 
      ? item.price - (item.price * item.discount / 100)
      : item.price;
    return sum + (price * item.quantity);
  }, 0);
  
  cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

function renderCartItems() {
  if (!cartItemsContainer) return;
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }
  
  let cartItemsHTML = '';
  
  cart.forEach(item => {
    const itemPrice = item.discount 
      ? (item.price - (item.price * item.discount / 100)).toFixed(2)
      : item.price.toFixed(2);
    
    cartItemsHTML += `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${itemPrice}</div>
        </div>
        <div class="cart-item-actions">
          <div class="quantity-control">
            <button class="quantity-btn decrease">-</button>
            <input type="number" class="quantity-input" value="${item.quantity}" min="1">
            <button class="quantity-btn increase">+</button>
          </div>
          <button class="remove-item">✕</button>
        </div>
      </div>
    `;
  });
  
  cartItemsContainer.innerHTML = cartItemsHTML;
  
  // Add event listeners to cart item controls
  const decreaseButtons = cartItemsContainer.querySelectorAll('.decrease');
  const increaseButtons = cartItemsContainer.querySelectorAll('.increase');
  const quantityInputs = cartItemsContainer.querySelectorAll('.quantity-input');
  const removeButtons = cartItemsContainer.querySelectorAll('.remove-item');
  
  decreaseButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const cartItem = e.target.closest('.cart-item');
      const productId = parseInt(cartItem.dataset.id);
      const currentItem = cart.find(item => item.id === productId);
      if (currentItem) {
        updateQuantity(productId, currentItem.quantity - 1);
      }
    });
  });
  
  increaseButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const cartItem = e.target.closest('.cart-item');
      const productId = parseInt(cartItem.dataset.id);
      const currentItem = cart.find(item => item.id === productId);
      if (currentItem) {
        updateQuantity(productId, currentItem.quantity + 1);
      }
    });
  });
  
  quantityInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      const cartItem = e.target.closest('.cart-item');
      const productId = parseInt(cartItem.dataset.id);
      const newQuantity = parseInt(e.target.value);
      if (!isNaN(newQuantity) && newQuantity > 0) {
        updateQuantity(productId, newQuantity);
      } else {
        updateCart(); // Reset to current state
      }
    });
  });
  
  removeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const cartItem = e.target.closest('.cart-item');
      const productId = parseInt(cartItem.dataset.id);
      removeFromCart(productId);
    });
  });
}

function openCartModal() {
  renderCartItems();
  cartModal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeCartModal() {
  cartModal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Toast notification styling (append to stylesheet)
const style = document.createElement('style');
style.innerHTML = `
  .toast {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: var(--primary-color);
    color: white;
    padding: 15px 25px;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1050;
    animation: slideIn 0.3s, fadeOut 0.3s 2.7s;
    max-width: 300px;
  }
  
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

document.head.appendChild(style);
