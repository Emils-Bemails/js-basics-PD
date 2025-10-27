let preces = [
    {name: "Basketball", category: "Sport", cena: 50},
    {name: "Tv", category: "Elektronikas", cena: 25},
     {name: "Phone", category: "Elektronikas", cena: 12}
];

for (let i = 0; i <preces.length; i++) {
    if (preces[i].category == "Elektronikas") {
        console.log(preces[i].name);
    }
}

function IzrekinatKopejo() {
    let sum = 0;
    for (let i = 0; i < preces.length; i++) {
    sum = sum + preces[i].cena
    };
    console.log("Kopēja Summa: " +sum + " Euro" );
 }

IzrekinatKopejo();
