function verificarNumero(){
    div = document.getElementById("resultadoPI");
    div.innerHTML="";
    if(document.getElementById("numero").value==""){
        alert("Preencha o campo número");
        document.frm1.numero1.focus();
        return false;
    }
    var verifica = document.getElementById("numero").value;
    var resultado;
    if (verifica%2 == 0){
        resultado = ("par")
    }else{
        resultado = ("impar")
    }
    var label = document.createElement("label");
    label.setAttribute("class", "resultadoPI");
    var texto = document.createTextNode("Esse número é "+resultado+"!"); 
    label.appendChild(texto);
    div.appendChild(label);
}

function separadorPar(){
    div = document.getElementById("resultadoPI")
    div.innerHTML="";
    
    
    var texto = "";
    for (var i=0; i<51; i++){  

        if (i % 2 == 0){
            texto += i + ", ";
        }    
    } 


    var label = document.createElement("label");
    label.setAttribute("id", "resultadoPI");
    var textoinfo = document.createTextNode(texto); 
    label.appendChild(textoinfo);
    div.appendChild(label);
    
}

function verificaEstacao(){
    div = document.getElementById("resultadoPI");
    div.innerHTML="";
    var resultado;

    var numero = document.getElementById("numeromes").value;
    if ((numero<1) || (numero>12) || (numero=="")){
        alert("Preencha o campo ou digite um número de 1 a 12.");
        document.frm3.linhames.focus();
        return false;
    }

    if ((numero>=1) && (numero<=3)){
        resultado = "Verão";
    }

    if ((numero>=4) && (numero<=6)){
        resultado = "Inverno";    
    }

    if ((numero>=7) && (numero<=9)){
        resultado = "Outono";    
    }

    if ((numero>=10) && (numero<=12)){
        resultado = "Primavera";
    }
    var label = document.createElement("label");
    label.setAttribute("id", "resultadoPI");
    var texto = document.createTextNode("Você está na estação "+resultado+"!"); 
    label.appendChild(texto);
    div.appendChild(label);

}
function exibirTabuada(){
    div = document.getElementById("tabela");
    div.innerHTML="";

    var tabuada = document.getElementById("numeroTabuada").value;

    var tbody = document.createElement("tbody");
    var tabela = document.createElement("table");
    tabela.setAttribute("border", "2");
    tabela.setAttribute("id", "tabela");
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    var texto = document.createTextNode("Tabuada de " + tabuada + "");
    
    th.appendChild(texto);
    tr.appendChild(th);
    thead.appendChild(tr);
    tabela.appendChild(thead);

    for (var i=0; i<10; i++) {
       var trinfo = document.createElement("tr");
       var tdinfo = document.createElement("td");
       var texto = document.createTextNode(tabuada +" x "+(i+1)+" = "+ (tabuada*(i+1)));
       tdinfo.appendChild(texto);
       trinfo.appendChild(tdinfo);
       tbody.appendChild(trinfo);
    }
    tabela.appendChild(tbody);
    div.appendChild(tabela);
}




