import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Firstinnings from "./Firstinnings";
import Secondinnings from "./Secondinnings.jsx";
import Prediction from "./Prediction";
import Firecrackers from "../template/Firecrackers.jsx";
import Card from "../template/Card.jsx";
import Footer from "../template/Footer";

const Homepage = () => {
  document.documentElement.classList.add("dark");
  const [predictionIs, setPredicationIs] = useState(false);
  const Predicte = (e) => {
    setPredicationIs((prev) => !prev);
  };
  if (predictionIs) {
    setTimeout(() => {
      setPredicationIs(false);
    }, 5000);
  }
  return (
    <div className="w-full relative overflow-hidden h-[100vh] dark:bg-black/80 dark:text-white/85 flex">
      <Sidebar />
      {predictionIs && (
        <div className="absolute bottom-0 left-15 z-[100] rotate-[10deg]">
          <Firecrackers />
          <Firecrackers />
        </div>
      )}

      {/* prediction cards relate with prediction buttons part */}
      <div
        className={`absolute z-10 top-50% ${
          predictionIs ? "flex" : "hidden"
        } left-50% items-center  bg-black/65 backdrop-blur-md justify-center h-full w-full`}
      >
        <div className="h-[40vh] w-[40%] bg-white/30 rounded-md ">
          <Card
            imgageOfCaptain={
              "https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png"
            }
            currenOver={" 2.5"}
            currenRun={"30 "}
            currentWicket={" (0)"}
            innings={"second inning"}
            logoOfTeam={
              "https://1000logos.net/wp-content/uploads/2024/03/Royal-Challengers-Bengaluru-Logo.png"
            }
            runRate={"10"}
            teamName={"Royal Challengers Bengaluru"}
            requRunRate={"10.41"}
            direction={"right"}
            bgColor={"#FD1429"}
            color={"#DCC06E"}
          />
        </div>
      </div>

      {/* current match */}
      <div className="flex flex-col w-[80%] h-fit relative ">
        <div className="h-full w-full relative flex ">
          <Firstinnings />
          <Secondinnings />
        </div>

        {/* prediction button */}
        <div className="flex items-center justify-center h-fit w-full px-5 py-4">
          <Prediction Predicte={Predicte} />
        </div>

        {/* footer  */}
        <div className="w-full absolute top-full left-0  px-5 ">
          <Footer />
        </div>
      </div>

      {predictionIs && (
        <div className="absolute bottom-0 right-15 z-[100] rotate-[-40deg]">
          <Firecrackers />
          <Firecrackers />
        </div>
      )}
    </div>
  );
};

export default Homepage;
