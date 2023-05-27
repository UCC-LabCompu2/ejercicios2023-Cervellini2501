/**
 * Conversion de unidades de metros, pulgadas, pies y yardas
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies y pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies y pulgadas
 * @return Valor que retorna
 */
function cambiarUnidades(id,valor){
  if (isNaN(valor)){
  alert("se ingreso un valor invalido");
  document.lasUnidades.unid_metro.value = "";
    document.lasUnidades.unid_pulgada.value = "";
    document.lasUnidades.unid_pie.value = "";
    document.lasUnidades.unid_yarda.value= "";
  }else if(id=="metro"){
    document.lasUnidades.unid_pulgada.value = 39.3701*valor;
    document.lasUnidades.unid_pie.value = 3.28084*valor;
    document.lasUnidades.unid_yarda.value= 1.09361*valor;
  }else if(id=="pulgadas"){
    document.lasUnidades.unid_metro.value = 0.0254*valor;
    document.lasUnidades.unid_pie.value= 0.0833333*valor;
    document.lasUnidades.unid_yarda.value = 0.0277778*valor;
  } else if(id=="yardas"){
    document.lasUnidades.unid_metro.value = 0,9144*valor;
    document.lasUnidades.unid_pulgada.value= 36*valor;
    document.lasUnidades.unid_pie.value= 3*valor;
  }
}
function convertirGR(id){
  var grad, rad;
  if (id=="grados"){
    grad= document.getElementById("grados").value;
    rad= (grad*Math.PI)/180;
  }else if(id=="radianes"){
    rad= document.getElementById("radianes").value;
    grad=(rad*180)/Math*PI;

  }
  document.getElementById("grados").value=grad;
  document.getElementById("radianes").value=rad;

}

function mostrar_ocultar(valorMO){
  if(valorMO=="val_mostrar"){
    document.getElementById("divMO").style.display='block';

  }else if(valorMO=="val_ocultar"){
    document.getElementById("divMO").style.display='none';

  }

}