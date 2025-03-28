import React from "react";

const Card = ({
  imgageOfCaptain,
  logoOfTeam,
  innings,
  teamName,
  currenRun,
  currentWicket,
  currenOver,
  runRate,
  direction,
  requRunRate,
  bgColor,
  color
}) => {
  const allCardDetails = {
    imgageOfCaptain: imgageOfCaptain,
    logoOfTeam: logoOfTeam,
    innings: innings,
    teamName: teamName,
    currenOver: currenOver,
    currenRun: currenRun,
    currentWicket: currentWicket,
    runRate: runRate,
    direction: direction,
    requRunRate:requRunRate,
    bgColor:bgColor,
    color:color
  };
  return (
    <div
     className={`h-full w-full relative shadow-sm  shadow-white/10 rounded-lg flex flex-col`}>
      <div className="w-full py-3 px-4 h-[10%]">
        <h1
         style={{ backgroundColor: bgColor , color: allCardDetails.color}}
         className={`px-4 py-2 text-sm leading-none drop-shadow-lg font-normal tracking-wide capitalize w-fit rounded-md  ${allCardDetails.direction === 'right' ? 'float-left' : 'float-right'}`}>{allCardDetails.innings}</h1>
      </div>
      <div className={`h-[90%] w-full relative flex items-center justify-between ${allCardDetails.direction === 'right' && 'flex-row-reverse' } rounded-lg `}>
        <div className={`h-full w-1/2 pr-10 rounded-lg relative ${allCardDetails.direction === 'right' ? 'ml-20' : 'mr-20'}`}>
          <img
            src={allCardDetails.imgageOfCaptain}
            alt={allCardDetails.teamName}
            className="h-full w-full object-cover   absolute bottom-6 rounded-lg "
          />
        </div>
        <div className={`h-10 w-10 rounded-full overflow-hidden absolute top-[45%] ${allCardDetails.direction==='left' ? 'left-[45%] ' : 'left-[35%] '} -translate-[50%, 50%] `}>
          <img src={allCardDetails.logoOfTeam} alt="logo-of-team" className="h-full w-full object-cover" />
        </div>
        <div className={`flex flex-col justify-center w-1/2 h-full relative rounded-lg ${allCardDetails.direction === 'right' ? 'pl-6' : 'pr-6'}`}>
          <h1 className="font-semibold leading-none text-sm tracking-wide">{allCardDetails.teamName}</h1>
          <h1 className="flex items-center font-normal text-xs justify-start gap-1 pt-3">
            <span className="">{allCardDetails.currenRun}</span>
            <span className="">{allCardDetails.currentWicket}</span>{" / "}
            <span className="">{`${allCardDetails.currenOver}`}</span>
          </h1>
          <h2 className="text-xs mt-2">
            Run Rate: <span>{allCardDetails.runRate}</span>
          </h2>
        </div>
      </div>
        <div className={`absolute bottom-5 ${allCardDetails.direction === 'left' ? 'hidden' : 'left-[5%]' } `}>
          <h1 className="font-normal text-xs text-white/65">Required Run Rate: <span className="font-bold"> {allCardDetails.requRunRate}</span></h1>
        </div>
    </div>
  );
};

export default Card;
