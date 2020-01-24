function htmlJump(){
var start = document.getElementIdBy("start").value;
var end = document.getElementIdBy("end").value;
var jump = document.getElementByIdBy("jump").value;
jump(start,end,jump);
}
function jump(start,end,jump){
for (var i = start; i <= end; i += ((end-start)/jump)){
  document.write(i);
}
}
