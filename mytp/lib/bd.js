/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

global_id = 0;

function ficheBd (p_titre, p_auteur, p_sortie, p_resume, p_prix, p_stock)
{
    this.id = global_id;
    global_id++;
    this.titre = p_titre;	
    this.auteur  = p_auteur;
    this.sortie = 	p_sortie;
    this.resume = p_resume;
    
    this.prix = (p_prix===undefined) ? 0.00:p_prix;	   
    this.stock =(typeof(p_stock)==='undefined')? 0.00:p_stock;
    
    this.stocker=function(qte)
    { 
        if(qte===undefined)
            qte =1;
      
        this.stock +=qte;  
        
        return this;////to call tintin.destocker(10).stocker(2);
    };
    
    this.destocker=function(qte)
    { 
        if (qte===undefined)
            qte =1;
      
        this.stock -=qte;   
        
        return this;//to call tintin.destocker(10).stocker(2);
    };
    
    this.toString = function()
    {
        var str = "<p> style=\"rgb(128,0,0)\"  FICHE BD N°" + this.id + " : " + this.titre + "\nAuteur: " + this.auteur
        + "\nPrix  : " + this.prix + "\nStock  : " + this.stock +"\n </p>";
        
        console.log(str);
        return str;
    };
}
  