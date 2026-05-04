function atualizarRelogio() {
    const agora = new Date();

    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();

    const tempo = `${horas}:${minutos}:${segundos}`;
    const data = `${dia}/${mes}/${ano}`;

    document.querySelectorAll('.relogio').forEach(rel => {
        rel.innerHTML = `${tempo} <br> <small>${data}</small>`;
    });
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);

// Menu ativo
function marcarLinkAtivo() {
    const links = document.querySelectorAll('.nav-link');
    const path = window.location.pathname.split('/').pop() || 'index.html';
    
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });
}

// Animações de scroll
function animarAoScroll() {
    const cards = document.querySelectorAll('.feature-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Partículas no hero (simples)
function criarParticulas() {
    const hero = document.querySelector('.hero-bg');
    if (!hero) return;
    
    for (let i = 0; i < 60; i++) {
        const particula = document.createElement('div');
        particula.className = 'particula';
        particula.style.position = 'absolute';
        particula.style.width = Math.random() * 4 + 'px';
        particula.style.height = particula.style.width;
        particula.style.background = 'rgba(0, 245, 255, 0.6)';
        particula.style.borderRadius = '50%';
        particula.style.left = Math.random() * 100 + '%';
        particula.style.top = Math.random() * 100 + '%';
        particula.style.opacity = Math.random() * 0.6 + 0.2;
        particula.style.animation = `flutuar ${Math.random() * 15 + 10}s linear infinite`;
        hero.appendChild(particula);
    }
}

// Adicionar CSS das partículas
const style = document.createElement('style');
style.innerHTML = `
    @keyframes flutuar {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(-800px) rotate(720deg); }
    }
    .particula {
        pointer-events: none;
    }
`;
document.head.appendChild(style);

// Formulário (usado em contato.html)
function validarFormulario(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let valido = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.border = '2px solid #ff3366';
            valido = false;
        } else {
            input.style.border = '1px solid #00f5ff';
        }
    });
    return valido;
}

// Inicialização
window.onload = function() {
    atualizarRelogio();
    setInterval(atualizarRelogio, 1000);
    
    marcarLinkAtivo();
    animarAoScroll();
    criarParticulas();
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    console.log('%c✅ InnoWave Site carregado com sucesso!', 'color: #00f5ff; font-size: 16px;');
};