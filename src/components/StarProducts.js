import React from 'react'
import "../styles/StarProducts.css"

const StarProducts = ({starproducts}) => {
    return (
        <div className="starProduct">
            <div><a href={starproducts[0].url}><img src={starproducts[0].image} alt='1st Product'></img></a></div>
            <div>
                <a href={starproducts[1].url}><img src={starproducts[1].image} alt='2nd Product'></img></a>
                <a href={starproducts[2].url}><img src={starproducts[2].image} alt='3rd Product'></img></a>
                <a href={starproducts[3].url}><img src={starproducts[3].image} alt='4rth Product'></img></a>
            </div>
        </div>
    )
}

export default StarProducts
