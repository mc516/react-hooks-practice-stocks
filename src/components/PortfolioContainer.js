import React from "react";
import Stock from "./Stock";

function PortfolioContainer( {myPortfolio} ) {


  console.log(myPortfolio)
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
        // myPortfolio.map(stock => { return <Stock stockInfo={stock}/> })
      }
    </div>
  );
}

export default PortfolioContainer;
