function RedValueChange() {
    let newValue = document.querySelector("#redSet").value;
    document.querySelector("#redValue").innerHTML = newValue;
}

function GreenValueChange() {
    let newValue = document.querySelector("#greenSet").value;
    document.querySelector("#greenValue").innerHTML = newValue;
}

function BlueValueChange() {
    let newValue = document.querySelector("#blueSet").value;
    document.querySelector("#blueValue").innerHTML = newValue;
}

function SzinKinyero() {
    let r = document.querySelector("#redValue").innerHTML;
    let g = document.querySelector("#greenValue").innerHTML;
    let b = document.querySelector("#blueValue").innerHTML;
    let kinyertSzin = { red: r, green: g, blue: b };
    return kinyertSzin;
}

function SzinKevero(szin) {
    let setColor = "rgb(" + szin.red + "," + szin.green + "," + szin.blue + ")";
    document.body.style.backgroundColor = setColor;
}

function SzinkodRGB(szin) {
    document.querySelector("#RGBkodMegjelenito").innerHTML = "rgb(" + szin.red + "," + szin.green + "," + szin.blue + ");";
}

function LathatoBetuszin(szin) {
    if (szin.red > 125 || szin.green > 125 || szin.blue > 125) {
        document.body.style.color = "black";
        document.querySelector("#keveroFelulet").style.borderColor = "black";
        document.querySelector("#keveroFelulet").style.boxShadow = "5px 5px 10px black";
    } else {
        document.body.style.color = "white";
        document.querySelector("#keveroFelulet").style.borderColor = "white";
        document.querySelector("#keveroFelulet").style.boxShadow = "5px 5px 10px white";
    }
}

let rangeElemek = document.querySelectorAll(".colors");
rangeElemek.forEach(function (elem) {
    elem.addEventListener("input", () => { ColorValueChange(RedValueChange(), GreenValueChange(), BlueValueChange()) })
});

function ColorValueChange(red, green, blue) {
    let aktSzin = SzinKinyero();
    SzinKevero(aktSzin);
    SzinkodRGB(aktSzin);
    SzinkodHEX(aktSzin);
    LathatoBetuszin(aktSzin);
}

function rgbToHex(red, green, blue) {
    return "#" + componentToHex(parseInt(red)) + componentToHex(parseInt(green)) + componentToHex(parseInt(blue));
}

function componentToHex(actColor) {
    let hex = actColor.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function SzinkodHEX(szin) {
    let HEXSzin = rgbToHex(szin.red, szin.green, szin.blue);
    document.querySelector("#HEXkodMegjelenito").innerHTML = HEXSzin + ";";
}