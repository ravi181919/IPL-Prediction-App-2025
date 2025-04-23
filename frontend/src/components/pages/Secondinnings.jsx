import React from 'react'
import Card from '../template/Card'
const Secondinnings = () => {
  return (
    <div className="h-full w-1/2 relative flex flex-col items-center justify-start px-5 py-1">
    <div className="h-[40vh] w-full">
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
        color={'#DCC06E'}
      />
    </div>

  </div>
  )
}

export default Secondinnings
