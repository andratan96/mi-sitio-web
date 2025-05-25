
//Cambio de inglés a español
function cambio1() {
    let lang = document.getElementById("lenguaje1").value;
    localStorage.setItem("select", lang);
    if(lang=="es"){
        window.location.href="index_es.html"
    }
}

//Cambio de español a inglés
function cambio2() {
    let lang = document.getElementById("lenguaje1").value;
    localStorage.setItem("select", lang);
    if(lang=="en"){
        window.location.href="index_en.html"
    }
}