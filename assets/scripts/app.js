class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
                      <div>
                      <img src="${this.product.imageUrl}" alt="${this.product.title}">
                      <div class="product-item__content">
                          <h2>${this.product.title}</h2>
                          <h3>\$${this.product.price}</h3>
                          <p>${this.product.description}</p>
                          <button>Add to Cart</button>
                      </div>`;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A pillow",
      "https://www.google.com/imgres?q=pillow&imgurl=https%3A%2F%2Flionco.lk%2Fwp-content%2Fuploads%2F2023%2F11%2FUntitled-design-1-1-e1700221679311.png&imgrefurl=https%3A%2F%2Flionco.lk%2Fproduct%2Fpillow%2F&docid=_-5TY3xk0XgAkM&tbnid=iq9Bv0EIK9SgzM&vet=12ahUKEwj6ptCrkoGKAxXO7jgGHUOmF7YQM3oECGkQAA..i&w=1430&h=943&hcb=2&ved=2ahUKEwj6ptCrkoGKAxXO7jgGHUOmF7YQM3oECGkQAA",
      "A soft pillow",
      19.99
    ),
    new Product(
      "A carpet",
      "https://www.google.com/imgres?q=carpet&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81W6An71HSL.jpg&imgrefurl=https%3A%2F%2Fwww.desertcart.lk%2Fproducts%2F64747368-dailz-ethnic-velvet-touch-abstract-chenille-carpet-55-x-80-maroon&docid=HGYup14xw_uuCM&tbnid=HaFTma0vzU4vWM&vet=12ahUKEwjbmMWdk4GKAxUVyqACHejMJCoQM3oECGcQAA..i&w=1694&h=1692&hcb=2&ved=2ahUKEwjbmMWdk4GKAxUVyqACHejMJCoQM3oECGcQAA",
      "A which you might like",
      19.99
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
