
var img = document.getElementById("img1");

function on(){
    img.src = "image/blub - on.jpg"
}

function off(){
   img.src = "image/blub.jpg"
   document.getElementById("off").disabled = false
}