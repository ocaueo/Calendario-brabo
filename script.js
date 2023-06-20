

let diasDosMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,];

for(let i = 1; i <= diasDosMeses[0]; i++){
    dias.innerHTML += `<option value="${i}">${i}</option>`;
}

meses.onchange =function() {
    dias.innerHTML = '';
    for(let i = 1; i <= diasDosMeses[meses.value]; i++) {
        dias.innerHTML += `<option value="${i}">${i}</option> `
    }
}

let nomeDosMeses = [
`Janeiro`,
`Fevereiro`,
`Março`,
`Abril`,
`Maio`,
`Junho`,
`Julho`,
`Agosto`,
`Setembro`,
`Outubro`,
`Novembro`,
`Dezembro`,  
];


for(let i = 0; i < 12; i++){
    meses.innerHTML += `<option value="${i}">${nomeDosMeses[i]}</option>`;
}

for(let i = 2023; i >= 1923; i--){
    anos.innerHTML += `<option value="${i}">${i}</option>`;
}


