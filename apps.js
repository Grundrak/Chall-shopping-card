let OpenCard = document.querySelector('.card-shop');
let CloseCard = document.querySelector('.closhShopCard');
let body = document.querySelector('body');


OpenCard.addEventListener('click', () => {
    body.classList.add('active');
    console.log('ana khrjt');
});
CloseCard.addEventListener('click', () => {
    body.classList.remove('active');
    console.log('ana dkhlt')
});

const products = [
    {
        id: 0,
        name: "Gran Torismo 7",
        price: 500,
        image: './assets/images/1.jpg'
    },
    {
        id: 1,
        name: "GTA V",
        price: 400,
        image: './assets/images/2.jpg'
    },
    {
        id: 2,
        name: "Reed Dead 2",
        price: 350,
        image: './assets/images/3.jpg'
    },
    {
        id: 3,
        name: "Dead By DayLight",
        price: 1000,
        image: './assets/images/4.jpg'
    },
    {
        id: 4,
        name: "NFS",
        price: 800,
        image: './assets/images/5.jpg'
    },
    {
        id: 5,
        name: "God Of War",
        price: 500 ,
        image: './assets/images/6.jpg'
    },
    {
        id: 6,
        name: "HORIZON",
        price: 400,
        image: './assets/images/7.jpg'
    },
    {
        id: 7,
        name: "Pirate Worrior",
        price: 1000,
        image: './assets/images/8.jpg'
    },
];
const listcard = [];


function ShowItem() {
    const container = document.querySelector('.CoutainerImg'); 
    
    products.forEach((value) => {
      const ShowCard = document.createElement('div');
      ShowCard.classList.add('Card-gl')
      ShowCard.innerHTML = `
      <img src="${value.image}" />
      <div class="title">${value.name}</div>
      <div class="price">${value.price}MAD</div>
      <button onclick="AddToCard(${value.id})">Add to Cart</button>
      `;
      container.appendChild(ShowCard);
      console.log('done');
    });
  }
  ShowItem();

  function AddToCard(key) {
  const quantity = document.querySelector('.quantity');
    if(listcard[key] == null){
        listcard[key] = products[key];
       listcard[key].quantity = 1;
       console.log('tkhchit fcard');
    }
    ReloadCard();
  }

  function ReloadCard () {
    const ListCard = document.querySelector('.listcard');
    ListCard.innerHTML = '';
    let Count = 0;
    let TotalPrice = 0;

    for (const key in listcard) {
        const value = listcard[key];
        TotalPrice += value.price * value.quantity;
        Count += value.quantity;

        if(value != null){
            const AddCard = document.createElement('li');
            AddCard.innerHTML = `          
            <img src="${value.image}" />
            <div>${value.name}</div>
            <div>${value.quantity} Unite</div> 
            <div>${value.price * value.quantity} MAD</div> 
            <div>
            <div> ${value.quantity}</div>
            <button onclick="changeQuantity(${key},${value.quantity -1})">-</button>
            <button onclick="changeQuantity(${key},${value.quantity +1})">+</button>
            <button onclick="removeFromCart(${key})">Delete</button>
            </div>
            `;
            ListCard.appendChild(AddCard);
    
        } 
        
    }
    
    const cartTotal = document.querySelector('.total-price');
    cartTotal.textContent = `Total Price : ${TotalPrice} MAD`;
    

}

  
  function changeQuantity(key, newQuantity) {
    if (listcard[key]) {
        if (newQuantity < 1) {
            console.log('ms7ni wld l3bd')
            removeFromCart(key);
        }
        listcard[key].quantity = newQuantity;
        ReloadCard();
    }
}


function removeFromCart(key) {
    if (listcard[key]) {
        delete listcard[key];
        ReloadCard();
    }
    }