function DivContainerTeszt() {
    let tesztElem = document.querySelector("div");

    if (tesztElem.classList.contains("container")) {
        console.log("Sikeres 01. teszt");
    } else {
        console.log("Sikertelen 01. teszt");
    }
}
DivContainerTeszt();
function H1TartalomTeszt() {
    let tesztElem = document.querySelector("h1");

    if (tesztElem.innerHTML = "Tanfolyam regisztráció") {
        console.log("Sikeres 02. teszt");
    } else {
        console.log("Sikertelen 02. teszt");
    }
}
H1TartalomTeszt();
function ElsoInputTipusaTeszt() {
    let tesztElem = document.querySelector("input");

    if (tesztElem.type == "text") {
        console.log("Sikeres 03. teszt");
    } else {
        console.log("Sikertelen 03. teszt");
    }
}
ElsoInputTipusaTeszt();

function ElsoInputIdTeszt() {
    let tesztElem = document.querySelector("input");

    if (tesztElem.id == "veznev") {
        console.log("Sikeres 04. teszt");
    } else {
        console.log("Sikertelen 04. teszt");
    }
}

ElsoInputIdTeszt();

function ElsoInputClassTeszt() {
    let tesztElem = document.querySelector("input");

    if (tesztElem.classList.contains("form-control")) {
        console.log("Sikeres 05. teszt");
    } else {
        console.log("Sikertelen 05. teszt");
    }
}
ElsoInputClassTeszt();

function MasodikInputTipusaTeszt() {
    let tesztElem = document.querySelectorAll("input");
    if (tesztElem[1].type == "text") {
        console.log("Sikeres 06. teszt");
    } else {
        console.log("Sikertelen 06. teszt");
    }
}
MasodikInputTipusaTeszt();

function MasodikInputIdTeszt() {
    let tesztElem = document.querySelectorAll("input");

    if (tesztElem[1].id == "kernev") {
        console.log("Sikeres 07. teszt");
    } else {
        console.log("Sikertelen 07. teszt");
    }
}

MasodikInputIdTeszt();

function MasodikInputClassTeszt() {
    let tesztElem = document.querySelectorAll("input");

    if (tesztElem[1].classList.contains("form-control")) {
        console.log("Sikeres 08. teszt");
    } else {
        console.log("Sikertelen 08. teszt");
    }
}
MasodikInputClassTeszt();

function HarmadikInputTipusaTeszt() {
    let tesztElem = document.querySelectorAll("input");
    if (tesztElem[2].type == "text") {
        console.log("Sikeres 09. teszt");
    } else {
        console.log("Sikertelen 09. teszt");
    }
}
HarmadikInputTipusaTeszt();

function HarmadikInputIdTeszt() {
    let tesztElem = document.querySelectorAll("input");

    if (tesztElem[2].id == "fnev") {
        console.log("Sikeres 10. teszt");
    } else {
        console.log("Sikertelen 10. teszt");
    }
}

HarmadikInputIdTeszt();

function HarmadikInputClassTeszt() {
    let tesztElem = document.querySelectorAll("input");

    if (tesztElem[2].classList.contains("form-control")) {
        console.log("Sikeres 11. teszt");
    } else {
        console.log("Sikertelen 11. teszt");
    }
}
HarmadikInputClassTeszt();

function NegyedikInputTipusaTeszt() {
    let tesztElem = document.querySelectorAll("input");
    if (tesztElem[3].type == "password") {
        console.log("Sikeres 12. teszt");
    } else {
        console.log("Sikertelen 12. teszt");
    }
}
NegyedikInputTipusaTeszt();

function NegyedikInputIdTeszt() {
    let tesztElem = document.querySelectorAll("input");

    if (tesztElem[3].id == "pass1") {
        console.log("Sikeres 13. teszt");
    } else {
        console.log("Sikertelen 13. teszt");
    }
}

NegyedikInputIdTeszt();

function NegyedikInputClassTeszt() {
    let tesztElem = document.querySelectorAll("input");

    if (tesztElem[3].classList.contains("form-control")) {
        console.log("Sikeres 14. teszt");
    } else {
        console.log("Sikertelen 14. teszt");
    }
}
NegyedikInputClassTeszt();

function OtodikInputTipusaTeszt() {
    let tesztElem = document.querySelectorAll("input");
    if (tesztElem[4].type == "password") {
        console.log("Sikeres 15. teszt");
    } else {
        console.log("Sikertelen 15. teszt");
    }
}
OtodikInputTipusaTeszt();

function OtodikInputIdTeszt() {
    let tesztElem = document.querySelectorAll("input");

    if (tesztElem[4].id == "pass2") {
        console.log("Sikeres 16. teszt");
    } else {
        console.log("Sikertelen 16. teszt");
    }
}

OtodikInputIdTeszt();

function OtodikInputClassTeszt() {
    let tesztElem = document.querySelectorAll("input");

    if (tesztElem[4].classList.contains("form-control")) {
        console.log("Sikeres 17. teszt");
    } else {
        console.log("Sikertelen 17. teszt");
    }
}
OtodikInputClassTeszt();

function HatodikInputTipusaTeszt() {
    let tesztElem = document.querySelectorAll("input");
    if (tesztElem[5].type == "email") {
        console.log("Sikeres 18. teszt");
    } else {
        console.log("Sikertelen 18. teszt");
    }
}
HatodikInputTipusaTeszt();

function HatodikInputIdTeszt() {
    let tesztElem = document.querySelectorAll("input");

    if (tesztElem[5].id == "email") {
        console.log("Sikeres 19. teszt");
    } else {
        console.log("Sikertelen 19. teszt");
    }
}

HatodikInputIdTeszt();

function HatodikInputClassTeszt() {
    let tesztElem = document.querySelectorAll("input");

    if (tesztElem[5].classList.contains("form-control")) {
        console.log("Sikeres 20. teszt");
    } else {
        console.log("Sikertelen 20. teszt");
    }
}
HatodikInputClassTeszt();

function HetedikInputTipusaTeszt() {
    let tesztElem = document.querySelectorAll("input");
    if (tesztElem[6].type == "tel") {
        console.log("Sikeres 21. teszt");
    } else {
        console.log("Sikertelen 21. teszt");
    }
}
HetedikInputTipusaTeszt();

function HetedikInputIdTeszt() {
    let tesztElem = document.querySelectorAll("input");

    if (tesztElem[6].id == "tel") {
        console.log("Sikeres 22. teszt");
    } else {
        console.log("Sikertelen 22. teszt");
    }
}

HetedikInputIdTeszt();

function HetedikInputClassTeszt() {
    let tesztElem = document.querySelectorAll("input");

    if (tesztElem[6].classList.contains("form-control")) {
        console.log("Sikeres 23. teszt");
    } else {
        console.log("Sikertelen 23. teszt");
    }
}
HetedikInputClassTeszt();

function FormControlOsztalydarbszamTeszt() {
    let tesztElem = document.querySelectorAll("input");
    if (tesztElem.length == 8) {
        console.log("Sikeres 24. teszt");
    } else {
        console.log("Sikertelen 24. teszt");
    }
}

FormControlOsztalydarbszamTeszt();

function ElsoLabelTartalma() {
    let tesztElem = document.querySelectorAll("label");
    if (tesztElem[0].innerHTML == "Vezeték név:") {
        return true;
    } else {
        return false;
    }
}
function MasodikLabelTartalma() {
    let tesztElem = document.querySelectorAll("label");
    if (tesztElem[1].innerHTML == "Kereszt név:") {
        return true;
    } else {
        return false;
    }
}
function HarmadikLabelTartalma() {
    let tesztElem = document.querySelectorAll("label");
    if (tesztElem[2].innerHTML == "Felhasználói név:") {
        return true;
    } else {
        return false;
    }
}
function NegyedikLabelTartalma() {
    let tesztElem = document.querySelectorAll("label");
    if (tesztElem[3].innerHTML == "Jelszó:") {
        return true;
    } else {
        return false;
    }
}
function OtodikLabelTartalma() {
    let tesztElem = document.querySelectorAll("label");
    if (tesztElem[4].innerHTML == "Jelszó ismét:") {
        return true;
    } else {
        return false;
    }
}
function HatodikLabelTartalma() {
    let tesztElem = document.querySelectorAll("label");
    if (tesztElem[5].innerHTML == "Email cím:") {
        return true;
    } else {
        return false;
    }
}
function HetedikLabelTartalma() {
    let tesztElem = document.querySelectorAll("label");
    if (tesztElem[6].innerHTML == "Telefonszám:") {
        return true;
    } else {
        return false;
    }
}

function LabelMezokTartalmaTeszt() {
    if (ElsoLabelTartalma && MasodikLabelTartalma && HarmadikLabelTartalma && NegyedikLabelTartalma && OtodikLabelTartalma && HatodikLabelTartalma && HetedikLabelTartalma) {
        console.log("Sikeres 25. teszt");
    } else {
        console.log("Sikertelen 25. teszt");
    }
}
LabelMezokTartalmaTeszt();

function ElsoSmallTagOsztalyaiTeszt() {
    let tesztElem = document.querySelectorAll("small");
    if (tesztElem[0].classList.contains("form-text") && tesztElem[0].classList.contains("form-text")) {
        console.log("Sikeres 26. teszt");
    } else {
        console.log("Sikertelen 26. teszt");
    }
}

ElsoSmallTagOsztalyaiTeszt();

function ElsoSmallTagTartalmaTeszt() {
    let tesztElem = document.querySelectorAll("small");
    if (tesztElem[0].innerHTML == "Beceneve, mely mások számára is látható.") {
        console.log("Sikeres 27. teszt");
    } else {
        console.log("Sikertelen 27. teszt");
    }
}

ElsoSmallTagTartalmaTeszt();
function MasodikSmallTagOsztalyaiTeszt() {
    let tesztElem = document.querySelectorAll("small");
    if (tesztElem[1].classList.contains("form-text") && tesztElem[1].classList.contains("form-text")) {
        console.log("Sikeres 28. teszt");
    } else {
        console.log("Sikertelen 28. teszt");
    }
}

MasodikSmallTagOsztalyaiTeszt();

function MasodikSmallTagTartalmaTeszt() {
    let tesztElem = document.querySelectorAll("small");
    if (tesztElem[1].innerText.trim() == "Ide továbbítjuk a legfontosabb tanfolyam információkat önnek.") {
        console.log("Sikeres 29. teszt");
    } else {
        console.log("Sikertelen 29. teszt");
    }
}

MasodikSmallTagTartalmaTeszt();
function HarmadikSmallTagOsztalyaiTeszt() {
    let tesztElem = document.querySelectorAll("small");
    if (tesztElem[2].classList.contains("form-text") && tesztElem[2].classList.contains("form-text")) {
        console.log("Sikeres 30. teszt");
    } else {
        console.log("Sikertelen 30. teszt");
    }
}

HarmadikSmallTagOsztalyaiTeszt();

function HarmadikSmallTagTartalmaTeszt() {
    let tesztElem = document.querySelectorAll("small");
    if (tesztElem[2].innerHTML == "Ha szeretne akár azonnal értesülni a fontosabb hírekről") {
        console.log("Sikeres 31. teszt");
    } else {
        console.log("Sikertelen 31. teszt");
    }
}

HarmadikSmallTagTartalmaTeszt();

function SmallTagekOsztalyaiTeszt() {
    let tesztElem = document.querySelectorAll("small");
    let jelzoValtozo = true;
    for (let i = 0; i < tesztElem.length; i++) {
        if (tesztElem[i].classList.contains("form-text") && tesztElem[i].classList.contains("text-muted")) {
            continue;
        } else {
            jelzoValtozo = false;
        }
    }
    if (jelzoValtozo == true) {
        console.log("Sikeres 32. teszt");
    } else {
        console.log("Sikertelen 32. teszt");
    }
}
SmallTagekOsztalyaiTeszt();

function GombAlapertelmezettOsztalyaTeszt() {
    let tesztElem = document.querySelector("button");
    if (tesztElem.classList.contains("btn")) {
        console.log("Sikeres 33. teszt");
    } else {
        console.log("Sikertelen 33. teszt");
    }
}

GombAlapertelmezettOsztalyaTeszt();

function GombSzineTeszt() {
    let tesztElem = document.querySelector("button");
    if (tesztElem.classList.contains("btn-primary")) {
        console.log("Sikeres 34. teszt");
    } else {
        console.log("Sikertelen 34. teszt");
    }
}

GombSzineTeszt();

function GombMereteTeszt() {
    let tesztElem = document.querySelector("button");
    if (tesztElem.classList.contains("w-100")) {
        console.log("Sikeres 35. teszt");
    } else {
        console.log("Sikertelen 35. teszt");
    }
}

GombMereteTeszt();

function GombSzovegeTeszt() {
    let tesztElem = document.querySelector("button");
    if (tesztElem.innerHTML == "Regisztrálok") {
        console.log("Sikeres 36. teszt");
    } else {
        console.log("Sikertelen 36. teszt");
    }
}

GombSzovegeTeszt();

function SelectMezoErtekeinekSzamaTeszt() {
    let tesztElem = document.querySelectorAll("option");
    if (tesztElem.length == 4) {
        console.log("Sikeres 37. teszt");
    } else {
        console.log("Sikertelen 37. teszt");
    }
}

SelectMezoErtekeinekSzamaTeszt();

function SelectMezoAlapertelmezettErtekeTeszt() {
    let tesztElem = document.querySelector("option");

    if (tesztElem.textContent == "Webfejlesztő") {
        console.log("Sikeres 38. teszt");
    } else {
        console.log("Sikertelen 38. teszt");
    }
}
SelectMezoAlapertelmezettErtekeTeszt();