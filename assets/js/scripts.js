const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');
let numero = document.querySelector('.number');

form.addEventListener('submit', event => {
    event.preventDefault();
    resultado.innerHTML = '';
    tabuada(numero);
});

const tabuada = (numero) => {

    numero = Number(numero.value);
    
    if (isNaN(numero)) {
        resultado.innerHTML = '<p>Informe um valor válido. Tente Novamente!</p>';
        
    } else {
        calcular(numero, 'soma');
        calcular(numero, 'subtracao');
        calcular(numero, 'multiplicacao');
        calcular(numero, 'divisao');
    }
}

const calcular = (numero, tipo) => {
    let soma,subtracao,multiplicacao,divisao = false;
    const secao = document.createElement('div');
    secao.classList.add('secao');

    let valores = '';
    switch (tipo) {
        case 'soma':
            soma = true;
            secao.classList.add('soma');                    
            break;
        case 'subtracao':
            subtracao = true;
            secao.classList.add('subtracao');  
            break;
        case 'multiplicacao':
            multiplicacao = true;
            secao.classList.add('multiplicacao');  
            break;
        case 'divisao' :
            divisao = true;
            secao.classList.add('divisao'); 
            break;
    }

    for (let i = 1; i < 11; i++) {
        if (soma) {
            if (Number.isInteger(numero)) {
                valores += `<p> ${numero} + ${i} = ${numero+i}</p>`;
            } else {
                valores += `<p> ${numero} + ${i} = ${(numero+i).toFixed(2)}</p>`;
            }
        }
        if (subtracao) {
            if (Number.isInteger(numero)) {
                valores += `<p> ${numero} - ${i} = ${numero-i}</p>`;
            } else {
                valores += `<p> ${numero} - ${i} = ${(numero-i).toFixed(2)}</p>`;
            }
        }

        if (multiplicacao) {
            if (Number.isInteger(numero)) {
                valores += `<p> ${numero} x ${i} = ${numero*i}</p> `;
            } else {
                valores += `<p> ${numero} x ${i} = ${(numero*i).toFixed(2)}</p> `;
            }
        }

        if (divisao) {
            if (Number.isInteger(numero)) {
                valores += `<p> ${numero} ÷ ${i} = ${(numero/i).toFixed(2)}</p>`;
            } else {
                valores += `<p> ${numero} ÷ ${i} = ${(numero/i).toFixed(2)}</p>`;
            }
        }

    }

    secao.innerHTML = valores;
    resultado.appendChild(secao);
}
