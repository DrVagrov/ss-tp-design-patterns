const ObjetConnecte = require("./ObjectConnecte");

class Tablette extends ObjetConnecte {
  constructor(limiteVolts) {
    super(limiteVolts);
  }
}

module.exports = Tablette;
