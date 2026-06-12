const Tablette = require("./Tablette");
const EnceinteConnectee = require("./EnceinteConnectee");
const TelephonePortable = require("./TelephonePortable");

class Factory {
  constructor() {

  }

  CreeObjetCo(type, limiteVolts) {
    switch (type) {
      case "telephone":
        return new TelephonePortable(limiteVolts);
      case "tablette":
        return new Tablette(limiteVolts);
      case "enceinte":
        return new EnceinteConnectee(limiteVolts);
      default:
        throw new Error("Type d'objet connecte inconnu");
    }
  }
}

module.exports = Factory;
