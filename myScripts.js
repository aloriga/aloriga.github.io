function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomNumTerms(min,max,terms){
  var sqrt = false;
  document.write("Random Numbers: ")
for(var i = 0; i < terms; i++){
  var number = getRandomInt(min,max);
  document.write("<br> Number:")
  document.write(number);
  if(Math.round(Math.sqrt(number)) == Math.sqrt(number)){
  document.write(" and has integar squareroot of: ")
  document.write(Math.sqrt(number));
  sqrt = true;
}
}
  if(sqrt == false){
    document.write("<br> Found no sqrt");
    var nums = getRandomInt(min,max);
    while(Math.round(Math.sqrt(nums)) != Math.sqrt(nums)){
    nums = getRandomInt(min,max);
    }
    document.write("<br> Here is a sqrt of " + nums + " which is " + Math.sqrt(nums));
    }
  }
function htmlRandomNumTerms(){
    var min = document.getElementById("min").value;
    var max = document.getElementById("max").value;
    var numTerms = document.getElementById("numTerms").value;
  document.getElementById("rT").innerHTML = randomNumTerms(min,max,numTerms);
}
document.getElementById("bT").onclick = htmlRandomNumTerms;
