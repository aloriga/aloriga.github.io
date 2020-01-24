function htmlJump(){
var start = document.getElementById("start").value;
var end = document.getElementById("end").value;
var jump = document.getElementById("jump").value;
jump(start,end,jump);
}
function jump(start,end,jump){
for (var i = start; i <= end; i += ((end-start)/jump)){
  document.write(i);
}
}
