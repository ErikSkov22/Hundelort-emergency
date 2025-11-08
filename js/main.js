document
  .querySelector("#hotspotLort")
  .addEventListener("mouseover", mouseOverHead);
document
  .querySelector("#hotspotLort")
  .addEventListener("mouseout", mouseoutHead);
document.querySelector("#hotspotLort").addEventListener("click", clickHead);

function mouseOverHead() {
  console.log("mouseOverHead");
  document.querySelector("#hotspotLort").style.fill = "var(--color-head-bg)";
}

function mouseoutHead() {
  console.log("mouseouthead");
  document.querySelector("#hotspotLort").style.fill = "red";
}

function clickHead() {
  console.log("clickHead");
  document.querySelector(".info-text > h2").textContent =
    "Trin 2 - Fjern det værste";
  document.querySelector(".info-text > article > p").textContent =
    "Nu handler det om skadesbegrænsning. Brug hvad du har ved hånden - en pind, et stykke papir eller en serviet - og fjern så meget som muligt uden at trykke det længere ind i sålen.";
  document.querySelector("#efficiency").innerHTML = `<h3>Skrap forsigtigt:</h3>
    <p> Arbejd langsomt og metodisk. Det vigtigste er, at du får det meste væk uden at sprede det.</p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Hold afstand:</h3>
    <p> Undgå at røre skoen direkte. Brug redskaber - og kast dem væk bagefter. Det er en del af offerprocessen.</p>`;
}

document
  .querySelector("#hotspotSnoerrebaand")
  .addEventListener("mouseover", mouseOverSnoerre);
document
  .querySelector("#hotspotSnoerrebaand")
  .addEventListener("mouseout", mouseoutSnoerre);
document
  .querySelector("#hotspotSnoerrebaand")
  .addEventListener("click", clickSnoerre);

function mouseOverSnoerre() {
  console.log("mouseOverSnoerre");
  document.querySelector("#hotspotSnoerrebaand").style.fill =
    "var(--color-head-bg)";
}

function mouseoutSnoerre() {
  console.log("mouseoutSnoerre");
  document.querySelector("#hotspotSnoerrebaand").style.fill = "red";
}

function clickSnoerre() {
  console.log("clickSnoerre");
  document.querySelector(".info-text > h2").textContent =
    "Trin 1 - Bevar roen og fjern skoen";
  document.querySelector(".info-text > article > p").textContent =
    "Det første skridt er at undgå panik. Tag skoen forsigtigt af et sikkert sted - helst udenfor - så du ikke spreder uheldet til resten af verden. Katastrofen kan stadig afværges.";
  document.querySelector("#efficiency").innerHTML = `<h3>Hurtig indsats:</h3>
    <p> Stil dig stabilt, find balancen, og undgå at træde videre i uheldet. Hvert skridt tæller.</p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Fjern skoen:</h3>
    <p> Tag skoen af og placer den et sted, hvor du kan arbejde roligt - fx ved et afløb, en græsplæne eller en vask.</p>`;
}

document
  .querySelector("#hotspotSaal")
  .addEventListener("mouseover", mouseOverSaal);
document
  .querySelector("#hotspotSaal")
  .addEventListener("mouseout", mouseoutSaal);
document.querySelector("#hotspotSaal").addEventListener("click", clickSaal);

function mouseOverSaal() {
  console.log("mouseOverSaal");
  document.querySelector("#hotspotSaal").style.fill = "var(--color-head-bg)";
}

function mouseoutSaal() {
  console.log("mouseoutSaal");
  document.querySelector("#hotspotSaal").style.fill = "red";
}

function clickSaal() {
  console.log("clickSaal");
  document.querySelector(".info-text > h2").textContent =
    "Trin 3 - Rens, skyl og red skoen";
  document.querySelector(".info-text > article > p").textContent =
    "Når skaden er fjernet, er det tid til at rense og genoplive skoen. En god vask kan gøre underværker - både for hygiejnen og din mentale tilstand.";
  document.querySelector("#efficiency").innerHTML = `<h3>Vask grundigt:</h3>
    <p> Brug vand og sæbe, og skrub sålen med en børste. Vær særligt opmærksom på riller og mønstre.</p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Afslut med stil:</h3>
    <p> Lad skoen tørre, og afslut med lidt duftspray eller desinfektion. En ren sko er et symbol på styrke og fornyet håb.</p>`;
}
