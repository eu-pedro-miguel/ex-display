/* COR */
// variável
let btn_cor = false 

// função
function cor() {
    if (btn_cor === false) {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        btn_cor = true
    } else {
        document.body.style.backgroundColor = '#efefef'
        btn_cor = false
    }
}

/* MODAL */
// quando for carregado a página, modal = exibido
window.addEventListener('load', function() {
    // código do modal
    document.querySelector("#modal").style.display = "flex";
    avis();
});

// função
function avis() {
    let selecionado = document.querySelector('input[name="jogo"]:checked')
    let avisado = document.querySelector('#aviso')

    if (!selecionado) {
        avisado.style.display = "block"
    } else {
        avisado.style.display = "none"
    }
}

document.querySelectorAll('input[name="jogo"]').forEach(radio => {
    radio.addEventListener('change', function() {
        document.querySelector('.fechar').disabled = false;
        avis();
    });
});

// função para fechar
function fecharModal() {
    document.querySelector("#modal").style.display = "none"
}

// função para abrir
function chamar_modal() {
    document.querySelector("#modal").style.display = "flex"
    avis();
}

/* CONTEÚDO */
window.addEventListener('load', function() {
    for (let i = 1; i <= 3; i++) {
        let texto = document.querySelector(`#title${i}`).textContent
        document.querySelector(`#nav-title${i}`).textContent = texto
    }
});

function imagem() {
    let selecionado = document.querySelector('input[name="jogo"]:checked')
    let aviso = document.querySelector('#aviso')

    if (!selecionado) {
        aviso.style.display = "block"
        return
    }

    aviso.style.display = "none"

    let antiga = document.querySelector('#imagem-escolhida')
    if (antiga) {
        antiga.remove()
    }

    // cria nova imagem
    let img = document.createElement("img")
    img.id = "imagem-escolhida"

    if (selecionado.value === "rf") {
        img.src = "rf.jpg"
    }

    if (selecionado.value === "rb") {
        img.src = "rb.jpg"
    }

    document.body.appendChild(img)

    fecharModal()
}