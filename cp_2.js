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