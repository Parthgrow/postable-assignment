import React, { useState } from 'react'
import businessImage from "C:/Users/BluePi/Desktop/Projects/assignment/src/app/assets/solutionImages/downloadAgain.jpg"
import influencerImage from "C:/Users/BluePi/Desktop/Projects/assignment/src/app/assets/solutionImages/newInfluencerImage.jpg"
import individualImage from "C:/Users/BluePi/Desktop/Projects/assignment/src/app/assets/solutionImages/newIndividualImage.jpg"

export const ImageSetter = ({solutionValue = "individual"}) => {

   let imageValue : string = '' ; 

   if(solutionValue === "individual")
   {
    imageValue = individualImage.src ;
   }
   else if (solutionValue === "influencer")
   {
    imageValue = influencerImage.src ; 

   }
   else
   {
    imageValue = businessImage.src ; 
   }
  return (
    <div className='w-full h-full border-2 border-red'>
        <img src={imageValue} alt="" />
    </div>
  )
}
