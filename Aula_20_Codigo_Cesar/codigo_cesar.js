function esconde(frase, salto) {

  var caracteres = [];
  var str = '';
    for(var i = 0; i < frase.length; i++) {
      caracteres.push(frase[i].charCodeAt(0) + salto);
      str = String.fromCharCode(caracteres[i]) + str;
    }
      
      
  return str; 

}


function revela(fraseCod, salto) {

  var caracteres = [];
  var str = '';
    for(var i = 0; i < fraseCod.length; i++) {
      caracteres.push(fraseCod[i].charCodeAt(0) - salto);
      str = String.fromCharCode(caracteres[i]) + str;
    }
      
      
  return str; 

}
