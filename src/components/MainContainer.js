import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockData, setstockData] = useState([])
  const [filterType, setFilterType] = useState("Tech")
  const [sortBy, setSortBy] = useState("")
  const [myPortfolio, setMyportfolio] = useState([])

  useEffect(() => {
    fetch(" http://localhost:3001/stocks")
    .then(res => res.json())
    .then(data => setstockData(data))
  }, [])

  function handleSetFilterType(filterType){
    console.log(filterType)
    setFilterType(filterType)
  }
  function handlesetSortBy(e) {
    setSortBy(e)
  }

  function handleSetMyPortfolio(stockToAdd){
    setMyportfolio({
      ...myPortfolio,
      stockToAdd
    })
  }

const stocksToDisplay = stockData.filter(stock => {
  if(filterType !== "") {
    return stock.type === filterType
  }
})

// const upDateStocksToDisplay = () => {
//   const stocks = stockData
//   if (sortBy !== "" && sortBy === "Alphabetically")  {
//     return stocks.sort()
//   }
//   if (sortBy !== "" && sortBy === "Price") {
//     return stocks.sort(function(a, b){return a-b})
//   }
  
// }

  return (
    <div>
      <SearchBar onFilterChange={handleSetFilterType} onsetSortBy={handlesetSortBy} currentSortBy={sortBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocksToDisplay={stocksToDisplay} setMyPortfolio={handleSetMyPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocksToDisplay={myPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
