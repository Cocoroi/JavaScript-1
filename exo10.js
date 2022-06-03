var planet = [
    ["Terre", 6371, 5.972, "Tellurique", 152000000],
    ["Venus", 9851, 10.972, "Gazeuse", 212000000],
    ["Lune", 1737.4, 7.6, "Tellurique", 149600000]
];
function removeAll() {
    var tbodyP = document.getElementById('tbody');
    tbodyP.innerHTML ="";
}

function affichage() {
    for (var x = 0; x < planet.length; x++) {
        var tbodyP = document.getElementById('tbody');
        var newTr = document.createElement('tr');
        tbodyP.append(newTr);
        var td = document.createElement('td');
        newTr.append(td);
        td.innerHTML += x;
        for (var i = 0; i < planet[x].length; i++) {
            var td = document.createElement('td');
            newTr.append(td);
            td.innerHTML += planet[x][i];
        }
        var td = document.createElement('td');
        newTr.append(td);
        td.innerHTML += "<i class=\"material-icons edit\" onclick=\"edit(this)\">&#xe254;</i>\n" + "<i class=\"material-icons delete\" onclick=\"del(this)\">&#xe872;</i>";
    }
}

planet.sort(compareFirstColumnDown);

affichage();

function compareFirstColumnDown(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}
function compareFirstColumnUp(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] > b[0]) ? -1 : 1;
    }
}
function compareSecondColumnDown(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}
function compareSecondColumnUp(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}
function compareThirdColumnDown(a, b) {
    if (a[2] === b[2]) {
        return 0;
    }
    else {
        return (a[2] < b[2]) ? -1 : 1;
    }
}
function compareThirdColumnUp(a, b) {
    if (a[2] === b[2]) {
        return 0;
    }
    else {
        return (a[2] > b[2]) ? -1 : 1;
    }
}
function compareFourthColumnDown(a, b) {
    if (a[3] === b[3]) {
        return 0;
    }
    else {
        return (a[3] < b[3]) ? -1 : 1;
    }
}
function compareFourthColumnUp(a, b) {
    if (a[3] === b[3]) {
        return 0;
    }
    else {
        return (a[3] > b[3]) ? -1 : 1;
    }
}
function compareFifthColumnDown(a, b) {
    if (a[4] === b[4]) {
        return 0;
    }
    else {
        return (a[4] < b[4]) ? -1 : 1;
    }
}
function compareFifthColumnUp(a, b) {
    if (a[4] === b[4]) {
        return 0;
    }
    else {
        return (a[4] > b[4]) ? -1 : 1;
    }
}

function triN(why) {
    if (why.innerHTML == "Nom ↓") {
        why.innerHTML = "Nom ↑";
        planet.sort(compareFirstColumnUp);
        removeAll();
        affichage();
    } else {
        why.innerHTML = "Nom ↓";
        document.getElementById('taille').innerHTML = "Taille (rayon en km)";
        document.getElementById('masse').innerHTML = "Masse (en kg *10²³)";
        document.getElementById('type').innerHTML = "Type";
        document.getElementById('distance').innerHTML = "Distance (au soleil en km)";
        planet.sort(compareFirstColumnDown);
        removeAll();
        affichage();
    }
}
function triTa(why) {
    if (why.innerHTML == "Taille (rayon en km) ↓") {
        why.innerHTML = "Taille (rayon en km) ↑";
        planet.sort(compareSecondColumnUp);
        removeAll();
        affichage();
    } else {
        why.innerHTML = "Taille (rayon en km) ↓";
        document.getElementById('nom').innerHTML = "Nom";
        document.getElementById('masse').innerHTML = "Masse (en kg *10²³)";
        document.getElementById('type').innerHTML = "Type";
        document.getElementById('distance').innerHTML = "Distance (au soleil en km)";
        planet.sort(compareSecondColumnDown);
        removeAll();
        affichage();
    }
}
function triM(why) {
    if (why.innerHTML == "Masse (en kg *10²³) ↓") {
        why.innerHTML = "Masse (en kg *10²³) ↑";
        planet.sort(compareThirdColumnUp);
        removeAll();
        affichage();
    } else {
        why.innerHTML = "Masse (en kg *10²³) ↓";
        document.getElementById('nom').innerHTML = "Nom";
        document.getElementById('taille').innerHTML = "Taille (rayon en km)";
        document.getElementById('type').innerHTML = "Type";
        document.getElementById('distance').innerHTML = "Distance (au soleil en km)";
        planet.sort(compareThirdColumnDown);
        removeAll();
        affichage();
    }
}
function triTy(why) {
    if (why.innerHTML == "Type ↓") {
        why.innerHTML = "Type ↑";
        planet.sort(compareFourthColumnUp);
        removeAll();
        affichage();
    } else {
        why.innerHTML = "Type ↓";
        document.getElementById('nom').innerHTML = "Nom";
        document.getElementById('taille').innerHTML = "Taille (rayon en km)";
        document.getElementById('masse').innerHTML = "Masse (en kg *10²³)";
        document.getElementById('distance').innerHTML = "Distance (au soleil en km)";
        planet.sort(compareFourthColumnDown);
        removeAll();
        affichage();
    }
}
function triD(why) {
    if (why.innerHTML == "Distance (au soleil en km) ↓") {
        why.innerHTML = "Distance (au soleil en km) ↑";
        planet.sort(compareFifthColumnUp);
        removeAll();
        affichage();
    } else {
        why.innerHTML = "Distance (au soleil en km) ↓";
        document.getElementById('nom').innerHTML = "Nom";
        document.getElementById('taille').innerHTML = "Taille (rayon en km)";
        document.getElementById('masse').innerHTML = "Masse (en kg *10²³)";
        document.getElementById('type').innerHTML = "Type";
        planet.sort(compareFifthColumnDown);
        removeAll();
        affichage();
    }
}

function del(buttonDel) {
    var parentI = buttonDel.parentElement;
    var parentTd = parentI.parentElement;

    var index = parseInt(parentTd.children[0].innerHTML);

    planet.splice(index, 1);

    var nom = document.getElementById('nom');
    nom.innerHTML = "Nom ↓";
    document.getElementById('taille').innerHTML = "Taille (rayon en km)";
    document.getElementById('masse').innerHTML = "Masse (en kg *10²³)";
    document.getElementById('type').innerHTML = "Type";
    document.getElementById('distance').innerHTML = "Distance (au soleil en km)";
    planet.sort(compareFirstColumnDown);
    removeAll();
    affichage();
}
function edit(buttonEdit) {
    var parentI = buttonEdit.parentElement;
    var parentTd = parentI.parentElement;

    var index = parseInt(parentTd.children[0].innerHTML);

    let txt1 = prompt("Nom :", "");
    planet[index][0] = txt1;
    let txt2 = prompt("Taille (rayon en km) :", "");
    planet[index][1] = txt2;
    let txt3 = prompt("Masse (en kg) :", "");
    planet[index][2] = txt3;
    let txt4 = prompt("Type :", "");
    planet[index][3] = txt4;
    let txt5 = prompt("Distance (au soleil en km) :", "");
    planet[index][4] = txt5;

    var nom = document.getElementById('nom');
    nom.innerHTML = "Nom ↓";
    document.getElementById('taille').innerHTML = "Taille (rayon en km)";
    document.getElementById('masse').innerHTML = "Masse (en kg *10²³)";
    document.getElementById('type').innerHTML = "Type";
    document.getElementById('distance').innerHTML = "Distance (au soleil en km)";
    planet.sort(compareFirstColumnDown);
    removeAll();
    affichage();
}
function add() {
    var addP = [];

    let txt1 = prompt("Nom :", "");
    addP.push(txt1);
    let txt2 = prompt("Taille (rayon en km) :", "");
    addP.push(txt2);
    let txt3 = prompt("Masse (en kg) :", "");
    addP.push(txt3);
    let txt4 = prompt("Type :", "");
    addP.push(txt4);
    let txt5 = prompt("Distance (au soleil en km) :", "");
    addP.push(txt5);

    planet.push(addP);

    var nom = document.getElementById('nom');
    nom.innerHTML = "Nom ↓";
    document.getElementById('taille').innerHTML = "Taille (rayon en km)";
    document.getElementById('masse').innerHTML = "Masse (en kg *10²³)";
    document.getElementById('type').innerHTML = "Type";
    document.getElementById('distance').innerHTML = "Distance (au soleil en km)";
    planet.sort(compareFirstColumnDown);
    removeAll();
    affichage();
}