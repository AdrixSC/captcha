function generateCaptcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    for (var i = 0; i < 8; i++) {
        var one = alpha[Math.floor(Math.random() * alpha.length)];
        var two = alpha[Math.floor(Math.random() * alpha.length)];
        var three = alpha[Math.floor(Math.random() * alpha.length)];
        var four = alpha[Math.floor(Math.random() * alpha.length)];
        var five = alpha[Math.floor(Math.random() * alpha.length)];
        var six = alpha[Math.floor(Math.random() * alpha.length)];
        var seven = alpha[Math.floor(Math.random() * alpha.length)];
        var eigth = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = one + '' + two + '' + '' + three + '' + four + '' + five + '' + six + '' + seven + '' + eigth;
    document.getElementById("mainCaptcha").value = code
};

function CheckValidCaptcha() {
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);

    if (string1 == string2) {
        document.getElementById('success').innerText = alert("¡Captcha Válido!");
        return true;
    } else {
        document.getElementById('error').innerText = alert("Inválido. Favor de escribir el captcha válido.");
        return false;
    }
};

function removeSpaces(string) {
    return string.split(' ').join('');
};