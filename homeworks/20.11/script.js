let distance = prompt("kashyktykty engiz");
let unit = prompt("olshem birligin engiz");

function distanceCalculator() {
    let totalDistance = 0;

    while (true) {
        if (distance == 0) break;
    }

    switch (unit) {
        case 'metr':
            totalDistance += distance;
            break;
        case 'detsimetr':
            totalDistance += distance / 10;
            break;
        case 'kilometr':
            totalDistance += distance * 1000;
            break;
        default:
            alert("qate olshem birligi.");
            break;
    }
}

console.log(distanceCalculator(distance,unit,totalDistance));
