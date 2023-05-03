export const ScoreKeeper = ({currentPlayer1, currentPlayer2}) => {
    const tallyingPlayer1 = (currentPlayer1) => {
        fetch(`http://localhost:8080/players/${currentPlayer1}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify()
    })
      .then((response) => response.json())
      .then()
    }
    
    return (
        <></>
    )
}

/*
When the made or missed button is clicked, an onclick event needs to grab the
value of that shot and pass it to a function.

That function will need to only tally a single player. So two functions are needed.

I need to fill in the default values for the players stats in the game page
*/