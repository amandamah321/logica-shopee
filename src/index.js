import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"

const myCart = []
const myWishList = []

console.log("Welcome to Shopee Cart")

const item1 = await createItem("hotwheels ferrari", 20.99, 6)
const item2 = await createItem("hotwheels porche", 39.99, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.deleteItem(myCart, item1.nome);

await cartService.displayCart(myCart)

console.log("Total purchase is:")
await cartService.calculateTotal(myCart);