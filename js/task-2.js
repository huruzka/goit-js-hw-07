const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const listEl1 = document.createElement("li");
listEl1.classList.add("list_of_img");

const imgEl1 = document.createElement("img");
imgEl1.src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260";
imgEl1.alt = "White and Black Long Fur Cat";

listEl1.append(imgEl1);


const listEl2 = document.createElement("li");
listEl2.classList.add("list_of_img");

const imgEl2 = document.createElement("img");
imgEl2.src = "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260";
imgEl2.alt = "Orange and White Koi Fish Near Yellow Koi Fish";

listEl2.append(imgEl2);



const listEl3 = document.createElement("li");
listEl3.classList.add("list_of_img");

const imgEl3 = document.createElement("img");
imgEl3.src = "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260";
imgEl3.alt = "Group of Horses Running";

listEl3.append(imgEl3);



const listEl4 = document.createElement("li");
listEl4.classList.add("list_of_img");

const imgEl4 = document.createElement("img");
imgEl4.src = "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg";
imgEl4.alt = "Alpine Spring Meadows";

listEl4.append(imgEl4);


const listEl5 = document.createElement("li");
listEl5.classList.add("list_of_img");

const imgEl5 = document.createElement("img");
imgEl5.src = "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg";
imgEl5.alt = "Nature Landscape";

listEl5.append(imgEl5);


const listEl6 = document.createElement("li");
listEl5.classList.add("list_of_img");

const imgEl6 = document.createElement("img");
imgEl6.src = "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg";
imgEl6.alt = "Lighthouse Coast Sea";

listEl6.append(imgEl6);

const navListEl = document.querySelector(".gallery")
navListEl.append(listEl1, listEl2, listEl3, listEl4, listEl5, listEl6);

console.log(navListEl);