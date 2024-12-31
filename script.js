const products = [
  { id: 1, name: '4oz Combat Sports Pro Style MMA Gloves - Size S/M', price: 29.99, category: 'MMA', image: 'mmaglove4.jpg' },
  { id: 2, name: '4oz Combat Sports Pro Style MMA Gloves - Size L/XL', price: 29.99, category: 'MMA', image: 'mmaglove1.jpg' },
  { id: 3, name: '7oz Combat Sports Max Strike MMA Sparring Gloves - Size S/M', price: 79.99, category: 'MMA', image: 'mmaglove2.jpg' },
  { id: 4, name: '7oz Combat Sports Max Strike MMA Sparring Gloves - Size L/XL', price: 79.99, category: 'MMA', image: 'mmaglove3.jpg' },
  { id: 5, name: 'Fairtex BGV Muay Thai Boxing Gloves - 8oz', price: 89.99, category: 'Striking', image: 'boxingglove1.jpg' },
  { id: 6, name: 'Fairtex BGV Muay Thai Boxing Gloves - 10z', price: 89.99, category: 'Striking', image: 'boxingglove2.jpg' },
  { id: 7, name: 'Fairtex BGV Muay Thai Boxing Gloves - 12oz', price: 89.99, category: 'Striking', image: 'boxingglove3.jpg' },
  { id: 8, name: 'Fairtex BGV Muay Thai Boxing Gloves - 14oz', price: 89.99, category: 'Striking', image: 'boxingglove4.jpg' },
  { id: 9, name: 'Fairtex BGV Muay Thai Boxing Gloves - 16oz', price: 89.99, category: 'Striking', image: 'boxingglove5.jpg' },
  { id: 10, name: 'Fairtex Curved MMA/Muay Thai Pads', price: 139.99, category: 'Striking', image: 'muaythaipads.jpg' },
  { id: 11, name: 'Fairtex SP5 Muay Thai Shin Guards for Men, Women, Kids - Size S/M', price: 89.99, category: 'Striking', image: 'shinguards1.jpg' },
  { id: 12, name: 'Fairtex SP5 Muay Thai Shin Guards for Men, Women, Kids - Size L/XL', price: 89.99, category: 'Striking', image: 'shinguards2.jpg' },
  { id: 13, name: 'CLETO REYES Boxing Punching Mitts', price: 174.99, category: 'Striking', image: 'boxingmitts.jpg' },
  { id: 14, name: 'YOKKAO Muay Thai Boxing Shorts for Men & Women | Premium Satin Shorts - Small', price: 79.99, category: 'Striking', image: 'muaythaishorts1.jpg' },
  { id: 15, name: 'YOKKAO Muay Thai Boxing Shorts for Men & Women | Premium Satin Shorts - Medium', price: 79.99, category: 'Striking', image: 'muaythaishorts2.jpg' },
  { id: 16, name: 'YOKKAO Muay Thai Boxing Shorts for Men & Women | Premium Satin Shorts - Large', price: 79.99, category: 'Striking', image: 'muaythaishorts3.jpg' },
  { id: 17, name: 'Hayabusa Lightweight Jiu Jitsu Gi - White', price: 139.99, category: 'BJJ', image: 'whitebjjgi.jpg' },
  { id: 18, name: 'Hayabusa Lightweight Jiu Jitsu Gi - Blue', price: 139.99, category: 'BJJ', image: 'bluebjjgi.jpg' },
  { id: 19, name: 'Hayabusa Lightweight Jiu Jitsu Gi - Black', price: 139.99, category: 'BJJ', image: 'blackbjjgi.jpg' },
  { id: 20, name: 'Venum x TEKKEN 8 - Marshall Law Fight Shorts', price: 69.99, category: 'MMA', image: 'mmashorts1.webp' },
  { id: 21, name: 'Venum Tiger Fight Shorts - Black/Neon Orange', price: 69.99, category: 'MMA', image: 'mmashorts2.webp' },
  { id: 22, name: 'Hayabusa Adult BJJ Belt - White', price: 24.99, category: 'BJJ', image: 'Whitebelt.jpg' },
  { id: 23, name: 'Hayabusa Adult BJJ Belt - Blue', price: 24.99, category: 'BJJ', image: 'Bluebelt.jpg' },
  { id: 24, name: 'Hayabusa Adult BJJ Belt - Purple', price: 24.99, category: 'BJJ', image: 'Purplebelt.jpg' },
  { id: 25, name: 'Hayabusa Adult BJJ Belt - Brown', price: 24.99, category: 'BJJ', image: 'Brownbelt.jpg' },
  { id: 26, name: 'Hayabusa Adult BJJ Belt - Black', price: 24.99, category: 'BJJ', image: 'Blackbelt.jpg' },
  { id: 27, name: 'Gold BJJ Foundation Ranked Rash Guard - White', price: 39.99, category: 'BJJ', image: 'whiterashguard.jpg' },
  { id: 28, name: 'Gold BJJ Foundation Ranked Rash Guard - Blue', price: 39.99, category: 'BJJ', image: 'bluerashguard.jpg' },
  { id: 29, name: 'Gold BJJ Foundation Ranked Rash Guard - Purple', price: 39.99, category: 'BJJ', image: 'purplerashguard.jpg' },
  { id: 30, name: 'Gold BJJ Foundation Ranked Rash Guard - Brown', price: 39.99, category: 'BJJ', image: 'brownrashguard.jpg' },
  { id: 31, name: 'Gold BJJ Foundation Ranked Rash Guard - Black', price: 39.99, category: 'BJJ', image: 'blackrashguard.jpg' },
  { id: 32, name: 'Long Sleeve Gold BJJ Foundation Ranked Rash Guard - White', price: 39.99, category: 'BJJ', image: 'lwhiterashguard.jpg' },
  { id: 33, name: 'Long Sleeve Gold BJJ Foundation Ranked Rash Guard - Blue', price: 39.99, category: 'BJJ', image: 'lbluerashguard.jpg' },
  { id: 34, name: 'Long Sleeve Gold BJJ Foundation Ranked Rash Guard - Purple', price: 39.99, category: 'BJJ', image: 'lpurplerashguard.jpg' },
  { id: 35, name: 'Long Sleeve Gold BJJ Foundation Ranked Rash Guard - Brown', price: 39.99, category: 'BJJ', image: 'lbrownrashguard.jpg' },
  { id: 36, name: 'Long Sleeve Gold BJJ Foundation Ranked Rash Guard - Black', price: 39.99, category: 'BJJ', image: 'lblackrashguard.jpg' }
];

let currentFilter = [];
let searchTerm = '';
let currentSort = 'default';

function displayProducts(filteredProducts) {
  const productList = document.getElementById('productList');
  productList.innerHTML = ''; 

  if (filteredProducts.length === 0) {
    productList.innerHTML = '<p>No products found.</p>'; 
  } else {
    filteredProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price.toFixed(2)}</p>
        <p>Category: ${product.category}</p>
      `;

      productList.appendChild(productCard);
    });
  }
}


function filterAndSortProducts() {
  let filteredProducts = products.filter(product => {
    const matchesCategory = currentFilter.length === 0 || currentFilter.includes(product.category);
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

 
  if (currentSort === 'priceAsc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'priceDesc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'nameAsc') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === 'nameDesc') {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  displayProducts(filteredProducts);
}


document.getElementById('searchBar').addEventListener('input', (e) => {
  searchTerm = e.target.value; 
  filterAndSortProducts(); 
});


document.getElementById('sortOptions').addEventListener('change', (e) => {
  currentSort = e.target.value;
  filterAndSortProducts();
});


document.querySelectorAll('.categoryFilter').forEach(checkbox => {
  checkbox.addEventListener('change', (e) => {
    currentFilter = Array.from(document.querySelectorAll('.categoryFilter:checked'))
      .map(checkbox => checkbox.value);
    filterAndSortProducts();
  });
});


filterAndSortProducts();
