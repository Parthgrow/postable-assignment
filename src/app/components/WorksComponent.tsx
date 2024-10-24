import React from "react";
import worksImageFirst from "../assets/worksImageFirst.jpeg";
import shareGradient from "../assets/shareGradient.jpeg";

interface worksComponentProps {
  image: string;
  number: string;
  subheading: string;
  para: string;
}

const WorksComponent: React.FC<worksComponentProps> = ({
  image = "Image",
  number = "2",
  subheading = "hello",
  para = "howare",
}) => {
  
  return (
    <div className="bg-neutral-100 border-[1px] border-neutral-200 h-[60vh] w-[40%]  rounded-[20px] flex flex-col">
      <div
        className="  h-[50%] rounded-[20px] m-1.5"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      ></div>

      <div className="flex flex-col my-8  mx-4 gap-5">
        <div className="leading-3">
          <h3 className="text-neutral-400  font-medium">Step {number} </h3>
          <p className="text-base font-medium ">{subheading}</p>
        </div>
        <div>
          <p className="text-neutral-600 text-sm font-normal">
            {para}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorksComponent;
