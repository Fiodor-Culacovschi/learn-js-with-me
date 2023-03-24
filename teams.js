const team = {
_players: [
{firstName:'Sam',lastName:'Lee',age:23},{firstName:'Ted',lastName:'Lunch',age:33},{firstName:'Mat',lastName:'Tang',age:43}
],
_games:[
  {opponents:'Jets',teamPoints: 66, opponentPoints: 24},
  {opponents:'Dolphins',teamPoints: 86, opponentPoints: 94},
  {opponents:'Eagles',teamPoints: 166, opponentPoints: 124},
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName,newLastName,newAge) {
  let player = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge
  };
  this.players.push(player);
  },
  addGames(newOpponent,newTeamPoints,newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Bugs','Bunny', 67);
console.log(team.players);

team.addGames('Nets', 66,24);
console.log(team.games);

