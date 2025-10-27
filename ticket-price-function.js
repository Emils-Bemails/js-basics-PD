


function printTicketPrice (visitorAge, isStudent) {
if (visitorAge <= 6) {
    console.log("Biļetes centa:  Bez maksas")
} else if (isStudent === true) {
    console.log("Biletes cena: 5 Euro")
} else {
    console.log("Biletes maksa: 10 euro")
}
}

printTicketPrice(12, true);
printTicketPrice(35,false);