function UniverzalisTeszteles(feladatNeve, vizsgaltFuggveny, elvartEredmeny) {
    if (vizsgaltFuggveny == elvartEredmeny) {
        console.log("Sikeres " + feladatNeve + " teszt");
    } else {
        console.log("Sikertelen " + feladatNeve + " teszt");
    }
}

function UniverzalisTesztelesTryCatch() {
    try {
        UniverzalisTeszteles("Koordináta függvény", Koordinata(5, 0), "Az X tengelyen van");
        UniverzalisTeszteles("18 év feletti függvény", TizennyolcPlusz(15), false);
        UniverzalisTeszteles("Négyzet kerülete függvény", NegyzetKerulet(4), 16);
        UniverzalisTeszteles("Szorgalom szöveges értékelése függvény", SzorgalomSzovegesErtekeles(2), "Szorgalom: hanyag");
        UniverzalisTeszteles("Karakter mennyiség függvény", KarakterMennyiseg("A hatalom gyűrűi", "a"), "A válaszott betű (a) 2 alkalommal szerepelt a \"A hatalom gyűrűi\" szövegben!");

    }
    catch (e) {
        console.log("Függvényhiba: " + e.message);
    }

}

UniverzalisTesztelesTryCatch();
