import React, { useEffect, useState } from 'react'
import LayOut from '../../LayOut/LayOut'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import classes from './Results.module.css';
import { productUrl } from '../../../Api/EndPoint';
import ProductCard from '../../Product/ProductCard';
import Loader from '../../Loader/Loader';
function Results() {
  const [isLoading, setisLoading] = useState(false);
  const [results,setResults] = useState([]);
    const {categoryName} = useParams();
    // console.log("my category",categoryName);
    useEffect(()=>{
      setisLoading(true);
      axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res)=>{
        setResults(res.data);
        setisLoading(false);
        // console.log("my data",res);
        // console.log(res)
      }).catch((err)=>{
          console.log(err);
          setisLoading(false);
      })
    },[])
  return (
    <LayOut>
      {
        isLoading?(<Loader/>):(
          <section>
        <h1 style={{padding:"30px"}}>Results</h1>
        <p style={{padding:"30px"}}>Category / {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
              {results?.map((product)=>{
               return <ProductCard
                  key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
                />
              })}
        </div>
      </section>
        )
      }
    </LayOut>
  )
}

export default Results
