let carts = document.querySelectorAll(".cart-btn1");
const count = document.querySelector(".cart-ham span");
const bag = document.querySelector(".nav-bag img");
let products = [
    {
        name: 'pixi',
        id:4,
        tag: "grid4.webp",
        price: 36.95,
        inCart: 0,
    },
   
    {
        name: 'ilia',
        id:2,
        tag: "grid2.2.webp",
        price: 38.65,
        inCart: 0,
    },
    {
        name: 'fenty',
        id:1,
        tag: "grid1.1.webp",
        price: 23.95,
        inCart: 0,
    },
    {
        name: 'kenzoki hydration',
        id:3,
        tag: "grid3.3.webp",
        price: 43.95,
        inCart: 0,
    },
    
   
    
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })

}

carts.forEach( item=>item.addEventListener('click', () => {
    bag.classList.remove('animation');
    window.requestAnimationFrame(function() {
      bag.classList.add('animation');
    });
  }));

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    console.log(productNumbers);
    if(productNumbers)
    {
        count.textContent = productNumbers;
    }

}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    console.log(productNumbers);

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        count.textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        count.textContent = 1;
    }
    setItems(product);
}



function setItems(products) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].inCart += 1;
    }
    else {
        products.inCart = 1;
        cartItems = {
            [products.tag]: products
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    // console.log("my cart cost is : ",totalCost);
    // console.log(typeof totalCost);

    // if there is any product already
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else {
        localStorage.setItem("totalCost", product.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart-box");
    let deletecontainer = document.querySelector(".deletecontainer");
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `<div class="productdetail">
          
     <div class="img10">
     <img src="./img/${item.tag}">
 </div>
 <div class="detail10">
     <p class="product-name">${item.name}</p>
   <div class="plus-min2">
       <i class="fa fa-plus"></i>
         <p class="quantity-p">${item.inCart}</p>
         <i class="fa fa-minus"></i>
     </div>
 </div>
 <div class="total10">
   <p>Price</p>
   <p> $ ${item.price}</p>
</div>
<div class="baskettotaltitle">Total Amount: $${item.inCart * item.price}</div>
</div>`
        });
deletecontainer.innerHTML =  `<span class="trash"><i class="fa fa-trash" id="trash" onclick="delete1()"></i></span> 
<p>Clear the Cart</p>`;
let fullText = document.querySelector(".full-text");
fullText.textContent = "You've Got Great Taste";

    }
}



function delete1() {
    localStorage.clear();
    let productContainer = document.querySelector(".cart-box");
    let fullText = document.querySelector(".full-text");
    fullText.textContent = "Your cart is empty";
    productContainer.innerHTML = " ";
    
}


displayCart();
onLoadCartNumbers();

