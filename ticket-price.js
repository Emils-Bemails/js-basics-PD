let visitorAge = 5;
let isStudent = true;

function ticketPrice() {
if (visitorAge <= 6) {
    console.log("Biļetes centa:  Bez maksas")
} else if (isStudent === true) {
    console.log("Biletes cena: 5 Euro")
} else {
    console.log("Biletes maksa: 10 euro")
}
}

ticketPrice() 