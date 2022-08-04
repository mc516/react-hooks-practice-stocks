import React from "react";

function Stock( { stockInfo, onStockAddToPortfolio } ) {
  const {ticker, name, type, price} = stockInfo
  
  function handleStockClick(event) {
    console.log(stockInfo)
    onStockAddToPortfolio(stockInfo)
  }

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={handleStockClick}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker +": " +price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
