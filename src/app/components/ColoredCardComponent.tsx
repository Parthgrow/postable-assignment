import React from 'react'

interface coloredCardComponentProps{
    className : string,
    color : string  

}

export const ColoredCardComponent : React.FC<coloredCardComponentProps> = ({className="", color="#80C0EE"}) => {
    console.log("This is color value"); 
    console.log(color); 
  return (
    <div className={`${className} `}>
        <div className={ " rounded-t-[20px] h-[10vh] w-[30vw] opacity-[1]   p-[20px]"} style={{backgroundColor : `${color}`}}>

            <div className='flex gap-2'>

            <div>Img </div>
            <div className='text-white text-3xl font-medium opacity-90'>
                Linkedin Post 
            </div>

            </div>
            
        </div>
        <div className=' h-[50vh] w-[30vw] ' >

            <img src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-1_tcu61i.webp"  className='w-full h-full ' alt=""  />
            
        </div>
    </div>
  )
}
