// ================================
// MENU COM EFEITO AO ROLAR
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#111";
        header.style.height = "75px";
        header.style.transition = ".3s";

    } else {

        header.style.background = "#000";
        header.style.height = "90px";

    }

});

// ================================
// ROLAGEM SUAVE
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ================================
// ANIMAÇÃO DOS CARDS
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

// ================================
// ANIMAÇÃO AO ROLAR
// ================================

const elementos = document.querySelectorAll(
    ".card, .caminhao, .galeria img, .tabela"
);

const aparecer = () => {

    elementos.forEach(el => {

        const topo = el.getBoundingClientRect().top;

        if (topo < window.innerHeight - 80) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

};

elementos.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".8s";

});

window.addEventListener("scroll", aparecer);

aparecer();

// ================================
// LIGHTBOX DA GALERIA
// ================================

const imagens = document.querySelectorAll(".grid-galeria img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.style.cssText = `
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.9);
display:none;
justify-content:center;
align-items:center;
z-index:9999;
cursor:pointer;
`;

document.body.appendChild(lightbox);

const foto = document.createElement("img");

foto.style.maxWidth = "90%";
foto.style.maxHeight = "90%";
foto.style.borderRadius = "12px";

lightbox.appendChild(foto);

imagens.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        foto.src = img.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// ================================
// BOTÃO VOLTAR AO TOPO
// ================================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.style.cssText = `
position:fixed;
right:25px;
bottom:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#00A3E0;
color:#fff;
font-size:26px;
cursor:pointer;
display:none;
box-shadow:0 8px 20px rgba(0,0,0,.3);
z-index:999;
`;

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

   // ================================
// MODAL FICHA TÉCNICA
// ================================

const modal = document.getElementById("modal");
const fechar = document.getElementById("fecharModal");

const titulo = document.getElementById("modalTitulo");
const descricao = document.getElementById("modalDescricao");
const imagem = document.getElementById("modalImagem");

function abrirFicha(modelo){

    modal.style.display="flex";

    if(modelo==="actros"){

        titulo.innerHTML="Mercedes-Benz Actros";

        imagem.src="img/actros.jpg";

        descricao.innerHTML=`

        <h3>Especificações Técnicas</h3>

        <table>

            <tr><td>Categoria</td><td>Extrapesado</td></tr>

            <tr><td>Tração</td><td>4x2 • 6x2 • 6x4</td></tr>

            <tr><td>Motor</td><td>Mercedes-Benz OM</td></tr>

            <tr><td>Combustível</td><td>Diesel S10</td></tr>

            <tr><td>Peso Líquido</td><td>Conforme versão</td></tr>

            <tr><td>Tara</td><td>Conforme versão</td></tr>

            <tr><td>PBT</td><td>Conforme versão</td></tr>

            <tr><td>PBTC</td><td>Conforme versão</td></tr>

            <tr><td>Carga Útil</td><td>Conforme versão</td></tr>

            <tr><td>Consumo Médio</td><td>Conforme versão</td></tr>

            <tr><td>Aplicações</td><td>Rodoviário, Logística, Agronegócio, Contêiner, Bitrem e Rodotrem</td></tr>

        </table>

        `;

    }

}

fechar.onclick=()=>modal.style.display="none";

window.onclick=(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

};