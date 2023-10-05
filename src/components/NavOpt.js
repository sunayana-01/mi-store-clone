import React,{useState, useEffect} from 'react'
import NavCard from './NavCard.js'
import '../styles/NavOpt.css'

const NavOpt = ({miPhones, redmiPhones, tv, laptop, fitnessAndLifestyle, accessories, audio, home}) => {
    
    const [miPhonesToggle, setmiPhonesToggle] = useState(false);
    const [redmiPhonesToggle, setredmiPhonesToggle] = useState(false);
    const [tvToggle, settvToggle] = useState(false);
    const [fitnessAndLifestyleToggle, setfitnessAndLifestyleToggle] = useState(false);
    const [laptopToggle, setlaptopToggle] = useState(false);
    const [homeToggle, sethomeToggle] = useState(false);
    const [audioToggle, setaudioToggle] = useState(false);
    const [accessoriesToggle, setaccessoriesToggle] = useState(false);

    useEffect(() => {
        if(window.location.pathname === '/miphones'){
            return setmiPhonesToggle(true)  
        }
        if(window.location.pathname === '/redmiphones'){
            return setredmiPhonesToggle(true)  
        }
        if(window.location.pathname === '/tv'){
            return settvToggle(true)  
        }
        if(window.location.pathname === '/laptops'){
            return setlaptopToggle(true)  
        }
        if(window.location.pathname === '/lifestyle'){
            return setfitnessAndLifestyleToggle(true)  
        }
        if(window.location.pathname === '/home'){
            return sethomeToggle(true)  
        }
        if(window.location.pathname === '/audio'){
            return setaudioToggle(true)  
        }
        if(window.location.pathname === '/accessories'){
            return setaccessoriesToggle(true)  
        }
    }, [])
    
    return (
        <div className='navOptions'>
            {
                miPhonesToggle? 
                    miPhones.map((item, index)=>(
                        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
                    )) : null
            }
            {
                redmiPhonesToggle? 
                    redmiPhones.map((item, index)=>(
                        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
                    )) : null
            }
            {
                tvToggle? 
                    tv.map((item, index)=>(
                        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
                    )) : null
            }
            {
                laptopToggle? 
                    laptop.map((item, index)=>(
                        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
                    )) : null
            }
            {
                fitnessAndLifestyleToggle? 
                fitnessAndLifestyle.map((item, index)=>(
                        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
                    )) : null
            }
            {
                homeToggle? 
                home.map((item, index)=>(
                        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
                    )) : null
            }
            {
                audioToggle? 
                audio.map((item, index)=>(
                        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
                    )) : null
            }
            {
                accessoriesToggle? 
                accessories.map((item, index)=>(
                        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
                    )) : null
            }
        </div>
    )
}

export default NavOpt
