//Team Statistics
const team = {
 _players:[
   {
      firstName: 'Jordan', 
      lastName: 'Hayles', 
      age: 22
    }
    ],
 _games:[
   {
  opponent: 'Nets',
  teamPoints: 42,
  opponentPoints: 27
}
 ],
  get games() {
       return this._games;
   },
    get players() {
       return this._players;
   },
   addPlayer(firstName, lastName, age)
   {
 let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
   }, 
    addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  },
};
//team members
 team.addPlayer('Lebron', 'James', 36);
  team.addPlayer('Russell', 'Westbrook', 32);
   team.addPlayer('Anthony', 'Davis', 29);
//games played
   team.addGame('Wolves', 100, 98);
   console.log(team._players);
     console.log(team._games);