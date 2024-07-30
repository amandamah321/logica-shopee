
//Criar item com subtotal
async function createItem(nome, price, quantity) {
  return {
    nome,
    price,
    quantity,
    subtotal: () => price * quantity,
  };
}

export default createItem;
