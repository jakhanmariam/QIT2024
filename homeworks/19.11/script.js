function finFin(){
    let secret = 30;

    while(true){
        let number = +prompt("Tauyp kor");

        if(number == secret){
            alert("Taptyn")
            break;
        }else if(number > secret){
            alert("Qupia san kishirek")
        }else if (number < secret){
            alert("Qupia soz ulkenirek")
        }else{
            alert("Tek san engiz")
        }
    }
}
finFin();