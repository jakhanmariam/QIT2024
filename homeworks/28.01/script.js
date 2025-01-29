if(localStorage.getItem("save")){
    document.getElementById("text").value = localStorage.getItem("save");
}

function saveText(){
    const text = document.getElementById("text").value;
    localStorage.setItem("save", text);
    alert("saved");
}

function clearText(){
    localStorage.removeItem("save");
    document.getElementById("text").value = "";
    alert('removed');
}