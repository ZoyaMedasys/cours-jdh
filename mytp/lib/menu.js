/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
pagesDisponibles =new Array();

var strProjet = "Bienvenue sur "+projet["nom"];
pagesDisponibles.push({"titre_court":"Accueil", "page":"index.htm", "titre_long":strProjet});
pagesDisponibles.push({"titre_court":"Recherche", "page":"recherche.htm", "titre_long":"Votre recherche de BD"});
pagesDisponibles.push({"titre_court":"Commande", "page":"commande.htm", "titre_long":"Votre panier"});

function affichePageMenu(pagename)
{
    var stCommande;
    var li;
    stCommande ="<div id=\"menu\"> \n <ul>"; 
     
       
    for (i=0; i<pagesDisponibles.length; i++)
    {
        if(pagename===pagesDisponibles[i].titre_court)
           li="<li class=\"select\">";
        else
            li="<li>";
        stCommande += li+ "<a href=\"" + pagesDisponibles[i].page + "\" title=\"" 
                + pagesDisponibles[i].titre_court + "\">" + pagesDisponibles[i].titre_court +"</a></li>\n";
    }
    stCommande += "</ul>\n</div>\n";
    
    console.log(stCommande);
    
    document.write(stCommande);
}
   
