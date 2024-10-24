import React from "react";
import { DiVim } from "react-icons/di";
import shareImageNew from "../assets/shareImageNew.jpeg"
import shareGradient from "../assets/shareGradient.jpeg"

export const ShareComponent = ({ postValue }) => {
  const PostableShare = () => {
    return (
      <div  >
        <div>Postable</div>
        <div>
          Sharing your tweets across multiple platforms made easy. Postable
          helps you creating engaging vis.
        </div>
        <div>9:12am - July 29, 2024</div>
      </div>
    );
  };
  if (postValue === "fbpost") {
    return (
      <div className="border-2 border-black bg-white ">
        <div>Facebook</div>

        <hr />
          
        <div >
          <PostableShare  />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
