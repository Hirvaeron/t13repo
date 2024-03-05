function AktualisHossz() {
    let inputMezoTartalma = document.querySelector("#aktualisHossz").value;
    let eredmeny = document.querySelector("#aktualisHosszEredmeny");
    eredmeny.innerHTML = `Bevitt karakterek száma: ${inputMezoTartalma.length}`;
}

kirajzoloGomb.addEventListener("click", Kirajzolo);
function Kirajzolo() {
    let negyzet = document.querySelector("#negyzet")
    let xKoordinata = document.querySelector("#xPozicio").value;
    let yKoordinata = document.querySelector("#yPozicio").value;

    negyzet.style.top = yKoordinata + "px";
    negyzet.style.right = xKoordinata + "px";
}

function Bujocska() {
    let cica = document.querySelector("#rejtozkodoCica");
    if (cica.classList.contains("halvanyodas")) {
        cica.classList.remove("halvanyodas")
    } else {
        cica.classList.add("halvanyodas");
    }
}

function Ellenorzes() {
    let email1 = document.querySelector("#emailEloszor").value;
    let email2 = document.querySelector("#emailMasodszor").value;
    let eredmeny = document.querySelector("#muveletEredmenye");
    let minta = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i;
    if (email1 == "" && email2 == "") {
        eredmeny.style.backgroundColor = "red";
        eredmeny.style.color = "white";
        eredmeny.innerHTML = "<p>Nincs kitöltve egyik mező sem!</p>";
    } else if (email1 == "") {
        eredmeny.style.backgroundColor = "red";
        eredmeny.style.color = "white";
        eredmeny.innerHTML = "<p>Nincs kitöltve az e-mail mező!</p>";
    } else if (email2 == "") {
        eredmeny.style.backgroundColor = "red";
        eredmeny.style.color = "white";
        eredmeny.innerHTML = "<p>Nincs kitöltve az e-mail megerősítése mező!</p>";
    } else if (!minta.test(email1)) {
        eredmeny.style.backgroundColor = "red";
        eredmeny.style.color = "white";
        eredmeny.innerHTML = "<p>Nem megfelelő az e-mail cím formátuma!</p>";
    } else if (email1 != email2) {
        eredmeny.style.backgroundColor = "red";
        eredmeny.style.color = "white";
        eredmeny.innerHTML = "<p>A két mező tartalma nem egyezik</p>";
    } else {
        eredmeny.style.backgroundColor = "green";
        eredmeny.style.color = "white";
        eredmeny.innerHTML = "<p>Az adatok rögzítése sikeresk</p>";
    }
}