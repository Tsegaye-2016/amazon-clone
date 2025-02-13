import React from 'react'
import classes from './Header.module.css';
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';

function Header() {
  return (
    <>
    <section>
        <div className={classes.header_container}>
            <div className={classes.logo_container}>
                {/* logo */}
                <a href="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Log" />
                </a>
                {/* delivery */}
                <span></span>
                <div className={classes.delivery}>
                <SlLocationPin />
                    <p>Delivered to</p>
                    <span>Ethiopia</span>
                </div>
            </div>
            <div className={classes.search}>
                {/* search */}
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" placeholder='search product'/>
                <BsSearch size={25}/>
                {/* icon */}
            </div>
            {/* right side link */}
            <div className = {classes.order_container}>
                <a href="" className={classes.language}>
                    <img src="data:image/png;base64,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" alt="" />
                <select name="" id="">
                    <option value="">EN</option>
                </select>
                </a>
            <a href="">
                <div>
                    <p>Sign In</p>
                    <span>Account & Lists</span>
                </div>
            </a>
            <a href="">
                <p>return</p>
                <span>& Orders</span>
            </a>
            <a to={"/cart"} className={classes.cart}>
            <BiCart size={35}/>
            <span>0</span>
            </a>
            </div>
        </div>
        </section>
        <LowerHeader />
        </>
  )
}

export default Header;
