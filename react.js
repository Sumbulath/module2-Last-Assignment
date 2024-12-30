const product_container=document.getElementById("product-container")
async function fetchProduct(){
    try{
     const response=await fetch('https://fakestoreapi.com/products')  //Calling API
    console.log(response,"response");
    //when we run this code it will shows that the response pending bcz its a synchronus operation ,it will not wait for the completion of the code so make the code aynchonius by adding await keyword.before adding the awit keyword make the function asynchronus using async keyword
        if (!response.ok) {
            throw new Error("Failed to fetch product");
            
            
        }
        const products=await response.json()
        document.getElementById("Loading").style.display='none'
        // console.log(products);
        displayProduct(products)
        
}
    catch{
     console.log(error);
     
    }
   
}fetchProduct()


function displayProduct(products){
    products.forEach((pro) => {
        let pro_card=`<div class="col-md-4 col-lg-3 d-flex">
        <div class="card" >
          <img src="${pro.image}" class="card-img-top">
          <div class="card-body">
            <h5 class="Card title">${pro.title}</h5>
            <p class="card-text">${pro.description.slice(0,100)}...</p>
            
             <div class="d-flex justify-content-between align-items-center">
                <span class="fw-bold">$${pro.price}</span>
                <a href="productDetails.html?id=${pro.id}" class="btn btn-primary btn-sm">View Details</a>
             </div>

         </div>
        </div>
      </div>`
     product_container.innerHTML += pro_card  
    });
        
}