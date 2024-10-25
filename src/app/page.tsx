"use client"
import { useState } from "react";
import { IndividualText, BusinessText, InfluencerText } from './helper/text';
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { DiVim } from "react-icons/di";
import shareGradient from "./assets/shareGradient.jpeg"
import { ShareComponent } from "./components/ShareComponent";
import WorksComponent from "./components/WorksComponent";
import worksImageFirst from "./assets/worksImageFirst.jpeg"
import worksImageSecond from "./assets/worksImageSecond.jpeg" ; 
import worksImageThird from "./assets/worksImageThird.jpeg"
import { ColoredCardComponent } from "./components/ColoredCardComponent";
import { AiOutlineCheck } from "react-icons/ai";
import { GoArrowRight } from "react-icons/go";
import { IndividualList } from "./helper/text";
import { BusinessList } from "./helper/text";
import { InfluencerList } from "./helper/text";
import { ImageSetter } from './components/solutions/ImageSetter';
import shareImageNew from "./assets/shareImageNew.jpeg"
import { FeatureSection } from "./components/featuresSection/FeatureSection";
import { EngagingSection } from "./components/engagingSection/EngagingSection";






export default function Home() {

  const [solutionValue, setSolutionValue] = useState("individual"); 
  const [postValue, setPostValue] = useState(""); 
  const handleSolution = (value : string)=>{

    setSolutionValue(value) ; 

  }

  interface FShareBtn  {
    img : string ,
    name : string, 


  }

  const FShareBtn = ({img="Image", name = "Instagram"})=>{


    return(

      <div className="">
    
    <div className="flex gap-2  w-[20vh] rounded-xl p-2 text-[0.8rem] justify-center bg-black/30">
      
        <div>
         {img}
        </div>
        <div className="flex flex-col gap-0">
          <div className="text-gray-400">
            Follow us on 
          </div>
          <div className="text-white">
            {name}
          </div>
        </div>
    </div>
    </div>
    )
  }

  interface smallShareBtnProps {
    img : string, 
    name : string, 

  }

  const SmallShareBtn : React.FC<smallShareBtnProps> = ({img, name})=>{

    return(
      <div className="flex hover:text-[17px] hover:text-white cursor-pointer text-white">

        <img src={img} alt="" />
        <p className="">{name}</p>

      </div>
    )
  }


  interface FAQComponentProps {
    heading : string, 
    text : string
  }

  const FAQComponent : React.FC<FAQComponentProps> = ({heading, text} )=>{

    const [isOpen, setIsOpen] = useState(false) ; 

    const handleDown = ()=>{
      setIsOpen(!isOpen)
      
    }

    console.log(shareGradient.src); 


    return(
      <div className="flex flex-col justify-start gap-1 ">

        <div className="flex flex-1 py-4 w-[40vw] hover:underline justify-between gap-2 ">

          <div className="text-xl text-neutral-950 font-bold "> {heading} </div>
          <div className="text-black font-bold mt-1 font-bold text-2xl justify-end hover:cursor-pointer " onClick={handleDown}>
            
            {isOpen ? <MdExpandLess/> :  <MdExpandMore/>}
          </div>

        </div>

        {isOpen && (<div className="text-[1rem] text-neutral-400"> {text}</div>)}

        
       

        <hr className="font-bold" />


      </div>

      
    )
  }



  
  
  return (
    <>
      <div>

          <header className="min-h-screen border-2 border-green-400">

            <div className="border-2 border-black pt-40 text-[30px]  flex flex-col  items-center ">
              <div className="text-5xl font-bold border-2 border-red-600 text-center  md:text-[5rem] flex flex-col">
                <p>Convert Tweets </p>
                <p>into Engaging Social </p>
                <p>Media Posts, Instantly</p>
              </div>
              <div className="text-md md:text-2xl font-medium my-[2rem]">
                <p>Paste your tweet link below to get started for free</p>
              </div>
              <div className=" bg-white border-[1.5px]  border-neutral-300 pl-5 pr-3 py-1 pb-4 focus-within:border-neutral-200 rounded-2xl shadow-inner container mx-auto w-full justify-between lg:max-w-3xl  flex " style={{boxShadow : "5px 5px 15px gray"}}>
                <div className=" ">
                  <input type="text" placeholder="Paste tweet link here " className="border-none text-base text-neutral-500 outline-none" />
                </div>
                <div className=" w-[12%] my-1 rounded-md bg-neutral-200 text-neutral-950 text-sm pl-6 font-semibold mt-2 py-2">

                  Paste 

                </div>
              </div>

            </div>

          </header>

          {/* section => try sample tweet  */}

          {/* <section className="">

            <div className="flex flex-col items-center">

           
            <div>
              <p>Try Sample tweet</p>
            </div>

            <div className="flex flex-col">
              <div className="flex">
                <div>
                  Postable
                </div>
                <div>
                  twitter
                </div>

              </div>
              <div>
                Lorem ipsum dolor sit amet.
              </div>
            </div>




            <div>


            </div>
            </div>
          </section> */}

        


          {/* section => Share your voice  */}
          <section className="" >
            <div className="flex justify-center ">
              <div className="border-[1.5px] border-neutral-400 w-[60%]  h-[80vh] flex flex-col items-center text-center rounded-[60px] py-40 px-[8%]" style={{backgroundImage : `url(${shareImageNew.src})`, backgroundRepeat : "no-repeat", backgroundSize : "cover"}} >

                <div className="text-4xl font-heavy  text-white text-[4rem] font-bold leading-none">
                  Share your voice beyond just a tweet 

                </div>
                
                <div className=" text-white my-4 text-center mx-16 ">

                Keep your online presence steady and growing by creating customizable images from your tweets, perfect for Instagram, Facebook, and more.

                </div>
                <div className="flex gap-4">

                  <div> <SmallShareBtn img={"img"} name="Instagram Story"/></div>
                  <div>
                    <SmallShareBtn img="img" name="Linkedin Post" />
                  </div>
                  <div> <SmallShareBtn img="img" name="Facebook Post" /></div>
                  <div> <SmallShareBtn img="img" name="Instagram Post"/>             </div>
                  <div className="text-white">+more</div>

                </div>

                {/* <div className="">
                  <ShareComponent postValue={"fbpost"}/>
                </div> */}

              </div>
            </div>
          </section>

          {/* section => how it works ?  */}

          <section className="mt-[15vh]">
            <div className="flex flex-col px-40 min-h-screen">
              <div className="my-[5vh]">
                <h1 className="text-5xl font-medium">How it works ?</h1>
              </div>
              <div className="flex gap-[2%] ">

                

                

                <WorksComponent image={worksImageFirst.src} number="1" subheading="Copy Tweet's Link" para="On X/Twitter, click the share icon at the bottom-right of the tweet and select 'Copy Link.' Then, paste the link into the box above."/>

                <WorksComponent image={worksImageSecond.src} number="2" subheading="Customize Design" para="Choose social media sizes, adjust the style, set the border radius, and customise the design to your liking and preferred branding—all with a single click." />

                <WorksComponent image={worksImageThird.src} number="3" subheading="Export" para="Simply export and publish your meticulously crafted posts, tailored to meet each social media’s standards and format."/>

               

                
                

              </div>
            </div>
          </section>



          {/* optimized for all social media  */}

          <section className="pl-[10%]">

            <div className="flex flex-col gap-2 justify-start gap-5">

              
                <div className="text-[3rem] font-semibold w-[30%] leading-none">Optimized for all social media </div>
                
               

                
            

                <div className="flex gap-[10%]">
                  <div className="w-[40%]"> We've meticulously designed each template to meet the specific guidelines and format requirements of all social media platforms. By preserving safe zones and adhering to platform standards, we ensure that your posts will always be visually striking, no matter where you share them.</div>

                  <div className="flex flex-col gap-2">
                  <div className="flex gap-2  "> <AiOutlineCheck className="text-black mt-1 text-purple-500"/> <p>Readable</p></div>
                  <div className="flex gap-2"><AiOutlineCheck className="text-black mt-1 text-purple-500"/> <p>Visible</p></div>
                  <div className="flex gap-2"><AiOutlineCheck className="text-black mt-1 text-purple-500"/> <p>Accessible</p></div>

                  </div>

                </div>
              
            </div>

          </section>


          {/* colored cards  */}
          <section className="border-2 border-black  ">
            <div className=" flex overflow-hidden pl-[10%] ">

              <ColoredCardComponent className=" rotate-[3deg] translate-y-[120px] " />
              <ColoredCardComponent className=" translate-x-[-30%] rotate-[3deg] translate-y-[90px]" color="#F6A886" />
              <ColoredCardComponent className=" translate-x-[-60%] translate-y-[60px] rotate-[3deg]" color="#77BE7E" />
              <ColoredCardComponent className="translate-x-[-90%] rotate-[3deg] translate-y-[30px]" color="#E7C694"/>
        
            </div>
            <div className="border-2 bg-neutral-100 opacity-90 border-black w-full h-[15vh] relative bottom-16 blur-xl">

              </div>

          </section>

          {/* get started for free */}
          <section className="border-2 border-black pl-[10%] h-[60vh] py-28">
            <div className="text-4xl  text-neutral-400 font-semibold text-balance  border-2 border-black">
            We help you create postable content that not only <span className="text-neutral-800">looks great</span>  but also <span className="text-neutral-800 ">engages your audience</span> 
            </div>
            <div>
              <button className="bg-neutral-800 py-4 px-6 rounded-xl text-white my-10 font-bold text-sm flex gap-2">GET STARTED FOR FREE <GoArrowRight className="my-auto font-bold text-lg"/></button>
            </div>
          </section>

          {/* our features  */}
          <FeatureSection/>


          {/* One solution for all  */}

          <section className=" flex  border-2 border-red-500 px-[10%] gap-5 ">

            <div className="flex flex-col w-[65%]  border-2 border-black">

              <div>
                <h1 className={"text-[3rem] font-semibold "}>One Solution for All!</h1>
              </div>
              <div>
                <p className="text-[1.3rem] font-semibold ">Postable helps everyone to share their thoughts across multiple platforms</p>
              </div>
              <div className="my-5">
                <div className="flex gap-2 bg-neutral-200 hover:cursor-pointer w-[60%] h-[8vh] justify-evenly rounded-xl py-[1%] ]">

                  

                  <div className={`${solutionValue == 
                    "individual" ? "bg-neutral-50 py-2 px-6 rounded-[12px]" : 'py-2'}`} onClick={()=>{handleSolution("individual")}}>

                    Individual 

                  </div>
                 <div className={`${solutionValue == 
                    "influencer" ? "bg-neutral-50 py-2 px-6 rounded-[12px]" : "py-2"}`} onClick={()=>{handleSolution("influencer")}}>
                  Influencers 
                 </div>
                 <div className={`${solutionValue == 
                    "business" ? "bg-neutral-50 py-2 px-6 rounded-[12px]" : "py-2"}`} onClick={()=>{handleSolution("business")}}>
                  Businesses
                 </div>

                </div>
              </div>
              <div className="text-neutral-700 font-semibold my-10 pr-[10%]">
                {solutionValue === "individual" ? <IndividualText/> : solutionValue === "business" ? <BusinessText/> : <InfluencerText/>}
              </div>

              

              <div>
               {
                solutionValue === 'individual' ? <IndividualList/> : solutionValue === "business" ? <BusinessList/> : <InfluencerList/>
               }
              </div>

            </div>
            <div className="border-2 border-black w-[40%] " >

              <ImageSetter solutionValue = {solutionValue}/>
             
            </div>

           

          </section>

          <EngagingSection/>

          {/* FAQ section  */}
          <section className="flex flex-col px-4 py-12 ">
            <div>

              <div className="text-[40px]">
                FAQ
              </div>

              <div className="text-2xl text-neutral-950 font-medium">
                Let's help you with some of the frequently asked questions 
              </div>

            </div>

            <div className="flex justify-between  ">

            

              <div className="flex flex-col  ">
                <div className="text-lg font-medium text-neutral-500">
                  Couldn't find your answer ? 
                </div>
                <div className="text-md font-medium text-purple-400">
                  Ask your question 
                </div>
              





              </div>
              <div className="w-[40vw]">

                <FAQComponent heading="Is postable free to use ?" text="Yes, it’s completely free and unlimited! You can convert as many tweets into social media images as you’d like without any restrictions."/>
                <FAQComponent heading="What social media platforms does this tool support?" text="Postable currently supports Twitter, Facebook, Instagram, LinkedIn, and TikTok. We’re constantly working on adding more platforms to our list."/>
                <FAQComponent heading="Can I customize the created images?" text="Yes, you can customize the created images by adding your own text, images, and more. You can also choose from a variety of templates to make your images stand out."/>
                <FAQComponent heading="Do I need design skills to use this platform?" text="No, you don’t need any design skills to use this platform."/>
                <FAQComponent heading="Do I need to know the format or size of each social media?" text="No, you don’t need to know the format or size of each social media."/>

              </div>

            </div>

             

            
          </section>



          {/* One-Click to create  */}

          <section className="bg-neutral-950 rounded-[70px] min-h-screen flex flex-col text-center">

            <div>

            

            <div className="text-white text-[60px] font-bold ">
              One click to create 
            </div>

            <div className="text-neutral-400 text-balance  mx-[20vw]   ">
            Postable is built with simplicity and fun at its core. No design skills? No problem. We handle the heavy lifting so you can effortlessly create stunning posts.
            </div>

            <div className="flex justify-center">
              <button className="bg-neutral-800 hover:bg-neutral-600 flex justify-center items-center gap-2  text-white transition-colors py-4 my-[7vh] font-bold px-6 rounded-md"> <p>GET STARTED FOR FREE</p> <GoArrowRight/>  </button>
            </div>

            </div>

            <div className="w-full ">

            <img className="rounded-b-[70px]" src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727020129/app-screenshot_uficxp.webp" alt="" />

            </div>

          </section>


          <footer className=" px-[10%]  flex flex-col gap-3 bg-cover bg-center py-[6rem]" style={{backgroundImage : `url("https://res.cloudinary.com/dzv61qpeu/image/upload/v1726153159/footer-background_nfg8rf.webp")`}}>
            <div>
              <h2 className="italic text-2xl font-bold text-white ">Postable</h2>
            </div>
            <div className="flex gap-[5vw]">
              <div className="flex flex-col w-[60vh]">
                
                
                <div className="text-xl font-bold text-white/60">
                  We help you to create postable content!

                </div>

                <div className=" text-md font-normal text-white/60">
                Postable is a free, unlimited tool designed to empower individuals, influencers, and businesses to amplify their voice and effortlessly create engaging content that go beyond the ordinary.
                </div>
                
                
                
                 </div>
              <div className="flex flex-col">

                <div className="text-white font-semibold mb-7">
                  Products 
                </div>

                <div className="text-sm font-semibold text-white/70">
                  <ul className="flex flex-col gap-3" >
                    <li>Tweet Converter </li>
                    <li>Post Scheduler <button className="bg-black/10 opacity-50 px-2 py-1 rounded-3xl text-sm text-white">Coming Soon </button></li>
                    <li>Screenshot Designer <button className="bg-black/10 opacity-50 px-2 py-1 rounded-3xl text-sm text-white">Coming Soon </button></li>
                  </ul>
                </div>
              </div>

              
              <div className="flex flex-col">

                <div className="text-white font-semibold mb-7">Company</div>

                <div className="text-sm font-semibold text-white/70">
                  <ul className="flex flex-col gap-3">
                    <li>Privacy Policy </li>
                    <li>Terms and Conditions</li>
                    <li>Refund Policy</li>
                  </ul>
                </div>




              </div>
            </div>
           <div>

            <div className="border-[0.01rem] border-opacity-20 border-black">

            </div>

           </div>
           <div className="flex gap-2">
            <div className="">

            <FShareBtn name="Twitter"/>

            </div>
            
            <div>
              <FShareBtn name="Instagram"/>
            </div>
            <div>
              <FShareBtn name="Discord"/>
            </div>
            <div>
              <FShareBtn name="Buy Coffee"/>
            </div>
            
           </div>
          </footer>






      </div>
    
    
    </>
  );

}