/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

global_id = 0;
function ficheBd(p_titre, p_auteur, p_sortie, p_resume, p_prix, p_stock)
{
    this.id = global_id;
    global_id++;
    this.titre = p_titre;
    this.auteur = p_auteur;
    this.sortie = p_sortie;
    this.resume = p_resume;
    this.prix = (p_prix === undefined) ? 0.00 : p_prix;
    this.stock = (typeof (p_stock) === 'undefined') ? 0.00 : p_stock;
    this.stocker = function (qte)
    {
        if (qte === undefined)
            qte = 1;
        this.stock += qte;
        return this; ////to call tintin.destocker(10).stocker(2);
    };
    this.destocker = function (qte)
    {
        if (qte === undefined)
            qte = 1;
        this.stock -= qte;
        return this; //to call tintin.destocker(10).stocker(2);
    };
    this.toString = function ()
    {
        var str = "<p>  FICHE BD N°" + this.id + " : " + this.titre + "\nAuteur: " + this.auteur
                + "\nPrix  : " + this.prix + "\nStock  : " + this.stock + "\n </p>";
        console.log(str);
        return str;
    };
}

function stockBd() {
    this.stock = new Array();
    this.stockByKey = new Array();
    
    this.referencer = function (bd) {
        if (typeof bd != 'object')
            return;
        this.stock.push(bd);
        this.stockByKey[bd.id] = this.stock.length - 1;
    };
    
    this.ajouter_bd = function (p_titre, p_auteur, p_sortie, p_resume, p_prix, p_stock)
    {
        l_ficheBd = new ficheBd(p_titre, p_auteur, p_sortie, p_resume, p_prix, p_stock);
        this.referencer(l_ficheBd);
    };
    
    this.stocker = function(bd_id, qte)
    {
        var index = this.stockByKey[bd_id];
        var p_bd = this.stock[index];
        
         console.log(this.stock);
         console.log(index);
         console.log(p_bd);
         
         
        if(p_bd === 'undefined')
             return;
        p_bd.stocker(qte);
    };
    
    this.destocker = function(bd_id, qte)
    {
         var index = this.stockByKey[bd_id];
         var p_bd = this.stock[index];
         
         if(p_bd === 'undefined')
             return;
         
         p_bd.destocker(qte);
    };
    
    this.toString = function()
    {
        var str  = "<div>";
        for(var i=0; i<this.stock.length; i++)
        {
            var p_bd = this.stock[i];
            p_bd.toString();
        }
    };
}
//        Créer une classe stockBd() dont le constructeur instancie 2 propriétés de tableau "stock" et "stockByKey"
//                - Créer une methode referencer(bd) qui vérifie que le paramètre soit un objet.Si c'est
//                le cas, il ajoute une entrée dans la propiété stockByKey (clef = id de la bd, valeur = indice dans le tableau stock)
//                on ajoute dans le tableau stock, l'objet ficheBd passé en paramètre
//                - Créer une methode ajouter(bd) qui accèpte les même paramètres que notre classe ficheBd
//                cette fonction créer un objet ficheBd qu'elle ajoute dans l'arbre stock et stockByKey
//                - Créer les methode stocker() et destocker() qui prennent en premier paramêtre l'id de 
//                la Bd à modifier, et en second paramètre, la quantité à modifier
//                - Enfin, créer une methode toString() permettant d'afficher un tableau de toutes les Bd en stock
//                ce tableau sera en xhtml