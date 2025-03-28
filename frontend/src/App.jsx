import React from "react";
import Sidebar from "./components/navbar/Sidebar";
import Firstinnings from "./components/firstInnings/Firstinnings";
import Secondinnings from "./components/secondInnings/Secondinnings";
import Prediction from "./components/matchPrediction/Prediction";
import Firecrackers from "./components/template/Firecrackers";
import Card from "./components/template/Card";
import Footer from "./components/template/Footer";

const App = () => {
  document.documentElement.classList.add("dark");

  

  return (
    <div className="w-full relative overflow-hidden h-[100vh] dark:bg-black/80 dark:text-white/85  flex">
      <Sidebar />
      <Firecrackers />
      {/* <Firecrackers /> */}

      {/* prediction cards relate with prediction buttons part */}
      <div className="absolute z-10 top-50% left-50% items-center hidden justify-center h-full w-full">
        <div className="h-[40vh] w-[40%] bg-white/15 ml-44 rounded-md">
          <Card
            imgageOfCaptain={"https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png"}
            currenOver={" 2.5"}
            currenRun={"30 "}
            currentWicket={" (0)"}
            innings={"second inning"}
            logoOfTeam={"https://1000logos.net/wp-content/uploads/2024/03/Royal-Challengers-Bengaluru-Logo.png"}
            runRate={"10"}
            teamName={"Royal Challengers Bengaluru"}
            requRunRate={'10.41'}
            direction={'right'}
            bgColor={'#FD1429'}
            color={'#DCC06E'} />
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
          <Prediction />
        </div>

        {/* footer  */}
        <div className="w-full absolute top-full left-0  px-5 ">
          <Footer />
        </div>
      </div>





      <div className="absolute bottom-0 right-15 rotate-[-40deg]">
        <Firecrackers />
      </div>
    </div>
  );
};

export default App;
