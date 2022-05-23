// show product button functionality
function showproducts(){
    window.location.href="inventory.html"
}





//store the products array in localstorage as "products"
function Puma(t,d,p,i){
this.type=t;
this.desc=d;
this.price=p;
this.image=i;

}


document.getElementById("products").addEventListener("submit",storeData)
function storeData(e){
    e.preventDefault();
    let form=document.getElementById("products");
    let type=document.querySelector("#type").value;
    let desc=document.querySelector("#desc").value;
    let price=document.querySelector("#price").value;
    let image=document.querySelector("#image").value;

    let p = new Puma(type,desc,price,image);
    
    let data = JSON.parse(localStorage.getItem("products"))|| [];
    data.push(p);
    localStorage.setItem("products", JSON.stringify(data));
   console.log(data)
    

}
