import React from 'react'
import ProductReviewsCard from './ProductReviewsCard.js'
import '../styles/ProductReviews.css'

const ProductReviews = ({productReviews}) => {
    return (
        <div className='ProductReviews'>
            {productReviews.map((item, index)=>(
                <ProductReviewsCard key={index} name={item.name} price={item.price} image={item.image} item={index} review={item.review}/>
            ))}
        </div>
    )
}

export default ProductReviews
