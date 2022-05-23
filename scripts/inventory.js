document.querySelector("#add_more_product").addEventListener("click",addMOreProduct)
function addMOreProduct(){
    window.location.href="index.html"
}


let productsData= JSON.parse(localStorage.getItem("products"));
console.log(productsData);


productsData.map(function (elem){
let box = document.createElement("div");

let img=document.createElement("img");
img.src=elem.image;


let typ=document.createElement("p")
typ.innerText=elem.type;
 
let des=document.createElement("p")
des.innerText=elem.desc;

let pric=document.createElement("p")
pric.innerText=elem.price;

let btn=document.createElement("button")
btn.innerText="Remove"
btn.addEventListener("click" ,function(){
    removeItem(elem,index)
})

box.append(img,typ,des,pric,btn)
document.querySelector("#all_products").append(box)

})

function  removeItem(elem,index){

    productsData.splice(index,1)
    localStorage.setItem("pumadata", JSON.stringify(productsData))
    window.location.reload()


}