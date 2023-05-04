import React from 'react'
import { Link} from "react-router-dom";
import {FiShoppingBag} from "react-icons/fi";
import { useSelector } from 'react-redux';
import logo from '../assets/log.png'
import "./cs/index.css"


const Header = () => {
  const {cartItems}= useSelector(state=>state.cart)
  return (
    <nav style={{background:"white" ,boxShadow:"black 0px 0px 17px 1px",position: "sticky",
    zIndex: 10,top:"0px"}}>
      <div class="logo"   style={{ fontSize: "35px",
    color: "#c72092",
    margin: "5px 0",
    cursor: "pointer",
    position: "relative",
    left:"-4px"}}>
          <h1> Shoe<span style={{ color:" #6c14d0",textDecoration:" underline"}} >s</span></h1>
        </div>

        <div>
            <Link to="/">HOME</Link>
            <Link to={"/cart"}>
                <FiShoppingBag/>
                <p>{cartItems.length}</p>
            </Link>

        </div>
    </nav>
  )
}

export default Header