import React, { useState } from 'react';
import BannerItem from './BannerItem';
import Slider from "react-slick";

export default function Banner({ }) {

    const [sliders, setSliders] = useState([
        { title: "React", content: "This is react contenbt"},
        { title: "Angular", content: "This is Angular contenbt"},
        { title: "Vue", content: "This is Vue contenbt"},
        { title: "React", content: "This is react contenbt"},
        { title: "Angular", content: "This is Angular contenbt"},
        { title: "Vue", content: "This is Vue contenbt"},
    ]);

    const bannerSliderSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    // const Increament = () => {
    //     setSliders(sliders + 1)
    // }

    // const decreamnet = () =>  {
    //     setSliders(sliders - 1)
    // }

  return (
    <div>
        <h1>{sliders.length}</h1>
        {/* <button onClick={decreamnet}>Minus</button> */}
        {/* <button onClick={Increament}>Plus</button> */}

        <Slider {...bannerSliderSettings} >
        {
            sliders.map(item => {
                return (
                    <BannerItem title={item.title} content={item.content}/>
                )
            })
        }
        </Slider>        
    </div>
  )
}
