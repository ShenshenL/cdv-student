
function get(){
  document.getElementById('x').innerHTML = "";
  var num=document.getElementById('data')

  // alert(num.value);
  for (i = 0; i < num.value; i++) {
    var img = document.createElement("img");
    img.src = "tree.png";
    img.height=50
    img.width=50
    var src = document.getElementById("x");

    src.append(img);
  }
}
