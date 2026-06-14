// Seleção dos elementos do DOM para a calculadora interativa
const slider = document.getElementById('tech-range');
const techVal = document.getElementById('tech-val');
const aguaVal = document.getElementById('agua-val');
const prodVal = document.getElementById('prod-val');

// Evento que escuta as mudanças no controle deslizante (Slider)
slider.addEventListener('input', (e) => {
    const valor = e.target.value;
    
    // Atualiza a porcentagem de tecnologia exibida na tela
    techVal.innerText = valor + '%';
    
    // Lógica matemática fictícia que simula o equilíbrio sustentável
    // Quanto maior a tecnologia, maior a economia e produção
    const economiaAgua = Math.round(valor * 0.6);
    const aumentoProd = Math.round(valor * 0.35);
    
    // Injeta os novos valores simulados nas tags corretas
    aguaVal.innerText = economiaAgua + '%';
    prodVal.innerText = aumentoProd + '%';
});