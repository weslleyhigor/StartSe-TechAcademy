function capturaEnvio(){
    const botaoEnviar = document.querySelector('#enviar');

    botaoEnviar.addEventListener("click", function(){
        const form = document.querySelector('#form');

        const nome  = form.nome.value;
        const tel = form.tel.value;
        const rua = form.rua.value;
        const num = form.num.value;
        const bairro = form.bairro.value;
        const cidade = form.cidade.value;
        const estado = form.estado.value;
        const cep = form.cep.value;

        const table = document.querySelector('#tb-body');
        
        table.innerHTML += `<tr> <td id="tb-nome">${nome}</td> <td id="tb-tel">${tel}</td> <td id="tb-rua">${rua}</td> <td id="tb-num">${num}</td> <td id="tb-bairro">${bairro}</td> <td id="tb-cidade">${cidade}</td> <td id="tb-estado">${estado}</td> <td id="tb-cep">${cep}</td> </tr>`;

    });
};

capturaEnvio();