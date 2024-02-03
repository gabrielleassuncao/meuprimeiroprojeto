const $ = (elemento) => document.querySelector(elemento);

$("#Dados").addEventListener("click", (ev) => {
    ev.preventDefault();
    window.location.href= "./dadospessoais.html";
});

$("#Formacao").addEventListener("click", (ev) => {
    ev.preventDefault();
    window.location.href= "./formacao.html";
});

$("#Experiencias").addEventListener("click", (ev) => {
    ev.preventDefault();
    window.location.href= "./experiencias.html";
});

$("#Logout").addEventListener("click", (ev) => {
    ev.preventDefault();
    window.location.href= "./login.html";
});

$("#Confirmar").addEventListener("click", (ev) => {
    ev.preventDefault();
    window.location.href= "./curriculo.html";
});

$("#Ola").addEventListener("click", (ev) => {
    ev.preventDefault();
    window.location.href= "./formacao.html";
});

$("#Educacao").addEventListener("click", (ev) => {
    ev.preventDefault();
    window.location.href= "./experiencias.html";
});



