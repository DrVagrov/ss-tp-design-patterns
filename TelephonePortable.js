const ObjetConnecte = require("./ObjectConnecte");

class TelephonePortable extends ObjetConnecte {
  constructor(limiteVolts) {
    super(limiteVolts);
  }
}

module.exports = TelephonePortable;
