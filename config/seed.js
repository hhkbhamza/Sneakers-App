require('dotenv').config();
require('./database');

const Sneaker = require('../models/sneaker');

(async function() {


  await Sneaker.deleteMany({});
  const sneakers = await Sneaker.create([
    {
        index: 0,
        name: "Nike Air Force 01",
        price: 110,
        img: "https://www.kicksonfire.com/wp-content/uploads/2021/08/Nike-Air-Force-1-Low-2-2.jpeg",
      },
      {
        index: 1,
        name: "Nike Air Max 97",
        price: 250,
        img: "https://hypebeast.com/image/2019/10/nike-air-max-97-faded-black-reflective-silver-white-921826-016-release-information-1.jpg",
      },
      {
        index: 2,
        name: "Adidas UltraBoost 20",
        price: 220,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl58rzpPjQtQaR9rfVhK2T4VFcljphC77dw&usqp=CAU",
      },
      {
        index: 3,
        name: "Jordan 1 University Blue",
        price: 170,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgAhJmutydHsi6E_cb1BakIGWy_EaKjdqgOniBQRaP&s",
      },
      {
        index: 4,
        name: "Nike Air Huarache",
        price: 125,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKfxDvkW0NhY9tLEBQ86CgqVMyCRZqiz3Ow&usqp=CAU",
      },
      {
        index: 5,
        name: "Adidas Yeezy 350 V2 Bone",
        price: 220,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRjfiZMbF2o_jhmFhCswpmk-NFR6MBAAl51qzN-sNnUAlzWb724DVjsoYrb3-yULRXgWApkuTASNFPbmR5GcqdImwIRzlU6R6tcvwDAGpNbzYgMerrvJLEt&usqp=CAE",
      },
      {
        index: 6,
        name: "Nike Air Max 90",
        price: 130,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bhwrvokud9flh34cchb8/air-max-90-mens-shoes-6n3vKB.png",
      },
      {
        index: 7,
        name: "Nike Dunk Low Retro",
        price: 110,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-mens-shoes-8t3K7k.png",
      },
      {
        index: 8,
        name: "New Balance 550",
        price: 150,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjk6JiNcmcaaeaNj9YEISITm3to2kAPbNd3w&usqp=CAU",
      }
  ]);

  console.log(sneakers)

  process.exit();

})();