var i = true
function funcaogirar(){
    if (i == true){
        document.getElementById("rodar").src = "x.svg";
        document.getElementById("imagem").src = "imagemrodando.gif";
        i = false;
    }
    else{ 
        document.getElementById("rodar").src = "360.svg";
        document.getElementById("imagem").src = "img-sofa-360.svg";
        i = true;
        }
    }