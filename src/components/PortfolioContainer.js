import React from "react";
import Stock from "./Stock";

function PortfolioContainer( {myStocksToDisplay, setMyPortfolio} ) {

  return (
    
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
        myStocksToDisplay.map(stock => { return <Stock key={stock.name}stockInfo={stock} setMyPortfolio={setMyPortfolio}/> })
      }
    </div>
  );
}

export default PortfolioContainer;
