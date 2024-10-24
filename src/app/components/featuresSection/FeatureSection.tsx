import React from "react";
import { ImageSetter } from '../solutions/ImageSetter';

export const FeatureSection = () => {



 

  const BigBox = (img : string)=>{

    console.log("Image is being consoled")

    console.log(img); 




    return(
      <div className=" min-w-72 md:min-w-96 ">

        <img src={img.img} alt="" />

      </div>
    )
  }
  return <>

  <div className="pl-[10%]">
    <div className="text-4xl font-medium mb-5">
      <h1>Our Features</h1>
    </div>
    <div className="flex overflow-auto gap-5">
      <BigBox img="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019744/feature-1_zepkcz.webp"/>
      <BigBox img="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-2_xfgklf.webp"/>
      <BigBox img="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019744/feature-3_ouj8od.webp"/>
      <BigBox img="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-4_xaqpz1.webp"/>
      <BigBox img="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-5_ftjick.webp"/>
    

    </div>
  </div>
  
  
  </>;
};
