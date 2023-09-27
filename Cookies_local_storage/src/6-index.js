function addItemToCart(item) {
    sessionStorage.setItem(item, "true");
  }
  
  function createStore() {
    const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];
    const ul = document.createElement('ul');
  
    availableItems.forEach(itemName => {
      const li = document.createElement('li');
      li.className = 'item';
      li.textContent = itemName;
      li.addEventListener('click', () => addItemToCart(itemName));
      ul.appendChild(li);
    });
  
    document.querySelector('main').appendChild(ul);
  }
  
  function countItems() {
    const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];
    let count = 0;
  
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
  
      if (availableItems.includes(key) && sessionStorage.getItem(key) === "true") {
        count++;
      }
    }
  
    return count;
  }
  
  function displayCart() {
    const times = countItems();
    const msg = document.createElement('p');
    msg.innerHTML = `You previously had ${times} items in your cart`;
  
    document.body.appendChild(msg);
  }
  
  document.addEventListener("DOMContentLoaded", function (event) {
    if (typeof sessionStorage !== 'undefined') {
      createStore();
      displayCart();
    } else {
      alert('Sorry, your browser does not support Web storage. Try again with a better one');
    }
  });
  