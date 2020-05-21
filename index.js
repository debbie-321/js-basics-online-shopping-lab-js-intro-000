var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var price = Math.floor(Math.random() * 101)

  var itemObj = {
    "itemName": item,
    "itemPrice": price
  };
  itemObj[item] = price
  cart.push(itemObj)
  return `${item} has been added to your cart.`
  return cart
}

function viewCart() {
  // write your code here
  for (i = 0; i < cart.length; i++){
    if (cart.length === 0){
      return `Your shopping cart is empty.`
    } else if (cart.length === 1){
      return `In your cart, you have ${cart[0].itemName} at ${cart[0].itemPrice}.`
    }else if (cart.length === 2){
      return `In your cart, you have ${cart[0].itemName} at ${cart[0].itemPrice}, ${cart[1].itemName} at ${cart[1].itemName}`
    }
    }
  }


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
