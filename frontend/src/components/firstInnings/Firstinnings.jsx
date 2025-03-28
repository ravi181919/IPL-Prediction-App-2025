import React from "react";
import Card from "../template/Card";

const Firstinnings = () => {

  return (
    <div className="h-full w-1/2 relative bg flex flex-col items-center justify-start px-5 py-1">
      <div className="h-[40vh] w-full ">
        <Card
          imgageOfCaptain={"https://documents.iplt20.com/ipl/IPLHeadshot2025/57.png"}
          currenOver={" 20"}
          currenRun={"207 "}
          currentWicket={" (7)"}
          innings={"first inning"}
          logoOfTeam={"https://i.pinimg.com/originals/ea/40/fd/ea40fd13fa7d46618c5567146f07ba41.png"}
          runRate={"10.35"}
          teamName={"Chennai Super Kings"}
          direction={'left'}
          bgColor={'#FFFC9A'}
          color={'#1155C5'}
        />
      </div>

    </div>
  );
};

export default Firstinnings;
