function mindenCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = true;
    }
}

function mindenUnCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = false;
    }
}


kombinaltCheck.addEventListener("click", KombinaltCheckolas)

function KombinaltCheckolas() {
    let gombTartalma = document.querySelector("#kombinaltCheck");
    if (gombTartalma.textContent != "Mindent deaktivál") {
        gombTartalma.classList.remove("active");
        gombTartalma.textContent = "Mindent deaktivál";
        mindenCheck();
    } else {
        gombTartalma.classList.add("active");
        gombTartalma.textContent = "Mindent aktivál";
        mindenUnCheck();
    }
}

//Szorgalmi: Próbáld meg egy gombra rakni a két funkciót, illetve megoldani hogy a kijelöléseket megfordítsa.

function SavozasBe() {
    let kivalasztottTabla = document.querySelector("table");

    kivalasztottTabla.classList.add("table-striped");
}

function SavozasKi() {
    let kivalasztottTabla = document.querySelector("table");

    kivalasztottTabla.classList.remove("table-striped");
}


kombinaltCsikozas.addEventListener("click", KombinaltCsikozas);
function KombinaltCsikozas() {
    let gombTartalma = document.querySelector("#kombinaltCsikozas");
    if (gombTartalma.textContent != "Csíkozást hozzáad") {
        gombTartalma.classList.remove("active");
        gombTartalma.textContent = "Csíkozást hozzáad";
        SavozasKi();
    } else {
        gombTartalma.classList.add("active");
        gombTartalma.textContent = "Csíkozást eltávolít";
        SavozasBe();
    }
}

//Szorgalmi: Sávozás egy gombon

function DarkMode() {
    let kivalasztottTabla = document.querySelector("table");
    kivalasztottTabla.classList.remove("table-light");
    kivalasztottTabla.classList.add("table-dark");
}


function LightMode() {
    let kivalasztottTabla = document.querySelector("table");
    kivalasztottTabla.classList.remove("table-dark");
    kivalasztottTabla.classList.add("table-light");
}

temaValaszto.addEventListener("click", TemaValtozas);

function TemaValtozas() {
    let gombTartalma = document.querySelector("#temaValaszto");
    if (gombTartalma.textContent != "Light Mode") {
        gombTartalma.classList.remove("btn-dark");
        gombTartalma.classList.add("btn-light");
        gombTartalma.textContent = "Light Mode";
        DarkMode();
    } else {
        gombTartalma.classList.remove("btn-light");
        gombTartalma.classList.add("btn-dark");
        gombTartalma.textContent = "Dark Mode";
        LightMode();
    }
}
//Szorgalmi: Darkmode / Lightmode egy gombon

tesztSor.addEventListener("click", TesztSorBeszuras);

function TesztSorBeszuras() {
    let kivalasztottTabla = document.querySelector("table");

    let sor = kivalasztottTabla.insertRow();
    let vezNevCella = sor.insertCell();
    let kerNevCella = sor.insertCell();
    let emailCella = sor.insertCell();
    let telefonCella = sor.insertCell();
    let beosztasCella = sor.insertCell();
    let aktivalCella = sor.insertCell();

    vezNevCella.innerHTML = "teszt";
    kerNevCella.innerHTML = "teszt";
    emailCella.innerHTML = "teszt";
    telefonCella.innerHTML = "teszt";
    beosztasCella.innerHTML = "teszt";
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
}


function UjSorBeszuras() {
    let kivalasztottTabla = document.querySelector("table");//kiválasztom a táblát
    let sor = kivalasztottTabla.insertRow();//beleillesztek egy sort a táblába
    let vezNevCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let kerNevCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let emailCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let telefonCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let beosztasCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let aktivalCella = sor.insertCell();//Beszúrom a szükséges cellákat

    vezNevCella.innerHTML = document.querySelector("#vezNev").value;
    kerNevCella.innerHTML = document.querySelector("#kerNev").value;
    emailCella.innerHTML = document.querySelector("#email").value;
    telefonCella.innerHTML = document.querySelector("#tel").value;
    beosztasCella.innerHTML = document.querySelector("#beosztas").value;
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";
}


//Szorgalmi: Próbálj validációt készíteni, REGEX
/*
function ValamiCheck(){
    let Minta="regex_kód";
    let ertek=document.querySelector("#ElemNeve").value;
    if(Minta.test(ertek)){
        return true;
    }
    return false;
}
*/

function VezetekNevEllenorzes() {
    let vezNevPattern = /^[A-ZÁÉÍÓÖŐÚÜŰ]{1}[a-záéíóöőúüű]{1,}/;
    let vezNevErtek = document.querySelector("#vezNev").value;
    if (vezNevPattern.test(vezNevErtek)) {
        return true;
    }
    return false;
}
function KeresztNevEllenorzes() {
    let kerNevPattern = /^[A-ZÁÉÍÓÖŐÚÜŰ]{1}[a-záéíóöőúüű]{1,}/;
    let kerNevErtek = document.querySelector("#kerNev").value;
    if (kerNevPattern.test(kerNevErtek)) {
        return true;
    }
    return false;
}
function TelefonszamEllenorzes() {
    let telPattern = /^([0-9]{3})-([0-9]{4})/;
    let telErtek = document.querySelector("#tel").value;
    if (telPattern.test(telErtek)) {
        return true;
    }
    return false;
}

function EmailEllenorzes() {
    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    let emailErtek = document.querySelector("#email").value;
    if (emailPattern.test(emailErtek)) {
        return true;
    }
    return false;
}

function Validalas() {
    let vezNevEredmeny = VezetekNevEllenorzes();
    let kerNevEredmeny = KeresztNevEllenorzes();
    let telEredmeny = TelefonszamEllenorzes();
    let emailEredmeny = EmailEllenorzes();

    if (vezNevEredmeny && kerNevEredmeny && telEredmeny && emailEredmeny) {
        return true;
    } else {
        return false;
    }
}


ujElemFeltolto.addEventListener("click", function (event) {
    event.preventDefault();
    if (Validalas()) {
        UjSorBeszuras();
    } else {
        alert("Az űrlap adatok nem megfelelőek");
    }
});



