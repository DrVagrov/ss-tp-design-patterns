class Logger {
  static instance = null;

  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }

    this.niveau = "debug";
    Logger.instance = this;
  }

  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  setNiveau(niveau) {
    const niveauNormalise = String(niveau).toLowerCase();
    const niveauxValides = ["debug", "info", "error"];

    if (!niveauxValides.includes(niveauNormalise)) {
      throw new Error("Le niveau doit etre debug, info ou error.");
    }

    this.niveau = niveauNormalise;
  }

  debug(msg) {
    if (["debug", "info", "error"].includes(this.niveau)) {
      console.log(`${this.formatDate()} - DEBUG - ${msg}`);
    }
  }

  info(msg) {
    if (["info", "error"].includes(this.niveau)) {
      console.log(`${this.formatDate()} - INFO - ${msg}`);
    }
  }

  error(msg) {
    if (this.niveau === "error") {
      console.log(`${this.formatDate()} - ERROR - ${msg}`);
    }
  }

  formatDate() {
    const date = new Date();
    const jour = String(date.getDate()).padStart(2, "0");
    const mois = String(date.getMonth() + 1).padStart(2, "0");
    const annee = date.getFullYear();
    const heures = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const secondes = String(date.getSeconds()).padStart(2, "0");

    return `${jour}/${mois}/${annee} ${heures}:${minutes}:${secondes}`;
  }
}

module.exports = Logger;

if (require.main === module) {
  const logger1 = Logger.getInstance();
  const logger2 = Logger.getInstance();

  console.log("Meme instance :", logger1 === logger2);

  logger1.debug("Message en niveau debug");
  logger1.info("Ce message ne s'affiche pas en niveau debug");
  logger1.error("Ce message ne s'affiche pas en niveau debug");

  logger1.setNiveau("info");
  logger1.debug("Message en niveau info");
  logger1.info("Message info en niveau info");
  logger1.error("Ce message ne s'affiche pas en niveau info");

  logger2.setNiveau("error");
  logger2.debug("Message en niveau error");
  logger2.info("Message info en niveau error");
  logger2.error("Message error en niveau error");
}
