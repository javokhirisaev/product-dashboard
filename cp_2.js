function fetchProductsThen() {
  fetch('https://www.course-api.com/javascript-store-products')
    .then(response => response.json())
    .then(data => {
      console.log("Products fetched using .then():");
      data.slice(0, 5).forEach(product => {
        console.log(product.fields.name);
      });
    })
    .catch(error => {
      console.error("Fetch error (then):", error);
    });
}

async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  products.slice(0, 5).forEach(product => {
    const { name, price, image } = product.fields;

    const card = document.createElement('div');
    card.classList.add('product-card');

    const img = document.createElement('img');
    img.src = image[0].url;

    const productName = document.createElement('p');
    productName.classList.add('product-name');
    productName.textContent = name;

    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.textContent = `$${(price / 100).toFixed(2)}`;

    card.appendChild(img);
    card.appendChild(productName);
    card.appendChild(productPrice);
    container.appendChild(card);
  });
}
