import React from 'react'
import HotItemCard from './HotItemCard.js'
import '../styles/HotAccessories.css'

const HotAccessories = ({music, musicCover, smartDevices, smartDevicesCover, home, homeCover, lifestyle, lifestyleCover, mobileAccessories, mobileAccessoriesCover}) => {
    return (
        <div className="HotAccessories">
            <div>
                <img src={musicCover || smartDevicesCover || homeCover || lifestyleCover || mobileAccessoriesCover} alt='Cover' />
            </div>

            <div>
                {music && music.map((item, index)=>(
                    <HotItemCard key={index} name={item.name} price={item.price} image={item.image} item={index} />
                ))}
                {smartDevices && smartDevices.map((item, index)=>(
                    <HotItemCard key={index} name={item.name} price={item.price} image={item.image} item={index} />
                ))}
                {home && home.map((item, index)=>(
                    <HotItemCard key={index} name={item.name} price={item.price} image={item.image} item={index} />
                ))}
                {lifestyle && lifestyle.map((item, index)=>(
                    <HotItemCard key={index} name={item.name} price={item.price} image={item.image} item={index} />
                ))}
                {mobileAccessories && mobileAccessories.map((item, index)=>(
                    <HotItemCard key={index} name={item.name} price={item.price} image={item.image} item={index} />
                ))}

                <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
            </div>
        </div>
    )
}

export default HotAccessories