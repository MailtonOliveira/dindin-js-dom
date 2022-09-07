const header = document.querySelector("header");
const linkCursos = document.querySelector("#menu_opcoes nav a");
const intro = document.querySelector("#introducao");
const depo = document.querySelector(".titulo h3");
const blog = document.querySelectorAll(".titulo h3")[1];
const titulos = document.querySelectorAll(".titulo");
const posts = document.querySelector("#todos_posts");
const addIndep = document.querySelector(
    "#investimentos_poupando_independencia"
);

header.style.backgroundColor = "#2E948A";

linkCursos.setAttribute("href", "cursos.html");

intro.style.justifyContent = "center";

depo.innerHTML = "O que falam sobre nós";

blog.innerHTML = "Mais conteúdo pra você";

titulos.forEach((Element) => {
    Element.style.textTransform = "uppercase";
});

posts.setAttribute("href", "blog.html");

addIndep.innerHTML +=
    '<div id="independencia"> <img src="/imagens/independencia_financeira.png"width="180px" alt="Independência Financeira"> <h2>Independência Financeira</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p><a class="comecar_agora" href="./curso.html">começar agora</a></div>';
