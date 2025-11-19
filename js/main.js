// ==========================
// HOTSPOTS (Instruction-side)
// ==========================
const hotspotLort = document.querySelector("#hotspotLort");
if (hotspotLort) {
  hotspotLort.addEventListener("mouseover", mouseOverHead);
  hotspotLort.addEventListener("mouseout", mouseoutHead);
  hotspotLort.addEventListener("click", clickHead);
}

function mouseOverHead() {
  console.log("mouseOverHead");
  document.querySelector("#hotspotLort").style.fill = "#8b6b4a";
}

function mouseoutHead() {
  console.log("mouseouthead");
  document.querySelector("#hotspotLort").style.fill = "var(--color-head-bg)";
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

const hotspotSnoerre = document.querySelector("#hotspotSnoerrebaand");
if (hotspotSnoerre) {
  hotspotSnoerre.addEventListener("mouseover", mouseOverSnoerre);
  hotspotSnoerre.addEventListener("mouseout", mouseoutSnoerre);
  hotspotSnoerre.addEventListener("click", clickSnoerre);
}

function mouseOverSnoerre() {
  console.log("mouseOverSnoerre");
  document.querySelector("#hotspotSnoerrebaand").style.fill = "#8b6b4a";
}

function mouseoutSnoerre() {
  console.log("mouseoutSnoerre");
  document.querySelector("#hotspotSnoerrebaand").style.fill =
    "var(--color-head-bg)";
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

const hotspotSaal = document.querySelector("#hotspotSaal");
if (hotspotSaal) {
  hotspotSaal.addEventListener("mouseover", mouseOverSaal);
  hotspotSaal.addEventListener("mouseout", mouseoutSaal);
  hotspotSaal.addEventListener("click", clickSaal);
}

function mouseOverSaal() {
  console.log("mouseOverSaal");
  document.querySelector("#hotspotSaal").style.fill = "#8b6b4a";
}

function mouseoutSaal() {
  console.log("mouseoutSaal");
  document.querySelector("#hotspotSaal").style.fill = "var(--color-head-bg)";
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

// ==========================
// REGISTER-SIDE (Summary)
// ==========================
(() => {
  if (document.body?.id !== "register") return;

  const form = document.getElementById("webform");
  if (!form) return;

  const $ = (sel) => document.querySelector(sel);
  const set = (sel, v) => {
    const el = $(sel);
    if (!el) return;
    el.textContent = v && String(v).trim() ? v : "–";
  };
  const get = (name) => form.elements[name]?.value || "";

  const readUnderlag = () => form.elements["underlag"]?.value || "–";
  const readStatus = () =>
    Array.from(form.querySelectorAll('input[name="status"]:checked'))
      .map((c) => c.value)
      .join(", ") || "–";

  function updateSummary() {
    set("#sum-navn", get("name"));
    set("#sum-mail", get("email"));
    set("#sum-tlf", get("phone"));
    set("#sum-underlag", readUnderlag());
    set("#sum-sko", get("sko"));
    set("#sum-status", readStatus());
    set("#sum-beskrivelse", document.getElementById("sym-desc")?.value || "");
    set(
      "#sum-omfang",
      `${document.getElementById("intensity")?.value || "1"}/5`
    );
  }

  form.addEventListener("input", updateSummary);
  form.addEventListener("change", updateSummary);
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop reload
    form.reset(); // nulstil alle felter
    updateSummary(); // opdater summary til default
  });

  form.addEventListener("reset", () => setTimeout(updateSummary, 0));

  updateSummary();
})();
