
// Add CSS as a string
document.addEventListener('DOMContentLoaded', function() {
  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `
/* Base Styles and Variables */
:root {
  --primary-color: #FF6B35;
  --secondary-color: #4A4A4A;
  --light-gray: #F5F5F5;
  --dark-gray: #333333;
  --white: #FFFFFF;
  --border-color: #E0E0E0;
  --success-color: #28a745;
  --danger-color: #dc3545;
  --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --container-width: 1200px;
  --border-radius: 4px;
  --box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}

/* Reset and Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family);
  line-height: 1.6;
  color: var(--dark-gray);
  background-color: var(--white);
}

a {
  text-decoration: none;
  color: var(--secondary-color);
  transition: var(--transition);
}

a:hover {
  color: var(--primary-color);
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

.container {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 15px;
}

/* Button Styles */
.btn {
  display: inline-block;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  border: none;
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--white);
}

.btn-primary:hover {
  background-color: #e05d2c;
  transform: translateY(-2px);
}

.btn-outline {
  background-color: transparent;
  color: var(--white);
  border: 2px solid var(--white);
}

.btn-outline:hover {
  background-color: var(--white);
  color: var(--primary-color);
  transform: translateY(-2px);
}

/* Header Styles */
header {
  background-color: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.logo h1 {
  color: var(--primary-color);
  font-size: 1.8rem;
  font-weight: 700;
}

.search-bar {
  flex: 1;
  margin: 0 20px;
  max-width: 500px;
}

.search-bar form {
  display: flex;
  position: relative;
}

.search-bar input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 0.9rem;
}

.search-bar button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.1rem;
  color: var(--secondary-color);
  cursor: pointer;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  font-weight: 500;
  font-size: 0.95rem;
}

.cart-icon {
  position: relative;
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.category-nav {
  background-color: var(--secondary-color);
  padding: 10px 0;
}

.category-nav ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.category-nav li {
  margin: 0 15px;
}

.category-nav a {
  color: var(--white);
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 5px 0;
}

.category-nav a:hover {
  color: var(--primary-color);
}

.special-link {
  color: var(--primary-color) !important;
  font-weight: 700 !important;
}

/* Hero Section */
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: var(--white);
  padding: 100px 0;
  text-align: left;
}

.hero-content {
  max-width: 600px;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero h1 span {
  color: var(--primary-color);
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

/* Categories Section */
.categories {
  padding: 60px 0;
  background-color: var(--light-gray);
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 10px;
  color: var(--secondary-color);
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background-color: var(--primary-color);
  margin: 10px auto 0;
}

.section-subtitle {
  text-align: center;
  color: var(--secondary-color);
  margin-bottom: 40px;
  font-size: 1.1rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
}

.category-card {
  background-color: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.category-image {
  height: 180px;
  overflow: hidden;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.category-card:hover .category-image img {
  transform: scale(1.05);
}

.category-content {
  padding: 20px;
  text-align: center;
}

.category-content h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.category-content p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 15px;
  height: 40px;
  overflow: hidden;
}

/* Product Sections */
.featured-products,
.special-offers {
  padding: 60px 0;
}

.featured-products {
  background-color: var(--white);
}

.special-offers {
  background-color: #fff9f6;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
}

.product-card {
  background-color: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.product-image {
  height: 200px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
}

.product-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #3b82f6;
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 500;
}

.product-badge.discount {
  background-color: var(--primary-color);
}

.out-of-stock {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.out-of-stock span {
  background-color: #4a4a4a;
  color: white;
  padding: 8px 15px;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1rem;
}

.product-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;
  min-height: 50px;
  line-height: 1.4;
}

.product-rating {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 5px;
}

.product-rating .rating {
  font-weight: 600;
  margin-right: 5px;
}

.product-rating .reviews {
  color: #666;
  font-size: 0.9rem;
}

.product-price {
  margin-top: auto;
  margin-bottom: 15px;
}

.price {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary-color);
}

.original-price {
  text-decoration: line-through;
  color: #888;
  font-size: 0.9rem;
  margin-left: 10px;
}

.product-card .btn {
  width: 100%;
}

/* Services Section */
.services {
  padding: 60px 0;
  background-color: var(--light-gray);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
}

.service {
  background-color: var(--white);
  padding: 30px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  text-align: center;
  transition: var(--transition);
}

.service:hover {
  transform: translateY(-5px);
}

.service .icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.service h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.service p {
  color: #666;
  font-size: 0.9rem;
}

/* Newsletter Section */
.newsletter {
  background-color: var(--secondary-color);
  color: var(--white);
  padding: 60px 0;
}

.newsletter-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.newsletter h2 {
  font-size: 2rem;
  margin-bottom: 15px;
}

.newsletter p {
  margin-bottom: 25px;
  opacity: 0.9;
}

.newsletter form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.newsletter input {
  flex: 1;
  min-width: 200px;
  padding: 12px 15px;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
}

/* Footer Styles */
footer {
  background-color: var(--dark-gray);
  color: #bbb;
  padding: 60px 0 30px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.footer-column h3 {
  color: var(--white);
  margin-bottom: 20px;
  font-size: 1.2rem;
  position: relative;
  padding-bottom: 10px;
}

.footer-column h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 30px;
  background-color: var(--primary-color);
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column a {
  color: #bbb;
}

.footer-column a:hover {
  color: var(--primary-color);
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-icons a {
  font-size: 1.5rem;
}

address {
  font-style: normal;
  line-height: 1.8;
}

.footer-bottom {
  border-top: 1px solid #444;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

/* Modal Styles */
.modal {
  display: none;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1100;
  overflow: auto;
}

.modal-content {
  background-color: var(--white);
  margin: 10% auto;
  padding: 30px;
  border-radius: var(--border-radius);
  max-width: 800px;
  position: relative;
}

.close-modal {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal h2 {
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--border-color);
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid var(--border-color);
}

.cart-item-image {
  width: 80px;
  height: 80px;
  overflow: hidden;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  margin-right: 20px;
}

.cart-item-details {
  flex: 1;
}

.cart-item-name {
  font-weight: 600;
  margin-bottom: 5px;
}

.cart-item-price {
  color: var(--primary-color);
  font-weight: 600;
}

.cart-item-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.quantity-control {
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
}

.quantity-btn {
  padding: 5px 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.quantity-input {
  width: 40px;
  text-align: center;
  border: none;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
}

.remove-item {
  color: var(--danger-color);
  cursor: pointer;
  background: none;
  border: none;
}

.cart-summary {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.cart-total {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.cart-summary .btn {
  margin-right: 10px;
  margin-bottom: 10px;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .hero h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-wrap: wrap;
  }
  
  .logo {
    margin-bottom: 15px;
    width: 100%;
    text-align: center;
  }
  
  .search-bar {
    order: 1;
    margin: 0;
    width: calc(100% - 50px);
  }
  
  .mobile-menu-button {
    display: block;
    order: 0;
  }
  
  .main-nav {
    order: 2;
    width: auto;
  }
  
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--white);
    box-shadow: var(--box-shadow);
    padding: 20px;
    z-index: 1000;
  }
  
  .nav-links.show {
    display: flex;
  }
  
  .nav-links li {
    margin: 10px 0;
    width: 100%;
  }
  
  .category-nav {
    overflow-x: auto;
    white-space: nowrap;
  }
  
  .category-nav ul {
    justify-content: flex-start;
  }
  
  .hero {
    padding: 60px 0;
    text-align: center;
  }
  
  .hero-content {
    margin: 0 auto;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .newsletter form {
    flex-direction: column;
  }
  
  .newsletter .btn {
    width: 100%;
  }
  
  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.5rem;
  }
  
  .category-grid,
  .products-grid,
  .services-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

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

  // JavaScript functionality:

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
  renderCategories();
  renderFeaturedProducts();
  renderSpecialOffers();
  initEventListeners();

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
});
