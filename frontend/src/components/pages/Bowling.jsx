import React from "react";
const Bowling = ({ bowlingDetails }) => {
  return (
    <>
      <div className="h-full w-1/2 relative pb-1.5">

        <img
          src={bowlingDetails.img}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="h-full w-[45%] overflow-hidden flex flex-col items-center justify-center gap-2">
        <h1 className="leading-none font-bold tracking-wide text-xs">
          {bowlingDetails.bowlerName}
        </h1>
        <p className="flex leading-none gap-1 items-end">
          <span className="font-medium text-xl leading-none">
            {bowlingDetails.wickets}
          </span>{" "}
          <span className="font-medium text-xs leading-none">
            {bowlingDetails.balls}
          </span>
        </p>
        <p className="flex leading-none gap-1 text-xs items-end">
          Economy Rate:{" "}
          <span className="font-semibold text-md">
            {bowlingDetails.economyRate}
          </span>
        </p>
      </div>
    </>
  );
};

export default Bowling;
