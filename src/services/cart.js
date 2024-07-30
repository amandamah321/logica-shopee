//adicionar items ✔️

async function addItem(userCart, item) {
  userCart.push(item);
}

//deletar items

async function deleteItem(userCart, item) {
  const index = userCart.findIndex((item) => item === item.nome);

  if (index !== 1) {
    userCart.splice(index, 1);
  }
}

//Remove item

async function removeItem(userCart, item) {
  const indexFound = userCart = userCart.findIndex((p) => p.name == item.name)

  if (indexFound == -1){
    console.log("item não encontrado")
    return;
  }

  if (userCart[indexFound].quantity > 1){
    userCart[indexFound].quantity -= 1
  }

  if (userCart[indexFound].quantity == 1){
    userCart.splice(indexFound, 1)
  }
}

//calcular total ✔️

async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(result);
}

async function displayCart(userCart) {
  console.log("Shopee cart list");

  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}.${item.nome} - R$ ${item.price} x ${
        item.quantity
      } | Subtotal R$ ${item.subtotal()}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
