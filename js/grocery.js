// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];


// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var cleancart = []


var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;


// Exercise 1
//col·locar a la list

function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    

    for (let i = 0 ; i < products.length; i++) {
        
        if (id === products[i].id) {
           cartList.push(products[i]);
           console.table(cartList)
        }
    }
}


// Exercise 2
//si carro ple netejar
function cleanCart() {
    while (cartList.length > 0) {
        cartList.pop();
    }
     
}



// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    subtotal.grocery.value = 0;
    subtotal.beauty.value = 0;
    subtotal.clothes.value = 0;
    for (let i= 0; i < cartList.length; i++) {

        if (cartList[i].type === "grocery") {
            subtotal.grocery.value = subtotal.grocery.value + cartList[i].price;
        } else if (cartList[i].type === "beauty") {
            subtotal.beauty.value = subtotal.beauty.value + cartList[i].price;
        } else if (cartList[i].type === "clothes") {
            subtotal.clothes.value = subtotal.clothes.value + cartList[i].price;
        } else {
            console.log("No hi ha articles");
        }
    }
    console.log("Subtotal de grocery:" + subtotal.grocery.value);
    console.log("Subtotal de beauty:" + subtotal.beauty.value);
    console.log("Subtotal de clothes:" + subtotal.clothes.value);
}




// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array

    total = 0; 
    
    for (let key in subtotal) {
        total += subtotal[key].value; 
    }  
    return total; 

}

// Exercise 5
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    
    for (let i in cartList){
        
        if(cart.includes(cartList[i]) ){
            for(let item in cart){
                if(cart[item]==cartList[i]){
                    cart[item].quantity+=1;
                    cart[item].subtotal+=cart[item].price;
                    cart[item].subtotalWithDiscount+=cart[item].price;
                    console.log("Modifiquem producte  " + cart[item].name + "  quantitat " +cart[item].quantity   )
                }
            }            
        }
        else{
            element=[cartList[i]];
            cart.push(element);
            cart[i].quantity=1;
            cart[i].subtotal=cartList[i].price;
            cart[i].subtotalWithDiscount=cartList[i].price;
            console.log("afegim producte " + cartList[i].name)
        }
    }


}



// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

}



// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
