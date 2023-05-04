// import logo from './logo.svg';
// import './App.css';
import {data} from "./components/data/data.js"
import "./components/cs/index.css"
import Header from "./components/header.js";
import { useDispatch } from "react-redux";


import { toast } from 'react-hot-toast';
import "./styles/app.scss";
import ProductList from "./components/ProductList.js";

function App() {


 






  const dispatch = useDispatch()

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });

    toast.success("Added to cart");
  };









  return (
    <div>
    
      
<section>
     

      <div  className="main" id="Home">
        <div  className="main_content">
          <div  className="main_text">
            <h1>NIKE<br /><span>Collection</span></h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>




{/* <img src="images/bg1.png" alt="" /> */}


          <div  className="main_image">
            <img alt=""  src="image/shoes.png" />
          </div>
        </div>
        <div  className="social_icon">
          <i  className="fa-brands fa-facebook-f"></i>
          <i  className="fa-brands fa-twitter"></i>
          <i  className="fa-brands fa-instagram"></i>
          <i  className="fa-brands fa-linkedin-in"></i>
        </div>
        <div  className="button">
          <a href="/">SHOP NOW</a>
          <i  className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </section>

 

    <div  className="products" id="Products">
      <h1>Products</h1>

      <div  className="box">
       

       {/* ------- */}

{
data.map(e=>{

return (

<ProductList  imgSrc={e.src} price={e.price} id={e.id}  addToCartHandler={addToCartHandler}/>



)


})

}



     

       {/* ---- */}


        

       
       

        
      </div>
    </div>

    {/* <!--About--> */}

    <div  className="about" id="About">
      <h1>Web<span>About</span></h1>

      <div  className="about_main">
        <div  className="about_image">
          <div  className="about_small_image">
            <img alt=""  src="image/red_shoes1.png"   />
            <img alt=""  src="image/red_shoes2.png"   />
            <img alt=""  src="image/red_shoes3.png"   />
            <img alt=""  src="image/red_shoes4.png"   />
          </div>

          <div  className="image_contaner">
            <img alt=""  src="image/red_shoes1.png" id="imagebox" />
          </div>
        </div>

        <div  className="about_text">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of  classNameical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in  classNameical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>
      </div>

      <a href="/"  className="about_btn">Shop Now</a>

      
    </div>

    {/* <!--Review--> */}

    <div  className="review" id="Review">
      <h1>Customer's<span>review</span></h1>

      <div  className="review_box">
        <div  className="review_card">
          <div  className="card_top">
            <div  className="profile">
              <div  className="profile_image">
                <img alt=""  src="image/girl_dp1.jpg" />
              </div>

              <div  className="name">
                <strong>Ranidi Lochana</strong>

                <div  className="like">
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star-half-stroke"></i>
                </div>
              </div>
            </div>
          </div>
          <div  className="comment">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              amet nesciunt voluptatem cum architecto ipsum vero nulla
              voluptatibus dolorum modi assumenda eum? Aliquid inventore velit
              ipsa repellat numquam atque dolores!
            </p>
          </div>
        </div>

        <div  className="review_card">
          <div  className="card_top">
            <div  className="profile">
              <div  className="profile_image">
                <img alt=""  src="image/man_dp1.jpg" />
              </div>

              <div  className="name">
                <strong>Sayuru Tharanga</strong>

                <div  className="like">
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star-half-stroke"></i>
                  <i  className="fa-regular fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div  className="comment">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              amet nesciunt voluptatem cum architecto ipsum vero nulla
              voluptatibus dolorum modi assumenda eum? Aliquid inventore velit
              ipsa repellat numquam atque dolores!
            </p>
          </div>
        </div>

        <div  className="review_card">
          <div  className="card_top">
            <div  className="profile">
              <div  className="profile_image">
                <img alt=""  src="image/man_dp2.jpg" />
              </div>

              <div  className="name">
                <strong>Senuda Dilwan</strong>

                <div  className="like">
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star-half-stroke"></i>
                  <i  className="fa-regular fa-star"></i>
                  <i  className="fa-regular fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div  className="comment">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              amet nesciunt voluptatem cum architecto ipsum vero nulla
              voluptatibus dolorum modi assumenda eum? Aliquid inventore velit
              ipsa repellat numquam atque dolores!
            </p>
          </div>
        </div>
      </div>

      <div  className="review_box">
        <div  className="review_card">
          <div  className="card_top">
            <div  className="profile">
              <div  className="profile_image">
                <img alt=""  src="image/gir_dp3.jpg" />
              </div>

              <div  className="name">
                <strong>Kaveesha Vidurangi</strong>

                <div  className="like">
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star-half-stroke"></i>
                  <i  className="fa-regular fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div  className="comment">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              amet nesciunt voluptatem cum architecto ipsum vero nulla
              voluptatibus dolorum modi assumenda eum? Aliquid inventore velit
              ipsa repellat numquam atque dolores!
            </p>
          </div>
        </div>

        <div  className="review_card">
          <div  className="card_top">
            <div  className="profile">
              <div  className="profile_image">
                <img alt=""  src="image/gir_dp2.jpg" />
              </div>

              <div  className="name">
                <strong>John Deo</strong>

                <div  className="like">
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star-half-stroke"></i>
                </div>
              </div>
            </div>
          </div>
          <div  className="comment">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              amet nesciunt voluptatem cum architecto ipsum vero nulla
              voluptatibus dolorum modi assumenda eum? Aliquid inventore velit
              ipsa repellat numquam atque dolores!
            </p>
          </div>
        </div>

        <div  className="review_card">
          <div  className="card_top">
            <div  className="profile">
              <div  className="profile_image">
                <img alt=""  src="image/man_dp3.jpg" />
              </div>

              <div  className="name">
                <strong>Charith Aruna</strong>

                <div  className="like">
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star"></i>
                  <i  className="fa-solid fa-star-half-stroke"></i>
                </div>
              </div>
            </div>
          </div>
          <div  className="comment">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              amet nesciunt voluptatem cum architecto ipsum vero nulla
              voluptatibus dolorum modi assumenda eum? Aliquid inventore velit
              ipsa repellat numquam atque dolores!
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* <!--Services--> */}

    <div  className="services" id="Servises">
      <h1>our<span>services</span></h1>

      <div  className="services_cards">
        <div  className="services_box">
          <i  className="fa-solid fa-truck-fast"></i>
          <h3>Fast Delivery</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>

        <div  className="services_box">
          <i  className="fa-solid fa-rotate-left"></i>
          <h3>10 Days Replacement</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>

        <div  className="services_box">
          <i  className="fa-solid fa-headset"></i>
          <h3>24 x 7 Support</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>

    {/* <!--Login Form--> */}

    <div  className="login_form">
      <div  className="left">
        <img alt=""  src="image/logshoes.png" />
      </div>

      <div  className="right">
        <h1>Welcome Back!</h1>

        <form action="#" method="post">
          <p>User Name</p>
          <div  className="user">
            <i  className="fa-solid fa-user"></i>
            <input
              type="text"
              name="user"
              placeholder="User Name"
               className="username"
            />
          </div>

          <p  className="passworg_tag">Password</p>
          <div  className="password">
            <i  className="fa-solid fa-lock"></i>
            <input type="text" name="password" placeholder="Password" />
          </div>

          <p  className="forget">Forget Password ?</p>

          <button type="submit">Login</button>
          <div  className="loging_icon">
            <a href="/"><img alt=""  src="image/google.png" /></a>
            <a href="/"><img alt=""  src="image/facebook.png" /></a>
            <a href="/"><img alt=""  src="image/twitter.png" /></a>
          </div>
        </form>
      </div>
    </div>

    {/* <!--Footer--> */}

    <footer>
      <div  className="footer_main">
        <div  className="tag">
          <h1>Contact</h1>
          <a href="/"><i  className="fa-solid fa-house"></i>123/Colombo/Sri Lanka</a>
          <a href="/"><i  className="fa-solid fa-phone"></i>+94 12 345 6789</a>
          <a href="/"><i  className="fa-solid fa-envelope"></i>contact@gmail.com</a>
        </div>

        <div  className="tag">
          <h1>Get Help</h1>
          <a href="/"  className="center">FAQ</a>
          <a href="/"  className="center">Shipping</a>
          <a href="/"  className="center">Returns</a>
          <a href="/"  className="center">Payment Options</a>
        </div>

        <div  className="tag">
          <h1>Our Stores</h1>
          <a href="/"  className="center">Sri Lanka</a>
          <a href="/"  className="center">USA</a>
          <a href="/"  className="center">India</a>
          <a href="/"  className="center">Japan</a>
        </div>

        <div  className="tag">
          <h1>Follw Us</h1>
          <div  className="social_link">
            <a href="/"><i  className="fa-brands fa-facebook-f"></i></a>
            <a href="/"><i  className="fa-brands fa-twitter"></i></a>
            <a href="/"><i  className="fa-brands fa-instagram"></i></a>
            <a href="/"><i  className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

        <div  className="tag">
          <h1>Newsletter</h1>
          <div  className="search_bar">
            <input type="text" placeholder="You email id here" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  {/* </body> */}


    </div>
  );
}

export default App;
