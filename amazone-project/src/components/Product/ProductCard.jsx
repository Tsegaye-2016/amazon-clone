import React, { useContext } from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css';
import {Link} from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';
function ProductCard({product,flex,renderDesc}) {
    const {id,title,image,price,rating,description} = product;
    const [state,dispatch] = useContext(DataContext);
    // console.log('from product card',state);
    const addToCart =()=>{
          dispatch({
            type:Type.ADD_TO_BASKET,
            item:{
              id,title,image,price,rating,description
            }
          })
    }
    // console.log('my product',product);
  return (
    <div className={`${classes.card_container} ${flex?classes.product_flexed:''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {
          renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>
        }
        <div className={classes.rating}>
            <Rating value={rating?.rate} precision={0.1} readOnly/>
            <small>{rating?.count}</small>
            {/* {rating ? (
            <>
              <Rating value={rating.rate} precision={0.1} readOnly />
              <small>{rating.count}</small>
            </>
          ) : (
            <p>No rating available</p>
          )} */}
        </div>
        <div>
            {/* price */}
            <CurrencyFormat amount = {price} />
        </div>
        <Link>
            <button className={classes.button} onClick={addToCart}>
                add to cart
            </button>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
