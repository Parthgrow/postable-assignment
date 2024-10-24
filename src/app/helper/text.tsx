import React from "react"
import { VscCircleFilled } from "react-icons/vsc";

const ListItem = ({listText="sample text"})=>{

    return(
        <div className="flex gap-2 place-items-center my-2">
           <VscCircleFilled className=" text-base text-neutral-200"/>
           <p>{listText}</p>
        </div>
    )
    
}


export function IndividualText(){
    return(

    <p>Postable is perfect for individuals who want to elevate their social media presence without the hassle. Whether you're sharing thoughts, opinions, or everyday moments, Postable makes it easy to create and share beautiful, impactful posts from your tweets.</p>
    );
}

export function BusinessText(){
    return(

    <p>Businesses need to stay agile and maintain a strong social media presence. Postable helps you quickly turn tweets into polished visuals that resonate with your audience, reinforcing your brand and driving engagement without the need for a full design team.</p>
    );
}

export function InfluencerText(){
    return(

    <p>For influencers, maintaining a consistent and visually appealing social media presence is crucial. Postable empowers you to convert your tweets into captivating images that align with your brand, helping you to keep your content fresh and engaging across all platforms.</p>
    );
}

export function IndividualList(){

    return(

        <div>
            <ListItem listText="Effortles Post Creation" />
            <ListItem listText="Enhanced Visual Appeal" />
            <ListItem listText="Easy Sharing Across Platforms" />
            <ListItem listText="Consistent Social Media Presence" />
            
        </div>

    )
}

export function InfluencerList(){

    return(

        <div>
            <ListItem listText="Quick Post Creation" />
            <ListItem listText="Boosted Follower Engagement" />
            <ListItem listText="Consistent Multi-Platform Presence" />
            <ListItem listText="Content Diversification" />
            
        </div>

    )
}

export function BusinessList(){

    return(

        <div>
            <ListItem listText="Content Repurposing" />
            <ListItem listText="Cross-Platform Marketing" />
            <ListItem listText="Consistent Branding" />
            <ListItem listText="Higher Engagement" />
            
        </div>

    )
}






