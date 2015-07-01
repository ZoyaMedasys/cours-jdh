	
function init()
{
    var l_textsource = document.getElementById("textsource").value;
    console.log(l_textsource);
    document.getElementById("textcopy").innerHTML=l_textsource;
   
}

function copytext()
{
    var l_textsource = document.getElementById("textsource").value;
    console.log(l_textsource);
    document.getElementById("textcopy").innerHTML=l_textsource;
   
}

function copytext(event)
{
    document.getElementById("textcopy").innerHTML = event.target.value;
}

window.addEventListener('select',copytextonselect(event) );
window.addEventListener('click',copytext(event) );