function NegyzetKerulet(aOldal) {
    return aOldal * 4;
}

function NegyzetTerulet(aOldal) {
    return aOldal * aOldal;
}

function EredmenyKiirato() {
    let a = Number(prompt("Add meg a négyzet oldalának méretét!"));
    let kerulet = NegyzetKerulet(a);
    let terulet = NegyzetTerulet(a);
    document.write(`Az ${a} oldalú négyzet kerülete: ${kerulet}, területe: ${terulet}!`)
}

EredmenyKiirato();