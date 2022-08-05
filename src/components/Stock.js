import React from "react";

function Stock( { stockInfo, setMyPortfolio} ) {
  const {ticker, name, type, price} = stockInfo
  
  function handleStockClick(event) {
    // console.log(stockInfo)
    setMyPortfolio(stockInfo)
  }

  return (
    <div>
      <div className="card" onClick={handleStockClick}>
        <div className="card-body" >
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker +": " +price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
