import "./App.css";
import images from "./images";
import { useState } from "react";
import { shuffle } from "lodash";
import LogOut from "./components/LogOut";


function Game() {
  // create card array for 36 cards and map in board to create cards
  const [cards, setCards] = useState(shuffle([...images, ...images]));
  const [activeCards, setActiveCards] = useState([]);
  const [foundPairs, setFoundPairs] = useState([]);
  const [ clicks, setClicks ] = useState(0);
  const [ won, setWon ] = useState(false);
  const [ total, setTotal ] = useState(0);

  function flipCard(index) {
    // if won, reset cards 
    if (won){
      setCards(shuffle([...images, ...images]));
      setFoundPairs([]);
      setWon(false);
      setClicks(0);
      setTotal(total + 1);
    }
    // if active cards length is 0, then add the index to setActive
    if (activeCards.length === 0) {
      setActiveCards([index]);
    }

    // if active cards is 2, and both cards are the same, then alert of match
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondIndex = index;

      if (cards[firstIndex] === cards[secondIndex]) {
        // if all pairs found 
        if (foundPairs.length + 2 === cards.length) {
          setWon(true) 
        }
        alert(`Match found!`);
        setFoundPairs([...foundPairs, firstIndex, secondIndex]);
      }
      // if active cards length is 1, then take current active cards and add current index
      setActiveCards([...activeCards, index]);
    }
    // if active cards is 2, then make the active cards the new index
    if (activeCards.length === 2) {
      setActiveCards([index]);
    }
    setClicks(clicks + 1);
  }

  // handles the flipping of the cards  
  return (
    <div>
      <div className="board">
        {cards.map((card,index) => {
          // if active cards index is not -1 or found pairs not -1
          const flippedToFront =  (activeCards.indexOf(index) !== -1) || foundPairs.indexOf(index) !== -1;
          return (
            <div className={"card-outer " + (flippedToFront ? 'flipped' : '')}
                 onClick={() => flipCard(index)}>
              <div className="card">
                <div className="front">
                  <img src={card} alt=""/>
                </div>
                <div className="back" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="stats">
        {won && (
          <>You won the game!<br />
            Click any card to play again.<br /><br />
          </>
        )}
        Clicks: {clicks} &nbsp;&nbsp; Found pairs: {foundPairs.length/2} &nbsp;&nbsp; Sets Won: {total}
      </div>
      <div className="logout-game">
        <LogOut />
      </div>
    </div>
  );
}

export default Game;
