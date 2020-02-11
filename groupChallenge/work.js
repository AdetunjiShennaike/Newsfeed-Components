function nb_year(p0, percent, aug, p) {
  for(var i = 0; p0 < p; i++) p0 += p0 * (percent/100) +aug;
  return i;
}

// console.log(nb_year(1000, 2, 50, 1200));

// console.log(nb_year(1000, 2, 100, 1700));

class Fighter {
  constructor(stats){
    this.name = stats.name;
    this.health = stats.health;
    this.damagePerAttack = stats.damagePerAttack;
    // this.toString = function() { return this.name; }
  }

  attack(opp) {
    if (opp.takedmg(this.damagePerAttack) >= 1) {
      console.log( `${this.name} has attacked ${opp.name} dealing ${this.damagePerAttack} damage.`) 
      console.log(opp.name)
      return opp.health -= this.damagePerAttack && opp.attack(this.name);
      }
      else {
        return `${this.name} is the winner!`;
      }
  }

  takedmg(damage) {
    if ((this.health - damage) >= 1) {
      return this.health - damage;
    }
    else {
      console.log(`${this.name} has no health left.`);
      return 0;
    }
  }

}

const Lew = new Fighter({name: "Lew", health: 10, damagePerAttack: 2});
const Harry = new Fighter({name: "Harry", health: 5, damagePerAttack: 4});

console.log(Harry)
console.log(Lew)
// Lew.attack(Harry)


// 	Test.assertEquals(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");

// 	Test.assertEquals(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")

// 	Test.assertEquals(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")

// 	Test.assertEquals(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")
    
// 	Test.assertEquals(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")

// });

