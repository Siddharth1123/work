import React from 'react'

const ProductList = ({price,imgSrc,addToCartHandler,id}) => {
    const name="Nike"

    //  price=parseFloat(price.split("$")[1]);
    // console.log(price)

  return (
   
  <div  className="card">
  <div  className="small_card">
  <i  className="fa-solid fa-heart"></i>
    <i  className="fa-solid fa-share"></i>
  </div>

  <div  className="image">
    <img alt=""  src={imgSrc}/>
  </div>

  <div  className="products_text">
    <h2>NIKE</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <h3>${price}</h3>
    <div  className="products_star">
      <i  className="fa-solid fa-star"></i>
      <i  className="fa-solid fa-star"></i>
      <i  className="fa-solid fa-star"></i>
      <i  className="fa-regular fa-star"></i>
      <i  className="fa-regular fa-star"></i>
    </div>
    <button className="btn"  onClick={()=>addToCartHandler({ name, price, id, quantity: 1, imgSrc })}>Add To Cart</button>
  </div>
</div>

  )
}

export default ProductList
