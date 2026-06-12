class Employe {
  constructor(nom, prenom, salaire) {
    this.nom = nom;
    this.prenom = prenom;
    this.salaire = salaire;
  }

  calculerSalaire() {
    return this.salaire;
  }
}

class Service {
  constructor(nom) {
    this.nom = nom;
    this.elements = [];
  }

  ajouterElement(element) {
    this.elements.push(element);
  }

  calculerSalaire() {
    return this.elements.reduce(
      (total, element) => total + element.calculerSalaire(),
      0
    );
  }
}

module.exports = {
  Employe,
  Service,
};

if (require.main === module) {
  const dsin = new Service("DSIN");
  const bigData = new Service("Big Data");
  const javaDev = new Service("Java Dev");

  dsin.ajouterElement(new Employe("RASPEY", "Cecile", 10000));
  dsin.ajouterElement(new Employe("BEKCHAR", "Bilel", 8000));

  bigData.ajouterElement(new Employe("RAMNEY", "JB", 7500));
  bigData.ajouterElement(new Employe("DOB", "Jane", 3500));

  javaDev.ajouterElement(new Employe("GUINEAU", "Kevin", 7500));
  javaDev.ajouterElement(new Employe("MARTIN", "Paul", 3500));

  dsin.ajouterElement(bigData);
  dsin.ajouterElement(javaDev);

  const total = dsin.calculerSalaire();

  console.log(`Salaire total ${dsin.nom} : ${total} EUR`);

  if (total === 40000) {
    console.log("Test OK : total attendu 40000.");
  } else {
    console.log(`Test KO : total obtenu ${total}.`);
  }
}
