function calcule() {
    var startTime = performance.now()
    var num = document.getElementById("num").value;
    var res = factorialize(num);

    var element =  document.getElementById('res');
    if (typeof(element) != 'undefined' && element != null)
    {
        element.remove();
    }

    var divR = document.getElementById('result');
    var newR = document.createElement("p");
    newR.id = 'res';
    divR.append(newR);
    newR.innerHTML += res;

    var endTime = performance.now()

    var element =  document.getElementById('ti');
    if (typeof(element) != 'undefined' && element != null)
    {
        element.remove();
    }

    var ti = endTime - startTime;
    var divR = document.getElementById('time');
    var newR = document.createElement("p");
    newR.id = 'ti';
    divR.append(newR);
    newR.innerHTML += ti*1000 + " millisecondes";
}
function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}
