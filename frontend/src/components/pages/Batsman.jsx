import React from "react";
const Batsman = ({ batsManDetails }) => {
  return (
    <>
      <div className="h-full w-1/2 relative pb-1.5">
        <img
          src={batsManDetails.img}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="h-full w-1/2 overflow-hidden flex flex-col items-center justify-center gap-2">
        <h1 className="leading-none font-bold tracking-wide text-xs">
          {batsManDetails.batsmanName}
        </h1>
        <p className="flex leading-none gap-1 items-end">
          <span className="font-medium text-xl leading-none">
            {batsManDetails.score}
          </span>{" "}
          <span className="font-medium text-xs leading-none">
            {batsManDetails.balls}
          </span>
        </p>
        <p className="flex leading-none gap-1 text-xs items-end">
          Strike Rate:{" "}
          <span className="font-semibold text-md">
            {batsManDetails.strikeRate}
          </span>
        </p>
      </div>
    </>
  );
};

export default Batsman;
