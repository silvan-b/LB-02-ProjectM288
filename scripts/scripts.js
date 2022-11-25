function rechnen(form)
{
    let gewicht = form.gewicht.value;
    if(!gewicht || gewicht < 0) return alert('Unmögliches Gewicht');
    let vol = form.alkohol.value;
    if(!vol || vol < 0) return alert('Alkoholgehalt');
    let trinkmenge = form.menge.value;
    if(!trinkmenge || trinkmenge < 0) return alert('Trinkmenge');
    let zeit = form.zeit.value ;
    if(!zeit || zeit < 0) zeit = 0;
    let g = form.geschlecht[0].checked ? 0.7 : 0.6;
    let alkohol = trinkmenge * vol / 100 * 0.8;
    let promille = alkohol / (gewicht * g ) * 0.9 - (0.1 * zeit);

    if (promille < 0) promille = 0;
    else if (promille > 0.3) alert("Das ist wohl zu viel! :D");

    form.promille.value = Math.round(promille * 100) / 100;
}

    let modal = document.getElementById('id01');{

}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
}
}