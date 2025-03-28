import React from "react";
import { MdSportsCricket } from "react-icons/md";
import { BiSolidCricketBall } from "react-icons/bi";
import Batsman from "../playingBatsman/Batsman";
import Bowling from "../bowling/Bowling";
const Prediction = () => {
  const batsManDetails = [
    {
      id: 1,
      batsmanName: "Ruturaj Gaikwad",
      img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/102.png",
      score: 49,
      balls: 22,
      strikeRate: 222.72,
    },
    {
      id: 2,
      batsmanName: "Devon Conway",
      img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/601.png",
      score: 75,
      balls: 40,
      strikeRate: 187.5,
    },
  ];

  const bowlingDetails = {
    id: 1,
    bowlerName: "Bhuvneshwar Kumar",
    img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/15.png",
    wickets: 1,
    balls: 3.2,
    economyRate: 4,
  };

  return (
    <div className=" h-[35vh]  w-full shadow-sm flex flex-col justify-between shadow-white/10 rounded-md ">
      <div className="w-full h-[80%] flex items-center justify-between overflow-hidden ">
        {batsManDetails.map((batsman, batsmanIndex) => (
          <div
            key={batsman.id || batsmanIndex}
            className="w-[calc(100%_/_2.3)] px-0.5 h-full overflow-hidden py-1"
          >
            <div
              className={`w-full h-full flex ${
                batsman.id === 2 && "flex-row-reverse justify-end"
              } items-center justify-center  rounded-md shadow-sm relative shadow-white/10`}
            >
              <span
                className={`absolute leading-0 left-2 ${
                  batsman.id === 2 && "left-[90%]"
                } top-2 rounded-full bg-white  text-[#1155C5] p-0.5 border-[0.2vw] `}
              >
                <MdSportsCricket />
              </span>
              <Batsman batsManDetails={batsman} />
            </div>
          </div>
        ))}
        <div className="w-[calc(100%_-_58%)] px-0.5 h-full overflow-hidde py-1">
          <div
            className={`w-full h-full flex items-center relative  justify-between px-5 rounded-md shadow-sm shadow-white/10`}
          >
            <span className="absolute leading-0 left-2 top-2 rounded-full bg-white  text-[#1155C5] p-0.5 border-[0.2vw] ">
              <BiSolidCricketBall />
            </span>
            <Bowling bowlingDetails={bowlingDetails} />
          </div>
        </div>
      </div>
      <div className="w-full py-2 flex flex-col justify-between ">
        <div className="w-full ">
          <h1></h1>
        </div>
        <div className="w-full flex items-end  justify-center ">
          {/* <Firecrackers /> */}
          <button className=" py-3 px-6 bg-[#1155C5] rounded-md leading-none tracking-wider font-medium text-xs  ">
            Click me to Predict
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
