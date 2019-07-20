

let products = [ 
{
    pname: "Mini Portable USB Aircon Fan",
    price: "219",
    pcode: "001",
    description: "Mini Aircon Fan",
    manufacturer: "ABC",
    stocks: "5",
    supplier: "ABC",
    expdate: "n/a",
    url: "https://www.indiamart.com/",
    imgurl: "https://5.imimg.com/data5/YG/QR/MY-3629868/rechargeable-usb-mini-fan-ml-f-168-usb-fan-500x500.jpg", 

},
//product 2
{
    pname: "A13-OLinuXino-MICRO-SD",
    price: "9.95",
    pcode: "002",
    description: "2GB of memory storage",
    manufacturer: "A13",
    stocks: "1",
    supplier: "A13",
    expdate: "n/a",
    url: "https://www.olimex.com/Products/OLinuXino/A13/A13-OLinuXino-MICRO-SD/",
    imgurl: "https://www.olimex.com/Products/OLinuXino/A13/A13-OLinuXino-MICRO-SD/images/thumbs/310x230/SD-Card.jpg",

},
//product 3
{
    pname: "One Take One Motorcycle VS1 Protector",
    price: "219",
    pcode: "001",
    description: "VS1 protector spray <br> contains cleaning conditioners </br> to protect your materials!",
    manufacturer: "ABC",
    stocks: "5",
    supplier: "ABC",
    expdate: "",
    url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjYrM7y-cLjAhWnyYsBHedsD-EQjhx6BAgBEAM&url=https%3A%2F%2Fwww.kisspng.com%2Fpng-car-wheel-motorcycle-liter-iron-beadz-paint-sealan-6511171%2F&psig=AOvVaw38bLOQP-LP7Ot1ddo91U3e&ust=1563693372967333",
    imgurl: "https://banner2.kisspng.com/20180920/rrw/kisspng-car-wheel-motorcycle-liter-iron-beadz-paint-sealant-5ba3735e798ad4.7024990815374385584978.jpg",

},
//product 4
{
    pname: "Mini Car",
    price: "100,000",
    pcode: "003",
    description: "A cute CAR",
    manufacturer: "Volkswagen",
    stocks: "0",
    supplier: "ABC",
    expdate: "",
    url: "https://pixabay.com/photos/fiat-fiat-500-auto-oldtimer-4322521/",
    imgurl: "https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521_960_720.jpg",

},
//product 5
{
    pname: "Mini Portable USB Aircon Fan",
    price: "219",
    pcode: "001",
    description: "Mini Aircon Fan",
    manufacturer: "ABC",
    stocks: "5",
    supplier: "ABC",
    expdate: "",
    url: "https://www.indiamart.com/",
    imgurl: "https://5.imimg.com/data5/YG/QR/MY-3629868/rechargeable-usb-mini-fan-ml-f-168-usb-fan-500x500.jpg",

},
//product 6
{
    pname: "Mini Portable USB Aircon Fan",
    price: "219",
    pcode: "001",
    description: "Mini Aircon Fan",
    manufacturer: "ABC",
    stocks: "5",
    supplier: "ABC",
    expdate: "",
    url: "https://www.indiamart.com/",
    imgurl: "https://5.imimg.com/data5/YG/QR/MY-3629868/rechargeable-usb-mini-fan-ml-f-168-usb-fan-500x500.jpg",

},
//product 7
{
    pname: "Mini Portable USB Aircon Fan",
    price: "219",
    pcode: "001",
    description: "Mini Aircon Fan",
    manufacturer: "ABC",
    stocks: "5",
    supplier: "ABC",
    expdate: "",
    url: "https://www.indiamart.com/",
    imgurl: "https://5.imimg.com/data5/YG/QR/MY-3629868/rechargeable-usb-mini-fan-ml-f-168-usb-fan-500x500.jpg",

},
//product 8
{
    pname: "Mini Portable USB Aircon Fan",
    price: "219",
    pcode: "001",
    description: "Mini Aircon Fan",
    manufacturer: "ABC",
    stocks: "5",
    supplier: "ABC",
    expdate: "",
    url: "https://www.indiamart.com/",
    imgurl: "https://5.imimg.com/data5/YG/QR/MY-3629868/rechargeable-usb-mini-fan-ml-f-168-usb-fan-500x500.jpg",

},
//product 9
{
    pname: "Mini Portable USB Aircon Fan",
    price: "219",
    pcode: "001",
    description: "Mini Aircon Fan",
    manufacturer: "ABC",
    stocks: "5",
    supplier: "ABC",
    expdate: "",
    url: "https://www.indiamart.com/",
    imgurl: "https://5.imimg.com/data5/YG/QR/MY-3629868/rechargeable-usb-mini-fan-ml-f-168-usb-fan-500x500.jpg"

},
//product 10
{
    pname: "Mini Portable USB Aircon Fan",
    price: "219",
    pcode: "001",
    description: "Mini Aircon Fan",
    manufacturer: "ABC",
    stocks: "5",
    supplier: "ABC",
    expdate: "",
    url: "",
    imgurl: "",
}
]

let output = "";
products.forEach(function(item){
    if (item.imgurl == undefined)
    {
        item.imgurl = "https://via.placeholder.com/300"
    }
    
    output += 
    `
    <div class='item'>
    
    <img style="width:300px;height:300px" src = ${item.imgurl}>
    
    <p style="color:red">  <a href = "${item.url}"> ${item.pname} </p> </a>
    <p> PRICE: ${item.price} </p>
    <p> PROD CODE: ${item.pcode} </p>
    <p> DESC: ${item.description} </p>
    <p> STOCKS: ${item.stocks} </p>
   
    <br> </br>

    </div>
    `
})

document.getElementById('container').innerHTML = output