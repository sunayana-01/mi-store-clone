import React from 'react'

const Offer = (obj) => {
    return (
        <a href={obj.link} ><img src={obj.src} alt={'${index} offer'}  /></a>
    )
}

export default Offer
