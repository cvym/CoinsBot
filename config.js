module.exports = {
  token: process.env.TOKEN,  // Utilisation de la variable d'environnement pour le token
  prefix: process.env.PREFIX || "&",  // Utilisation de la variable d'environnement pour le prefix, avec une valeur par défaut
  buyers: ["1268356076504617037"],  // Cette valeur peut rester en dur si elle est statique
  footerText: "Kiyun",

  /* API */
  port: process.env.PORT || 3000,  // Utilisation de la variable d'environnement pour le port, avec une valeur par défaut

  /* COLOR (MODIF SI NECESSAIRE) */
  color: [
    { name: "Bleu", price: 3, hexCode: "#0017FC" },
    { name: "Rouge", price: 3, hexCode: "#FF0000" },
    { name: "Jaune", price: 3, hexCode: "#FBFF00" },
    { name: "Vert", price: 3, hexCode: "#1BFF00" },
    { name: "Invisible", price: 4, hexCode: "#2b2d31" },
    { name: "Blanc", price: 3, hexCode: "#FDFEFE" },
    { name: "Noir", price: 3, hexCode: "#000000" },
    { name: "Rose", price: 3, hexCode: "#FFC0CB" },
    { name: "Random", price: 5, hexCode: "Random" }
  ]
};
