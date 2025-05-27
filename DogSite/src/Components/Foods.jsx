import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import drydata from './drydata';
import wetfooddata from './wetfooddata'; 
import FoodAdd from '../assets/Food-ad.png';

export default function Foods() {
  const [isDryFood, setIsDryFood] = useState(true);
  const dispatch = useDispatch();

  const foodData = isDryFood ? drydata : wetfooddata;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className='foods-items'>
      <div className='food-btns'>
        <button
          className={isDryFood ? 'active-btn' : ''}
          onClick={() => setIsDryFood(true)}
        >
          🐾 Dry Foods
        </button>
        <button
          className={!isDryFood ? 'active-btn' : ''}
          onClick={() => setIsDryFood(false)}
        >
          🐾 Wet Foods
        </button>
      </div>

      <div className='food-ad'>
        <div className='food-items-grid'>
          {foodData.map((product) => (
            <div className='food-grid-product' key={product.id}>
              <img src={product.img} alt={product.title} />
              <h4>{product.title}</h4>
              <p>${product.newPrice}</p>
              <button className='add-to-cart' onClick={() => handleAddToCart(product)}>
                Add to cart
              </button>
            </div>
          ))}
        </div>

        <div className='ad-grid'>
          <img src={FoodAdd} alt="Food advertisement" />
        </div>
      </div>
    </div>
  );
}
