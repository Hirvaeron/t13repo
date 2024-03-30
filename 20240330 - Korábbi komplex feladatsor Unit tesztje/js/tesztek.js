function NyelvEllenorzes() {
    let tesztElem = document.querySelector("html");
    if (tesztElem.lang == "hu") {
        console.log("Sikeres 01. teszt");
    } else {
        console.log("Sikertelen 01. teszt");
    }
}
NyelvEllenorzes();

function TitleTartalmaTeszt() {
    let tesztElem = document.querySelector("title");
    if (tesztElem.textContent == "Gödöllői HÉV") {
        console.log("Sikeres 02. teszt");
    } else {
        console.log("Sikertelen 02. teszt");
    }
}
TitleTartalmaTeszt();

function CSSFajlHivatkozasTeszt() {
    let tesztElem = document.querySelector("link");
    if (tesztElem.href.includes("hev.css")) {
        console.log("Sikeres 03. teszt");
    } else {
        console.log("Sikertelen 03. teszt");
    }
}
CSSFajlHivatkozasTeszt();

function PTagekSzamaTeszt() {
    let tesztElem = document.querySelectorAll("p");
    if (tesztElem.length == 6) {
        console.log("Sikeres 04. teszt");
    } else {
        console.log("Sikertelen 04. teszt");
    }
}

PTagekSzamaTeszt();

function H1TagekSzamaTeszt() {
    let tesztElem = document.querySelectorAll("h1");
    if (tesztElem.length == 2) {
        console.log("Sikeres 05. teszt");
    } else {
        console.log("Sikertelen 05. teszt");
    }
}
H1TagekSzamaTeszt();

function H1TagekTartalmaTeszt() {
    let tesztElem = document.querySelectorAll("h1");
    if (tesztElem[0].textContent == "Történet" && tesztElem[1].textContent == "Érdekességek") {
        console.log("Sikeres 06. teszt");
    } else {
        console.log("Sikertelen 06. teszt");
    }
}

H1TagekTartalmaTeszt();

function H2TagekSzamaTeszt() {
    let tesztElem = document.querySelectorAll("h2");
    if (tesztElem.length == 2) {
        console.log("Sikeres 07. teszt");
    } else {
        console.log("Sikertelen 07. teszt");
    }
}
H2TagekSzamaTeszt();

function H2TagekTartalmaTeszt() {
    let tesztElem = document.querySelectorAll("h2");
    if (tesztElem[0].textContent == "Gödöllői Királyi Váró" && tesztElem[1].innerText == "\"Csak angolosan\"") {
        console.log("Sikeres 08. teszt");
    } else {
        console.log("Sikertelen 08. teszt");
    }
}

H2TagekTartalmaTeszt();

function H3TagTartalmaTeszt() {
    let tesztElem = document.querySelector("h3");
    if (tesztElem.textContent == "Menetidő számítás") {
        console.log("Sikeres 09. teszt");
    } else {
        console.log("Sikertelen 09. teszt");
    }
}

H3TagTartalmaTeszt();

function ElsoKepForrasaTeszt() {
    let tesztElem = document.querySelectorAll("img");
    if (tesztElem[0].src.includes("m72.jpg")) {
        console.log("Sikeres 10. teszt");
    } else {
        console.log("Sikertelen 10. teszt");
    }
}

ElsoKepForrasaTeszt();

function ElsoKepAlternativSzovegTeszt() {
    let tesztElem = document.querySelectorAll("img");
    if (tesztElem[0].alt.includes("Keleti pu. végállomás")) {
        console.log("Sikeres 12. teszt");
    } else {
        console.log("Sikertelen 12. teszt");
    }
}

ElsoKepAlternativSzovegTeszt();

function ElsoKepCimTeszt() {
    let tesztElem = document.querySelectorAll("img");
    if (tesztElem[0].title.includes("Keleti pu. végállomás")) {
        console.log("Sikeres 13. teszt");
    } else {
        console.log("Sikertelen 13. teszt");
    }
}

ElsoKepCimTeszt();

function MasodikKepForrasaTeszt() {
    let tesztElem = document.querySelectorAll("img");
    if (tesztElem[1].src.includes("varo.jpg")) {
        console.log("Sikeres 14. teszt");
    } else {
        console.log("Sikertelen 14. teszt");
    }
}

MasodikKepForrasaTeszt();

function MasodikKepAlternativSzovegTeszt() {
    let tesztElem = document.querySelectorAll("img");
    if (tesztElem[1].alt.includes("Királyi váró")) {
        console.log("Sikeres 15. teszt");
    } else {
        console.log("Sikertelen 15. teszt");
    }
}

MasodikKepAlternativSzovegTeszt();

function MasodikKepCimTeszt() {
    let tesztElem = document.querySelectorAll("img");
    if (tesztElem[1].title.includes("Királyi váró")) {
        console.log("Sikeres 16. teszt");
    } else {
        console.log("Sikertelen 16. teszt");
    }
}

MasodikKepCimTeszt();

function LinkHivatkozasTeszt() {
    let tesztElem = document.querySelector("a");
    if (tesztElem.href == "http://www.mmkm.hu/") {
        console.log("Sikeres 17. teszt");
    } else {
        console.log("Sikertelen 17. teszt")
    }
}

LinkHivatkozasTeszt();

function LinkCelTeszt() {
    let tesztElem = document.querySelector("a");
    if (tesztElem.target == "_blank") {
        console.log("Sikeres 18. teszt");
    } else {
        console.log("Sikertelen 18. teszt")
    }
}

LinkCelTeszt();

function LegorduloListakSzamaTeszt() {
    let tesztElem = document.querySelectorAll("select");
    if (tesztElem.length == 2) {
        console.log("Sikeres 19. teszt");
    } else {
        console.log("Sikertelen 19. teszt");
    }
}
LegorduloListakSzamaTeszt();

function GombSzovegeTeszt() {
    let tesztElem = document.querySelector("button");
    if (tesztElem.innerHTML == "Menetidő") {
        console.log("Sikeres 20. teszt");
    } else {
        console.log("Sikertelen 20. teszt");
    }
}

GombSzovegeTeszt();