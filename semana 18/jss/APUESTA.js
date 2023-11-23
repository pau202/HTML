function apostar(){
    // CALCULAR NUMERO APOSTADO
    var a =Math.round(Math.random()*10);
    //TRASFERENCIA DE VALOR a DE JS AL FROMULARIO
    document.getElementById("resultado").value=a;
    //TRASFERENCIA DE FORMULARIO AL JS 
    document.getElementById("apostado"). value;
    //CALCULAR RESULTADO 
    if (a==b){
        document.getElementById("salida"). value="GANÓ";
    }else{
        document.getElementById("salida"). value="PERDIO";
    }
}
function cancel(){
    document.getElementById("apostado"). value=" ";
    document.getElementById("resultado"). value=" ";
    document.getElementById("salida"). value=" ";
}