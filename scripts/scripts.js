function rechnen(form)
{
    let gewicht = form.gewicht.value;
    if(!gewicht || gewicht < 0) return alert('Unmögliches Gewicht');
    let selgehalts = document.getElementById("selgehalt");
    if(selgehalts="1"){
        var vol = 5;
    }else if(selgehalts="2"){
        var vol = 12;
    }else if(selgehalts="3"){
        var vol = 40;
    }
    let trinkmenge = form.menge.value;
    if(!trinkmenge || trinkmenge < 0) return alert('Trinkmenge einfügen.');
    let zeit = form.zeit.value ;
    if(!zeit || zeit < 0) zeit = 0;

    let g = form.geschlecht[0].checked ? 0.7 : 0.6;
    let alkohol = trinkmenge * vol / 100 * 0.8;
    let promille = alkohol / (gewicht * g ) * 0.9 - (0.1 * zeit);

    if (promille < 0) promille = 0;
    else if (promille > 0.3) alert("Du solltest noch nicht fahren...");

    form.promille.value = Math.round(promille * 100) / 100;
}

    let modal = document.getElementById('id01');
document.getElementById("submitLogin").addEventListener("click", (e) => {
    e.preventDefault();

    if (FormLogin.inputUsername.value === "Silvan" && FormLogin.inputPassword.value === "123456") {
        window.location.href = 'second.html';
    } else {
        alert("Wrong");
    }
})




/*
$('.switch label').on('click', function(){
    var indicator = $(this).parent('.switch').find('span');
    if ( $(this).hasClass('right') ){
        $(indicator).addClass('right');
    } else {
        $(indicator).removeClass('right');
    }
})

/* Dropdown Menü mit in Json Format gespeicherten Auswahlen*/

/*
let history = [];

const addhistory = (ev)=>{
    ev.preventDefault();
    let promille =
    {
        id: Date.now(),
        Promille: document.getElementById('promille').value
    }
}
    localStorage.setItem('Meine', JSON.stringify('promille'));

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('save').addEventListener('click', addPromille)
})

let data = {};

const saveData = () => {
    const promille = document.getElementsByName('promille')[0].value;

    data['promille'] = promille;
    const jsonData = JSON.stringify(data);
    const url = 'myData.json';
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        // do something to response
        console.log(xhr.responseText);
    };
    xhr.send(jsonData);

}*/
