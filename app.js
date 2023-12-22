const wrapper = document.querySelector(".sliderWrapper");
 const menuItem = document.querySelectorAll(".menuItem");

 const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let choosenProduct = products[0]

  const currentProductImg = document.querySelector(".productImg");
  const productTitle = document.querySelector(".productTitle");
  const productPrice = document.querySelector(".productPrice");
  const currentProductColor = document.querySelectorAll(".color");
  const currentProductSize = document.querySelectorAll(".size");

 
 menuItem.forEach((item, index) => {
    item.addEventListener('click',  () => {

        //Изменить текущий слайд
        wrapper.style.transform = `translateX(${-100 * index}vw)`
         
        //Изменить выбраный продукт
        choosenProduct = products[index] 
            
        productTitle.textContent = choosenProduct.title;
        productPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

      //Присвоить новые цвета
        currentProductColor.forEach((color, index) => {
          color.style.backgroundColor = choosenProduct.colors[index].code;
        });

    })
 });


 currentProductColor.forEach((color, index) => {
  color.addEventListener('click', () => {
    currentProductImg.src = choosenProduct.colors[index].img
  })
 });

currentProductSize.forEach((size, index) => {
  size.addEventListener('click', () => {
    currentProductSize.forEach((size) =>{
      size.style.backgroundColor = "White";
      size.style.color = "Black"
    })

    size.style.backgroundColor = "Black";
    size.style.color = "White"
  })
})



const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener('click', () => {
  payment.style.display = "flex"
});

close.addEventListener('click', () => {
  payment.style.display = "none"
})