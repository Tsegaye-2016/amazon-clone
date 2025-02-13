import React from 'react'
import { CategoryFullInfo } from './CategoryFullInfo';
import CategoryCard from './CategoryCard';
import classes from './Category.module.css';
function Category() {
  return (
    <section className={classes.category_container}>
    {CategoryFullInfo.map((infos, index) => {
      console.log(infos); 
      return <CategoryCard key={index} data={infos} />;
    })}
  </section>
   
  )
}

export default Category;
