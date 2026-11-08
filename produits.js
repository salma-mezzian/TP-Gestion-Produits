

const produits = [
  { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
  { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
  { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
  { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }
];

// Affichage du catalogue
console.log("=== Catalogue des produits ===");
produits.forEach(p => console.log(`${p.nom} - ${p.prix} MAD`));

// Produits disponibles
const disponibles = produits.filter(p => p.stock > 0);
console.log("\n=== Produits disponibles ===");
console.log(disponibles);
console.log("Nombre de produits disponibles : " + disponibles.length);

// Valeur totale du stock
const total = produits.reduce((s, p) => s + p.prix * p.stock, 0);
console.log("\n=== Valeur totale du stock ===");
console.log("Valeur totale du stock : " + total + " MAD");

// Produit disponible le moins cher
console.log("\n=== Produit disponible le moins cher ===");
if (disponibles.length > 0) {
  const min = disponibles.reduce((a, b) => a.prix < b.prix ? a : b);
  console.log("Nom : " + min.nom);
  console.log("Prix : " + min.prix + " MAD");
} else {
  console.log("Aucun produit disponible.");
}

// Résumé des produits
const resume = produits.map(p => `${p.nom} - ${p.prix} MAD - ${p.stock} unités`);
console.log("\n=== Résumé des produits ===");
console.log(resume);

// Vérification des données
function estValide(p) {
  return Number.isFinite(p.prix) && p.prix >= 0 &&
         Number.isFinite(p.stock) && p.stock >= 0;
}

console.log("\n=== Vérification des produits ===");
produits.forEach(p =>
  console.log(`${p.nom} : ${estValide(p) ? "Valide" : "Invalide"}`)
);
if (disponibles.length > 0) {
  const moinsCher = disponibles.reduce((min, produit) =>
    produit.prix < min.prix ? produit : min
  );
  const { nom, prix, stock } = moinsCher;
  console.log(nom, prix, stock);
}