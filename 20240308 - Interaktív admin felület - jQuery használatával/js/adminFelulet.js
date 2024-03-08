$(document).ready(function () {
    $("#tesztSor").click(function () {
        let kivalasztottTabla = $("table");

        let sor = kivalasztottTabla.append("<tr></tr>").find("tr:last");
        for (let i = 0; i < 5; i++) {
            sor.append("<td>teszt</td>");
        }
        sor.append("<td><input type='checkbox' class='allapot'></td>")
    })

    $("#kombinaltCheck").click(function () {
        if ($(".allapot").prop("checked") == false) {
            $(".allapot").prop("checked", true);
            $("#kombinaltCheck").text("Mindent deaktivál").removeClass("btn-success").addClass("btn-danger");
        } else {
            $(".allapot").prop("checked", false);
            $("#kombinaltCheck").text("Mindent aktivál").removeClass("btn-danger").addClass("btn-success");
        }

    });

    $("#kombinaltCsikozas").click(function () {
        $("table").toggleClass("table-striped");
        if ($("#kombinaltCsikozas").text() != "Csíkozást hozzáad") {
            $("#kombinaltCsikozas").text("Csíkozást hozzáad");
        } else {
            $("#kombinaltCsikozas").text("Csíkozást eltávolít");
        }
    });

    $("#temaValaszto").click(function () {
        $("table").toggleClass("table-dark");
        if ($("#temaValaszto").text() != "Light Mode") {
            $("#temaValaszto").text("Light Mode").removeClass("btn-dark").addClass("btn-light");
        } else {
            $("#temaValaszto").text("Dark Mode").removeClass("btn-light").addClass("btn-dark");
        }
    });

    $("#tablazatAnimacio").click(function () {
        $("table").fadeToggle(1000);
        if ($("#tablazatAnimacio").text() == "Táblázat elrejtése") {
            $("#tablazatAnimacio").text("Táblázat megjelenítése");
        } else {
            $("#tablazatAnimacio").text("Táblázat elrejtése");
        }
    });
});




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
