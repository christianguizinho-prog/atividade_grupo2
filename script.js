/* =========================
ARQUIVO: script.js
========================= */

/* RELÓGIO FUTURISTA */

function atualizarRelogio() {

    const agora = new Date();

    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    const tempo = `${horas}:${minutos}:${segundos}`;

    document.querySelectorAll('.relogio').forEach(rel => {

        rel.innerHTML = `
            <span class="clock-text">${tempo}</span>
        `;
    });
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

/* MENU ATIVO */

function marcarLinkAtivo() {

    const links = document.querySelectorAll('.nav-link');

    const path =
    window.location.pathname.split('/').pop()
    || 'inicio.html';

    links.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });
}

/* ANIMAÇÃO DOS CARDS */

function animarAoScroll() {

    const cards =
    document.querySelectorAll('.feature-card');

    const observer =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = '1';

                entry.target.style.transform =
                'translateY(0)';
            }
        });

    }, { threshold:0.2 });

    cards.forEach(card => {

        card.style.opacity = '0';

        card.style.transform =
        'translateY(40px)';

        card.style.transition =
        'all 0.8s ease';

        observer.observe(card);
    });
}

/* PARTÍCULAS */

function criarParticulas() {

    const hero =
    document.querySelector('.hero-bg');

    if(!hero) return;

    for(let i = 0; i < 80; i++){

        const particula =
        document.createElement('div');

        particula.className = 'particula';

        particula.style.position = 'absolute';

        particula.style.width =
        Math.random() * 4 + 'px';

        particula.style.height =
        particula.style.width;

        particula.style.background =
        '#00f5ff';

        particula.style.borderRadius =
        '50%';

        particula.style.left =
        Math.random() * 100 + '%';

        particula.style.top =
        Math.random() * 100 + '%';

        particula.style.opacity =
        Math.random();

        particula.style.animation =
        `flutuar ${
            Math.random() * 10 + 10
        }s linear infinite`;

        hero.appendChild(particula);
    }
}

/* ANIMAÇÃO PARTÍCULAS */

const style = document.createElement('style');

style.innerHTML = `

@keyframes flutuar{

    from{
        transform:
        translateY(0px)
        rotate(0deg);
    }

    to{
        transform:
        translateY(-1000px)
        rotate(720deg);
    }
}

.particula{
    pointer-events:none;
}
`;

document.head.appendChild(style);

/* =========================
AVALIAÇÕES
========================= */

function enviarAvaliacao(form){

    /* PEGAR VALORES */

    const nome =
    document.getElementById('nome');

    const empresa =
    document.getElementById('empresa');

    const nota =
    document.getElementById('nota');

    const mensagem =
    document.getElementById('mensagem');

    /* VALIDAR CAMPOS */

    if(
        nome.value.trim() === '' ||
        empresa.value.trim() === '' ||
        nota.value.trim() === '' ||
        mensagem.value.trim() === ''
    ){

        alert(
            '⚠️ Preencha todos os campos!'
        );

        return false;
    }

    /* CONTAINER DAS AVALIAÇÕES */

    const container =
    document.getElementById('avaliacoes');

    /* CRIAR CARD */

    const card =
    document.createElement('div');

    /* CLASSE */

    card.className =
    'review-card feature-card';

    /* HTML DO CARD */

    card.innerHTML = `

        <div class="stars">

            ${nota.value}

        </div>

        <h3>

            ${empresa.value}

        </h3>

        <p>

            "${mensagem.value}"

        </p>

        <span class="review-user">

            — ${nome.value}

        </span>

    `;

    /* ANIMAÇÃO INICIAL */

    card.style.opacity = '0';

    card.style.transform =
    'translateY(40px)';

    /* ADICIONAR CARD */

    container.prepend(card);

    /* ANIMAÇÃO */

    setTimeout(() => {

        card.style.transition =
        'all 0.6s ease';

        card.style.opacity = '1';

        card.style.transform =
        'translateY(0)';

    }, 100);

    /* ALERTA */

    alert(
        '✅ Avaliação enviada com sucesso!'
    );

    /* LIMPAR FORM */

    form.reset();

    /* IMPEDIR RELOAD */

    return false;
}

/* SMOOTH SCROLL */

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
    'click',

    function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute('href')
        );

        if(target){

            target.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});

/* INICIALIZAÇÃO */

window.onload = () => {

    atualizarRelogio();

    marcarLinkAtivo();

    animarAoScroll();

    criarParticulas();

    console.log(
        '%c✅ InnoWave carregado!',
        'color:#00f5ff; font-size:18px;'
    );
};