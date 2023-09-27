function getCartFromStorage() {
    const items = JSON.parse(sessionStorage.getItem('cart')) || [];
    return items;
  }
  
  function addItemToCart(item) {
    let items = getCartFromStorage();
    let existingItem = items.find((i) => i.name === item);
  
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.push({ name: item, quantity: 1 });
    }
  
    sessionStorage.setItem('cart', JSON.stringify(items));
    displayCart();
  }
  
  function removeItemFromCart(item) {
    let items = getCartFromStorage();
    items = items.filter((i) => i.name !== item);
    sessionStorage.setItem('cart', JSON.stringify(items));
    displayCart();
  }
  
  function clearCart() {
    sessionStorage.removeItem('cart');
    displayCart();
  }
  
  function createStore() {
    let list = document.createElement('ul');
    const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];
  
    list.innerHTML += '<h2>Available products:</h2>';
    for (let item of availableItems) {
      let listItem = document.createElement('li');
      listItem.className = 'item';
      listItem.textContent = item;
      listItem.addEventListener('click', (e) => {
        e.preventDefault();
        addItemToCart(item);
      });
      list.appendChild(listItem);
    }
    document.querySelector('main').appendChild(list);
  }
  
  function displayCart() {
    let cartDiv = document.querySelector('#cart');
    if (cartDiv) {
      cartDiv.remove();
    }
  
    let main = document.querySelector('main');
    let cartItems = getCartFromStorage();
    let cartList = document.createElement('ul');
    cartList.id = 'cart';
  
    if (cartItems.length === 0) {
      let emptyCartItem = document.createElement('li');
      emptyCartItem.textContent = 'Your cart is empty';
      cartList.appendChild(emptyCartItem);
    } else {
      for (let item of cartItems) {
        let cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} x ${item.quantity}`;
  
        let removeButton = document.createElement('span');
        removeButton.textContent = '(remove)';
        removeButton.className = 'remove';
        removeButton.addEventListener('click', () => {
          removeItemFromCart(item.name);
        });
  
        cartItem.appendChild(removeButton);
        cartList.appendChild(cartItem);
      }
  
      let clearCartButton = document.createElement('li');
      clearCartButton.textContent = 'Clear my cart';
      clearCartButton.addEventListener('click', () => {
        clearCart();
      });
      cartList.appendChild(clearCartButton);
    }
  
    main.appendChild(cartList);
  }
  
  document.addEventListener('DOMContentLoaded', function (event) {
    if (typeof sessionStorage !== 'undefined') {
      createStore();
      displayCart();
    } else {
      alert('Sorry, your browser does not support Web storage. Try again with a better one');
    }
  });
  