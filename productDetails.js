const urlparams=new  URLSearchParams(window.location.search)
const productId=urlparams.get('id')
// console.log("id=",productId);
const prouctContainer=document.getElementById('Product-details')

async function productDetails(){
    try {
       const response=await fetch(`https://fakestoreapi.com/products/${productId}`)
       if(!response.ok){
        throw new Error("Something Went wrong");        
       }
       const Details=await response.json()
       document.getElementById("loading").style.display="none"
       displayDetails(Details)
       console.log("details=",Details);
       

    } catch (error) {
        console.log(error);
        
    }
}
    function displayDetails(Details){
        const temp=`  <div class="product-image-conatiner col-md-6">
              <img src=${Details.image} max-width=100% height=400px>
            </div>
              <div class="col-md-6">
                <h2>${Details.title}</h2>
                <p>${Details.category}</p>
                <p>${Details.description}</p>
                <h3 class="text-primary">${Details.price}</h3>
                <button class="btn btn-success">Buy Now</button>
              </div>`
              prouctContainer.innerHTML=temp
    }
productDetails();