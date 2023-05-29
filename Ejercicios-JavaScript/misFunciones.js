/**
 * Conversion de unidades de metros, pulgadas, pies y yardas
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies y pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies y pulgadas
 * @return Valor que retorna
 */
function cambiarUnidades(id,valor){
  var metro, pulgada, pie, yarda;

  if(valor.includes(",")){
    valor=valor.replace(",",".");

  }


  if(isNaN(valor)){
    alert("se ingreso un valor invalido"+id);
    metro="";
    pulgada="";
    pie="";
    yarda="";
  }else if(id=="metro"){
    metro=valor;
    pulgada=39.3701*valor;
    pie=3.28084*valor;
    yarda=1.09361*valor;
  }else if(id=="pulgada"){
    pulgada=valor;
    metro=0.0254*valor;
    pie=0.0833333*valor;
    yarda=0.0277778*valor;
  }else if(id=="yarda"){
    yarda=valor;
    metro=0.9144*valor;
    pulgada=36*valor;
    pie=3*valor;
  }else if(id=="pie"){
    pie=valor;
    metro= 0.3048*valor;
    pulgada= 12*valor;
    yarda=0.333333*valor;
  }

  document.lasUnidades.unid_metro.value= Math.round(metro*100)/100;
  document.lasUnidades.unid_pulgada.value= Math.round(pulgada*100)/100;
  document.lasUnidades.unid_pie.value=Math.round(pie*100)/100;
  document.lasUnidades.unid_yarda.value=Math.round(yarda*100)/100;

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

function calcularSuma(){
  var num1, num2;
  num1=Number(document.getElementsByName("sum_num1") [0].value);
  num2=document.getElementsByName("sum_num2") [0].value;
  document.getElementsByName("sum_total")[0].value=num1+ Number(num2);
}

function calcularResta(){
  var numr1,numr2;
  numr1=Number(document.getElementsByName("res_num1")[0].value);
  numr2=Number(document.getElementsByName("res_num2")[0].value);
  document.getElementsByName("res_total")[0].value=numr1-numr2;
}

function calcularMult(){
  var numm1,numm2;
  numm1=Number(document.getElementsByName("mul_num1")[0].value);
  numm2=Number(document.getElementsByName("mul_num2")[0].value);
  document.getElementsByName("mul_total")[0].value=numm1*numm2;

}

function calcularDiv(){
  var numd1;numd2;

  numd1=Number(document.getElementsByName("div_num1")[0].value);
  numd2=Number(document.getElementsByName("div_num2")[0].value);
  document.getElementsByName("div_total")[0].value=numd1/numd2;

}