/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
projet = [{"nom" :"other BDPhilia", "auteur":"new auteur", "copy":"&copy; 2009 mon entreprise"}];
function affichePageBandeauHaut()
{
    document.write("<div id=\"bandeau\">&nbsp;</div>");  
}

function affichePageTitre(pagename)
{
   var str="<div id=\"titre\"><h1>Bienvenue sur " + pagename +"</h1></div>";
    
    console.log(str);
    document.write(str);
    
  //   document.write('<div id="titre"><h1>Bienvenue sur BDPhilia</h1></div>');
}

function affichePagePied(auteur)
{
    document.write('<div id="pied"><span>&copy; 2009 STARTX - Réalisé par ' + auteur +'</span></div>');
}


