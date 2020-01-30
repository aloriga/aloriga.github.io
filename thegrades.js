
function myGrades(){
var g1 = document.getElementById("grade1").value;
var g2 = document.getElementById("grade2").value;
var g3 = document.getElementById("grade3").value;
var g4 = document.getElementById("grade4").value;
  g1 = Number(g1);
  g2 = Number(g2);
  g3 = Number(g3);
  g4 = Number(g4);
console.log(g1);
console.log(g2);
console.log(g3);
  var highest = Math.max(g1,g2,g3,g4);
  var lowest = Math.min(g1,g2,g3,g4);
  var nextLowest;
    if(lowest == g1){
      nextLowest = Math.min(g2,g3,g4);
    }
    else if(lowest == g2){
      nextLowest = Math.min(g1,g3,g4);
    }
    else if (lowest == g3){
      nextLowest = Math.min(g1,g2,g4);
      }
    else{
      nextLowest = Math.min(g1,g2,g3);
  }
  document.getElementById("highest").innerHTML = "The highest grade is: " + highest;
  document.getElementById("average").innerHTML = "The average grade is: " + ((g1+g2+g3)/3);
  document.getElementById("lowest").innerHTML = "The lowest grade is: " + Math.min(g1,g2,g3);
  if (Math.ceil(nextLowest) == lowest){
    document.getElementById("nL").innerHTML = "You are close to the next highest grade";
  }
  else{
    document.getElementById("nL").innerHTML = "You are not close to the next highest grade";
  }
}
function myPower(){
  var base = document.getElementById("base").value;
  var exponent = document.getElementById("exp").value;
  base = Number(base);
  exponent = Number(exponent);
  var ans1 = Math.pow(base,exponent);
  document.getElementById("ans1").innerHTML = "Answer: " + ans1;
}
