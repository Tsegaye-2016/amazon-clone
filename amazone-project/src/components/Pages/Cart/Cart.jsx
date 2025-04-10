import React, { useContext } from 'react'
import LayOut from '../../LayOut/LayOut'
import { DataContext } from '../../DataProvider/DataProvider'
import ProductCard from '../../Product/ProductCard';
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import classes from './Cart.module.css'
import { Type } from '../../../Utility/action.type';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Cart() {
  const [{basket,user},dispatch] = useContext(DataContext);
  const total = basket.reduce((amount,item)=>{
    // return item.price + amount;
    return item.price * item.amount + amount
  },0)
  // console.log(basket)
      const increment=(item)=>{
        dispatch({
          type:Type.ADD_TO_BASKET,
          item
        })
      }
      const decrement=(id)=>{
        dispatch({
          type:Type.REMOVE_FROM_BASKET,
          id
        })
      }
  return (
    <LayOut>
      <section className={classes.container}>
      <div className={classes.cart_container}>
        <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {
            basket?.length==0?(<p>Opps ! No Item in your Cart</p>):(
              basket?.map((item,i)=>{
                return <section className={classes.cart_product}>
                  
                    <ProductCard
                    key={i}
                    product={item}
                    renderDesc={true}
                    flex={true}
                    renderAdd={false}
                    />
                    <div className={classes.btn_container}>
                      <button className={classes.btn} onClick={()=>increment(item)}>
                      <IoIosArrowUp size={30}/>
                      </button>
                      <span>{item.amount}</span>
                      <button className={classes.btn} onClick={()=>decrement(item.id)}>
                      <IoIosArrowDown size={30}/>
                      </button>
                    </div>

                </section>
              })
            )
          }
      </div>
      {
        basket?.length !== 0 &&(
          <div className={classes.subtotal}>
            <div>
                <p>Subtotal({basket?.length} items)</p>
                <CurrencyFormat amount={total}/>
            </div>
            <span>
              <input type="checkbox" />
              <small>This orders contain a gift</small>
              <Link to='/payments'>Continue to checkout</Link>
            </span>
          </div>
        )
      }
    </section>
    </LayOut>
  )
}

export default Cart
