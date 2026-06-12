const ObjetConnecte = require("./ObjectConnecte");

class EnceinteConnectee extends ObjetConnecte {
  constructor(limiteVolts) {
    super(limiteVolts);
  }
}

module.exports = EnceinteConnectee;
