import React from "react";
import Stock from "./Stock";

function StockContainer( {stocksToDisplay, setMyPortfolio} ) {
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      { stocksToDisplay.map(stock => { return <Stock key={stock.ticker} stockInfo={stock} setMyPortfolio={setMyPortfolio}/>}) }
    </div>
  );
}

export default StockContainer;
