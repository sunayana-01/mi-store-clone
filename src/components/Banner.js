import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const Banner = ({end}) => {
    return (
            <Carousel fade>
                {
                    end.map((item, index)=>(
                        <Carousel.Item key={index} id="banner" interval={1000} keyboard={true}>
                            <img className='banner end' id='banner image' src={item.image} alt={`${index} banner`} height='550px' width='auto'/>
                            <Carousel.Caption>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>{item.source}</p>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
    )
}

export default Banner
