const categories = ["Papeterie", "Accessoires", "Sacs"];
const boutique = {
nom: "Stock & Fournitures",
ville: "Youssoufia",
ouverte: true
};
const produits = [
{ id: 101, nom: "Cahier", categorie: "Papeterie",
prix: 20, stock: 5 },
{ id: 102, nom: "Stylo", categorie: "Papeterie",
prix: 10, stock: 0 },
{ id: 103, nom: "Trousse", categorie: "Accessoires",
prix: 35, stock: 3 },
{ id: 104, nom: "Sac", categorie: "Sacs",
prix: 120, stock: 2 },
{ id: 105, nom: "Classeur", categorie: "Papeterie",
prix: 30, stock: 4 }
];
// Tableaux et Objets
// 01.Organiser les catégories
console.log(`La premiére catégorie est:${categories[0]}`);
console.log(`Le nombre initial de catégories est:${categories.length}`)
//ajoute << classement>>
categories.push("Classement")
// Remplaces <<Accessoires>>
categories[1]="Bureau";
// Retire derniére 

categories.splice(categories.length-1,1)
// Tablequ final 
console.log(categories)