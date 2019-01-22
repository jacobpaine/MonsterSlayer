new Vue ({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameIsRunning = true;
    },
    endGame: function() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameIsRunning = false;
    },
    attack: function(){
      let damage = this.calculateDamage(2, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "You deal " + damage + " points of damage!"
      })
      this.monsterAttacks();
      this.checkWin();
    },
    specialAttack: function(){
      let damage = this.calculateDamage(6, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "You deal a devastating blow for " + damage + " points of damage!"
      });
      this.monsterAttacks();
      this.checkWin();

    },
    heal: function(){
      if(this.playerHealth >= 90){
        this.playerHealth = 100;
      } else{
        this.playerHealth += 10;
      }
      this.turns.unshift({
        isPlayer: true,
        text: "You heal for " + 10 + " points!"
      })
      this.monsterAttacks()
      this.checkWin();
    },
    monsterAttacks: function(){
      let damage = this.calculateDamage(4, 12);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: "Monster deals " + damage + " points of damage to you!"
      })
    },
    calculateDamage: function(min, max){
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function(){
      if(this.monsterHealth <= 0){
        if(confirm("You win! Play Again?")){
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
      } else if(this.playerHealth <= 0){
        if(confirm('You lose! Again?')){
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
      }
    }
  }
});
