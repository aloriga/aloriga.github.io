function toFixed(){
  var X1 = document.getElementById("X1").value;
  var Y1 = document.getElementById("Y1").value;
  var X2 = document.getElementById("X2").value;
  var Y2 = document.getElementById("Y2").value;
  X1 = Number(X1);
  Y1 = Number(Y1);
  X2 = Number(X2);
  Y2 = Number(Y2);
  document.getElementById("orderPair1").innerHTML= "(" + X1 + " , " + Y1 +" )";
  document.getElementById("orderPair2").innerHTML= "(" + X2 + " , " + Y2 +" )";
    var distance = Math.sqrt(Math.pow(Math.abs(Y2-Y1),2)+Math.pow(Math.abs(X2-X1),2));
  
 document.getElementById("distance").innerHTML= distance;
}
function toStart(){
  document.getElementById("orderPair1").innerHTML= "(" +  " , "  +" )";
  document.getElementById("orderPair2").innerHTML= "(" +  " , "  +" )";
}
