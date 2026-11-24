const categories = ["Papeterie", "Accessoires", "Sacs"];

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
// 02.Mettre la boutique à jour 
const boutique = {
nom: "Stock & Fournitures",
ville: "Youssoufia",
ouverte: true
};
console.log(` Le nom de la boutiue est:${boutique.nom}`);
console.log(` La ville de la boutiue est:${boutique.ville}`);
// Ajouter la propriété
boutique.devise="MAD"
// Ouvert=false
boutique.ouverte=false
console.log(boutique)
// if raccourci
// let statut;
// if(boutique.ouverte){
//     statut="Ouvert"
// }else{
//     statut="Fermée"
// }
// opérateur ternaire
let statut= boutique.ouverte ? "Ouvert" : "Fermée";
console.log(statut)

// // mettre à jour un inventaire
let copieProduit=[...produits];
console.log(copieProduit)
// Affiche nom ,stock
copieProduit.forEach((Element)=>{
    console.log(`Nom de produit est:${Element.nom} pour le Stock de produit est:${Element.stock}`)
})
copieProduit.forEach((produit)=>{
    produit.nom=="Stylo" ? produit.stock=6 : produit.stock;
})

//Ajouter Gomme
copieProduit.push({ id: 106, nom: "Gomme", categorie: "Papeterie",
prix: 5, stock: 8 })

//Rerire Sac
copieProduit.forEach((produit)=>{
 
  if(produit.id===104){
 copieProduit.splice(copieProduit.indexOf(produit),1)

}
})
console.log(copieProduit)
//Sélection et calcul 
//Sélectionner les produits en rayon
console.log("Challenge 4") 

 const produitSup=produits.filter(produit=>produit.stock>0)
 
 console.log( produitSup)
 const produitCatég=produitSup.filter(p=>p.categorie=="Papeterie")

 console.log(produitCatég)