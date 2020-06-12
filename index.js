function increment(){
    let textCount = document.getElementById("textValue").value.length;
    document.getElementById("textCount").innerHTML = textCount;
    
}

function remove(){
    console.log('here');
    document.getElementById("textCount").innerHTML = "";
}

function showValue(){
    document.getElementById("textCount").innerHTML = "0";
}